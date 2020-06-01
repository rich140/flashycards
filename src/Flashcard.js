import React, { useState } from 'react';
import './Flashcard.css';


export default function Flashcard(props) {
  const [flip, setFlip] = useState(false)

  return (

    <div className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}>
      <h2 className={'term'}>{flip ? props.flashcards[props.index].definition : props.flashcards[props.index].term}</h2>
    </div>
  )
}
