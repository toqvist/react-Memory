import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Card({ card, toggleSelected }) {

    function handleSelected() {
        toggleSelected(card.id)
    }

    const flip = useSpring({

        to: {
            // opacity: !card.isSelected ? 0 : 1,
            transform: `perspective(600px) rotateY(${!card.isSelected ? 180 : 0}deg)`,
            config: { mass: 15, tension: 100, friction: 100 },
        }
    })



    return (

        <animated.div onClick={handleSelected}
            className={`card selectable ${card.isRemoved && 'removed-card'}`}
            style={flip}
        >

            
            {!card.isSelected &&
                <img src="/src/assets/square-card.svg" alt=""
                    width='150' height='150' 
                />
            }
            {card.isSelected &&
                <div className='card-front'>
                    <p>{card.icon}</p>
                </div>
            }
        
        </animated.div>

    )
}

