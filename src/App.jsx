import { useState } from 'react';
import './memory.css';
import Board from './lib/Board';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react/cjs/react.production.min';

function App() {
  //To do
  //- deleting cards should not move remaining cards
  //- Don't repeat myself in toggleSelected
  //- Random placement
  //- Resize grid to fit screen
  //- Pick grid rows+columns based on number of cards

  //Game state
  const [cards, setCards] = useState([])
  const [selections, setSelections] = useState([])
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false)

  //Game parameters
  const iconset = ['🦍', '🦩', '🐼', '🐢', '🐬', '🦜', '🦢']
  const cardPairs = 5;


  function toggleSelected(id) {

    const card = cards.find(card => card.id === id)

    if(card.isRemoved) {
      console.log("Card is removed and not selectable")
      return
    }

    //Unselect if the card is selected
    if(card.isSelected) {
      const newSelections = []
      setSelections(newSelections)

      card.isSelected = !card.isSelected
      const newCards = [...cards]
      setCards(newCards)
    
      return
    } 
    

    const newSelections = [...selections, card]
    setSelections(newSelections)
    
    //Update state for the card component
    card.isSelected = !card.isSelected
    const newCards = [...cards]
    setCards(newCards)
    
    if(newSelections.length === 2) {
      setTimeout(() => {  
        match(newSelections[0],newSelections[1]) 
      }, 1000);

      // match(newSelections[0],newSelections[1])

    }

  }


  function match(card1, card2) {
    if (card1.icon === card2.icon) {
      console.log("Match!")
      setScore(score + 1)


      removeCards(card1, card2)

      const newSelections = []
      setSelections(newSelections)

      if((score+1) == cardPairs) {
        endGame();
      }
      // if (cards.length === 0) {
      //   endGame();
      // }

    } else {
      console.log("Not a match!")
      const newSelections = []
      setSelections(newSelections)

      card1.isSelected = !card1.isSelected
      card2.isSelected = !card2.isSelected
      
      const newCards = [...cards]
      setCards(newCards)
    
    }

  }

  function endGame() {
    console.log("End of game!")
    setGameStarted(false)
    setCards([])
    setScore(0)
  }

  function startGame() {
    generateBoard();
    setGameStarted(true)
  }

  function generateBoard() {

    for (let i = 0; i < cardPairs; i++) {

      addCard(iconset[i]);
      addCard(iconset[i]);
    }

  }

  function removeCards(card1, card2) {
    card1.isRemoved = true;
    card2.isRemoved = true;
    // const newCards = cards.filter(c => c.id != card1.id && c.id != card2.id)
    const newCards=[...cards]
    setCards(newCards)

  }

  function addCard(icon) {

    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), icon: icon, isSelected: false, isRemoved: false  }]
    })
  }

  function addRandomCard() {
    const icon = "🦍"

    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), icon: icon, isSelected: false }]
    })
  }


  return (
    <div className="App app__background">

      <p className='score-counter'>{score}</p>

      <div className="board">
        <Board cards={cards} toggleSelected={toggleSelected}></Board>
      </div>
      {/* <button onClick={addRandomCard}>Add card</button> */}
      
      {!gameStarted &&
        <button onClick={startGame}
          className="start-game-button">
          Start Game!
        </button>
      }


    </div>
  )
}

export default App
