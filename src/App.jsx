import { useState } from 'react';
import logo from './logo.svg';
import './memory.css';
import Card from './lib/Card';

function App() {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  //🦍🦩🐼🐢🐬


  return (
    <div className="App app__background">

      <div className="game-grid">

        <Card icon='🐬'></Card>
        <Card icon='🐢'></Card>
        <Card icon='🐼'></Card>
        <Card icon='🦩'></Card>
        <Card icon='🦍'></Card>
        <Card icon='🐬'></Card>
        <Card icon='🐢'></Card>
        <Card icon='🐼'></Card>
        <Card icon='🦩'></Card>
        <Card icon='🦍'></Card>

      </div>

    </div>
  )
}

export default App
