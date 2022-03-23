import { useState } from 'react';
import logo from './logo.svg';
import './memory.css';
import Board from './lib/Board';
import {v4 as uuidv4} from 'uuid';

function App() {

  //🦍🦩🐼🐢🐬
  const [cards, setCards] = useState([])

  function toggleSelected(id) {
    const newCards = [...cards]
    const card = newCards.find(card => card.id === id)
    card.isSelected = !card.isSelected;
    setCards(newCards)
  }


  function addCard () {
    setCards(prevCards => {
      return [...prevCards, {id:uuidv4(), icon:"🐬", isSelected:false}]
    })
  }

  return (
    <div className="App app__background">

      <Board cards={cards} toggleSelected={toggleSelected}></Board>
      <button onClick={addCard}>Add card</button>
      
    </div>
  )
}

export default App
