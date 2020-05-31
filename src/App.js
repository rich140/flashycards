import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards={flashcards} />
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
  }
]

export default App;
