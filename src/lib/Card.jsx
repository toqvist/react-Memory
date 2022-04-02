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
            config: { mass: 5, tension: 500, friction: 80 },
        }
    })



    return (

        <animated.div onClick={handleSelected}
            className={`selectable ${card.isRemoved && 'removed-card'}`}
            style={flip}
        >

            {!card.isSelected &&
                <img src="/src/assets/square-card.svg" alt=""
                    width='150' height='150'
                />
            }

            {card.isSelected &&
                <div className='card'>
                    <p>{card.icon}</p>
                </div>
            }
        </animated.div>

    )
}

