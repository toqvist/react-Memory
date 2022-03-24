import React, { useState } from 'react'

export default function Card({card, toggleSelected}) {

    function handleSelected (){
        toggleSelected(card.id)
    }

    return (

        // <div className={`card ${card.isSelected && 'selected'}`} onClick={handleSelected}>
        <div onClick={handleSelected}
        className={`selectable ${card.isRemoved && 'removed-card'}` } 
        >
            
            {!card.isSelected &&
                <img src="/src/assets/square-card.svg" alt="" width='150' height='150'/>
            }
            
            {card.isSelected &&
                <div className='card'>
                    <p>
                        {card.icon}
                    </p>
                </div>
            }
        </div>
        // <div>isSelected is {card.isSelected}</div>

        
    )
}

