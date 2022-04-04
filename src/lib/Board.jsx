import React from 'react'
import Card from './Card/'

export default function Board({cards, toggleSelected}) {


    function renderCards() {
         
    }

    return (
        
        // {renderCards}
        <div className='board'>
            {cards.map(card => {
                return <Card key={card.id}
                card={card}
                toggleSelected={toggleSelected}
                icon={card.icon}
                ></Card>
            })}
        </div>
    )
}
