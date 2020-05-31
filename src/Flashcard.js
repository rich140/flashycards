import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)


  return (
    <div className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}>
      <h2 className="term">{flip ? flashcard.definition : flashcard.term}</h2>
    </div >
  )
}
