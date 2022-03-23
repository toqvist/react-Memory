import React from 'react'
import Card from './Card/'

export default function Board({cards, toggleSelected}) {

    return (
        cards.map(card => {
            return <Card key={card.id}
            card={card}
            toggleSelected={toggleSelected}
            icon={card.icon}
            ></Card>
        })     
    )
}
