import React, { useState } from 'react'

export default function Card({card, toggleSelected}) {

    function handleSelected (){
        toggleSelected(card.id)
    }

    return (
        <div className={`card ${card.isSelected && 'selected'}`} onClick={handleSelected}>
            <div className="border">
                <div className="content">
                    <p>{card.icon}</p>
                </div>
            </div>
        </div>
    )
}

