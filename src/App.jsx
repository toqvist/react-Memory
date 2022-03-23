import { useState } from 'react';
import './memory.css';
import Board from './lib/Board';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react/cjs/react.production.min';

function App() {
  //To do
  //- add deselection, on deselect, and on card deletion
  //- deleting cards should not move remaining cards
  //- symbols should be hidden, then revealed

  //Game state
  const [cards, setCards] = useState([])
  const [selections, setSelections] = useState([])
  const [score, setScore] = useState(0);

  //Game parameters
  const iconset = ['🦍', '🦩', '🐼', '🐢', '🐬', '🦜', '🦢']
  const cardPairs = 5;

  function toggleSelected(id) {
    const newCards = [...cards]
    const card = newCards.find(card => card.id === id)
    card.isSelected = !card.isSelected;
    setCards(newCards)

    const newSelections = [...selections, card]
    setSelections(newSelections)
    
    // console.log(newSelections.length)
    console.log(selections.length)
    if (newSelections.length == 2) {
      // determineMatch(selections[0], selections[1])
      if(newSelections[0].icon === newSelections[1].icon) {
        match(newSelections[0],newSelections[1]);
        
      }
    }
  }

  // function toggleSelected(id) {

  //   //If card is not already selected

  //   if (selections.length == 0) {

  //     const newCards = [...cards]
  //     const card = newCards.find(card => card.id === id)
  //     card.isSelected = !card.isSelected;
  //     setCards(newCards)

  //     const newSelections = [...selections, card]
  //     setSelections(newSelections)


  //   }

  //   if (newSelections.length == 1) {
  //     // determineMatch(selections[0], selections[1])
  //     if (newSelections[0].icon === newSelections[1].icon) {
  //       match(newSelections[0], newSelections[1]);

  //     }
  //   }
  // }


  function match(card1, card2) {
    if (card1.icon === card2.icon) {
      console.log("Match!")
      setScore(score + 1)

      removeCards(card1, card2)

      if (cards.length === 0) {
        endGame();
      }

    }
  }

  function endGame() {
    alert("End of game!")
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

      <p>{score}</p>

      <div className="board">
        <Board cards={cards} toggleSelected={toggleSelected}></Board>
      </div>
      {/* <button onClick={addRandomCard}>Add card</button> */}
      <button onClick={startGame}>Start Game!</button>


    </div>
  )
}

export default App
