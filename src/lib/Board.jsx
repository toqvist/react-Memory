import React from 'react'
import Card from './Card/'

export default function Board({ cards, toggleSelected, score, moves, resetGame }) {

    return (
        <>
            <div className="score">
                <button className='quit-game selectable'
                    onClick={() => { resetGame() }}>Abandon round</button>
                <p className='score-counter'>{`Score: ${score}`}</p>
                <p className='score-counter'>{`Moves: ${moves}`}</p>
            </div>


            <div className='board'>
                {cards.map(card => {
                    return <Card key={card.id}
                        card={card}
                        toggleSelected={toggleSelected}
                        icon={card.icon}
                    ></Card>
                })}
            </div>
        </>


    )
}
