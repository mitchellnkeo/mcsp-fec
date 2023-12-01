import React from 'react'

const DeckButtons = ({ decks, handleDeckButtonClick }) => {
    return (
        <div>
            {decks.map((deck) => (
                <button
                key={deck.id}
                onClick={() => handleDeckButtonClick(deck.id)}
                > Deck {deck.id} 
                </button>
            ))}
        </div>
    )
}

const CorrectButtons = ({ decks, handleDeckButtonClick }) => {
    const handleClearClick = () => {
        localStorage.clear()
    }

  return (
    <>
      <DeckButtons decks={decks} handleDeckButtonClick={handleDeckButtonClick} />
      <button onClick={handleClearClick}>Clear Local Storage</button>
    </>
  )
}

export default CorrectButtons