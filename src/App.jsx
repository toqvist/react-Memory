import { useState } from 'react';
import './memory.css';
import Board from './lib/Board';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react/cjs/react.production.min';

function App() {
  //To do
  //- deleting cards should not move remaining cards
  //- Don't repeat myself in toggleSelected
  //- Add delay on match
  //- Random placement

  //Game state
  const [cards, setCards] = useState([])
  const [selections, setSelections] = useState([])
  const [score, setScore] = useState(0);

  //Game parameters
  const iconset = ['🦍', '🦩', '🐼', '🐢', '🐬', '🦜', '🦢']
  const cardPairs = 5;


  function toggleSelected(id) {

    const card = cards.find(card => card.id === id)

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
    

    if(newSelections.length === 2) [
      match(newSelections[0],newSelections[1])

    ]

  }


  function match(card1, card2) {
    if (card1.icon === card2.icon) {
      console.log("Match!")
      setScore(score + 1)


      removeCards(card1, card2)

      const newSelections = []
      setSelections(newSelections)

      if (cards.length === 0) {
        endGame();
      }

    }
  }

  function endGame() {
    console.log("End of game!")
  }

  function startGame() {
    generateBoard();
  }

  function generateBoard() {

    for (let i = 0; i < cardPairs; i++) {

      addCard(iconset[i]);
      addCard(iconset[i]);
    }

  }

  function removeCards(card1, card2) {
    const newCards = cards.filter(c => c.id != card1.id && c.id != card2.id)
    setCards(newCards)

  }

  function addCard(icon) {

    setCards(prevCards => {
      return [...prevCards, { id: uuidv4(), icon: icon, isSelected: false }]
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
      <button onClick={startGame}>Start Game!</button>


    </div>
  )
}

export default App
