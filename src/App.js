import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import Flashcard from './Flashcard';
import AddCard from './AddCard';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
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
    // setFlashcards(flashcards.push({ id: 4, term: 'LOOT', definition: 'LOOT LOOT LOOT' }));
    // return <AddCard flashcards={flashcards}/>

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

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    term: 'Apple',
    definition: 'a yummy fruit'
  },
  {
    id: 2,
    term: 'Banana',
    definition: 'a yellow fruit'
  }, {
    id: 3,
    term: 'Orange',
    definition: 'vitamin c source'
  }
]

export default App;
