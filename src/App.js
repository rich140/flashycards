import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import Flashcard from './components/Flashcard';
import AddCard from './components/AddCard';
import './App.css';
import { getData } from './utils/api.js';


var firebase = require("firebase/app");
require("firebase/database");
require("firebase/analytics");

var firebaseConfig = {
  apiKey: "AIzaSyBWhtKWxnPdL5DjiwZdz2aCa2Py3xm4zu4",
  authDomain: "flashycards-221e2.firebaseapp.com",
  databaseURL: "https://flashycards-221e2.firebaseio.com/",
  projectId: "flashycards-221e2",
  storageBucket: "flashycards-221e2.appspot.com",
  messagingSenderId: "79644345793",
  appId: "1:79644345793:web:7c30bae7f50472062b9b40",
  measurementId: "G-W7CQFGWZC3"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
firebase.analytics();

const preObject = document.getElementById('object');
const ulList = document.getElementById('list');

const dbRefObject = firebase.database().ref().child('lists');
const dbRefList = dbRefObject.child('sample')

dbRefList.on('value', snap => console.log(snap.val()));
// dbRefObject.on('value', snap => console.log(snap.val()));

// dbRefObject.on('value', snap =>
//   preObject.innerText = JSON.stringify(snap.val(), null, 3)
// );


// dbRefList.on('child_added', snap => {
//   const li = document.createElement('li');
//   li.innerText = snap.key + ": " + snap.val();
//   li.id = snap.key
//   ulList.appendChild(li);
// });

// dbRefList.on('child_changed', snap => {
//   const liChanged = document.getElementById(snap.key);
//   liChanged.innerText = snap.val();
// })

// dbRefList.on('child_removed', snap => {
//   const litoRemove = document.getElementById(snap.key);
//   liToRemove.remove();
// })

function App() {

  const [flashcards, setFlashcards] = useState(getData());
  // const [flashcards, setFlashcards] = useState(dbRefList);
  const [index, setIndex] = useState(0);


  function nextCard() {
    if (index + 1 < flashcards.length) {
      setIndex(index + 1);
    }
  }

  function prevCard() {
    if (index - 1 > 0) {
      setIndex(index - 1);
    }
  }

  function createList() {
    return <FlashcardList flashcards={flashcards} />

  }

  function addCard() {
    return <p>HELLO WORLD </p>;
  }

  return (
    <div className="card_container">
      <button className="createlist" onClick={addCard}>Add Card</button>
      <Flashcard flashcards={flashcards} index={index} />
      <div>
        <button className="prevcard" onClick={prevCard}>Prev</button>
      </div>
      <div>
        <button className="nextcard" onClick={nextCard}>Next</button>
      </div>



    </div>
  );
}



export default App;
