import { useState } from 'react';
import logo from './logo.svg';
import './memory.css';
import Board from './lib/Board';
import {v4 as uuidv4} from 'uuid';
import { useEffect } from 'react/cjs/react.production.min';

function App() {

  //Game state
  const [cards, setCards] = useState([])
  const [selections, setSelections] = useState([])  
  const [score, setScore] = useState(0);

  //Game parameters
  const iconset = ['🦍','🦩','🐼','🐢','🐬']
  const cardPairs = 2;

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

  //To do
  //- add deselection
  function match (card1, card2) {
    if (card1.icon === card2.icon) {
      console.log("Match!")
      setScore(score+1)
      
      removeCard(card1, card2)
      
      if(cards.length === 0 ) {
        endGame();
      }

    }
  }

  function endGame() {
    alert("End of game!")
  }
  
  function generateBoard() {
    
    for(let i = 0; i < cardPairs; i++) {
      
      addCard(iconset[i]);
      addCard(iconset[i]);
    }

  }
  
  function removeCard (card1, card2) {
    const newCards = cards.filter(c => c.id != card1.id && c.id != card2.id)
    setCards(newCards)
  }

  function addCard (icon) {
    
    setCards(prevCards => {
      return [...prevCards, {id:uuidv4(), icon:icon, isSelected:false}]
    })
  }

  function addRandomCard () {
    const icon = "🦍"
    
    setCards(prevCards => {
      return [...prevCards, {id:uuidv4(), icon:icon, isSelected:false}]
    })
  }


  return (
    <div className="App app__background">

      <p>{score}</p>
      <Board cards={cards} toggleSelected={toggleSelected}></Board>
      <button onClick={addRandomCard}>Add card</button>

      
    </div>
  )
}

export default App
