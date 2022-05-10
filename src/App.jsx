import React, { useState } from 'react';
import './memory.css';
import Board from './lib/Board';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react/cjs/react.production.min';
import { useSpring, animated } from '@react-spring/web';

import HighScore from './lib/HighScore';
import HighScores from './lib/HighScores';
import Menu from './lib/Menu'

function App() {
  //To do
  //- Don't repeat myself in toggleSelected
  //- Resize grid to fit screen
  //- Pick grid rows+columns based on number of cards
  //- Winning screen
  //- Board glitches if pressing abandon button during selection of card(s)
  //- Choose iconset in options

  //Game state
  const [cards, setCards] = useState([])
  const [selections, setSelections] = useState([])
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);


  //Persistent state
  const [highScores, setHighscores] = useState([])

  //menu, highscores, options, playmemory
  const [gameState, setGameState] = useState('menu')

  //Game parameters
  const iconset = ['🦍', '🦩', '🐼', '🐢', '🐬', '🦜', '🦢']
  const cardPairs = 5;


  function toggleSelected(id) {

    if (selections.length >= 2) {
      return;
    }
    const card = cards.find(card => card.id === id)

    if (card.isRemoved) {
      console.log("Card is removed and not selectable")
      return
    }

    //Unselect if the card is selected
    // if (card.isSelected) {
    //   const newSelections = []
    //   setSelections(newSelections)

    //   card.isSelected = !card.isSelected
    //   const newCards = [...cards]
    //   setCards(newCards)

    //   return
    // }

    if (card.isSelected) {

      return
    }

    const newSelections = [...selections, card]
    setSelections(newSelections)

    card.isSelected = !card.isSelected
    const newCards = [...cards]
    setCards(newCards)

    if (newSelections.length === 2) {
      setTimeout(() => {
        match(newSelections[0], newSelections[1])
      }, 1000);

    }

  }

  function match(card1, card2) {
    setMoves(moves + 1)
    if (card1.icon === card2.icon) {
      console.log("Match!")
      setScore(score + 1)


      removeCards(card1, card2)

      const newSelections = []
      setSelections(newSelections)

      if ((score + 1) == cardPairs) {
        endGame();
      }

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
    resetGame()
  }

  function resetGame() {
    setGameState('menu')
    setCards([])
    setScore(0)
    setMoves(0)
  }

  function startGame() {
    setSelections([])
    generateBoard();
    setGameState("playmemory")
  }

  function generateBoard() {

    let newCards = []
    for (let i = 0; i < cardPairs; i++) {

      newCards.push({ id: uuidv4(), icon: iconset[i], isSelected: false, isRemoved: false });
      newCards.push({ id: uuidv4(), icon: iconset[i], isSelected: false, isRemoved: false });
    }

    let randomizedNewCards = []
    for (let i = 0; i < newCards.length; i++) {

      let randomIndex = (Math.random() * newCards.length);

      randomizedNewCards.splice(randomIndex, 0, newCards[i])
    }
    console.log(newCards)
    console.log(randomizedNewCards)
    setCards(randomizedNewCards);
  }

  function removeCards(card1, card2) {
    card1.isRemoved = true;
    card2.isRemoved = true;
    // const newCards = cards.filter(c => c.id != card1.id && c.id != card2.id)
    const newCards = [...cards]
    setCards(newCards)

  }

  function newHighscore(score) {
    const newHighScores = [...highScores, score]
    setHighscores(newHighScores)
  }

  return (
    <div className="App app__background">

      {gameState === 'menu' &&
        <Menu
          gameState={gameState}
          startGame={startGame}
          setGameState={setGameState}
        />
      }

      {gameState === 'playmemory' &&
        <Board
          cards={cards}
          toggleSelected={toggleSelected}
          score={score}
          moves={moves}
          resetGame={resetGame}
        />
      }

    </div>
  )
}

export default App
