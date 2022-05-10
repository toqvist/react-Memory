import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Menu({ startGame }) {

    const [subMenu, setSubMenu] = useState('menu')


    const fadeIn = useSpring({
        from: {
            opacity: "0.05"
        },
        to: {
            opacity: "1"
        }

    })

    return (
        <animated.div className="menu-container"
            style={fadeIn}>
            <div className="menu">



                {subMenu === 'menu' && <>
                    <button onClick={startGame}
                        className="menu-button selectable">
                        Start Game
                    </button>
                    <button onClick={() => setSubMenu('highscores')}
                        className="menu-button selectable">
                        High Scores
                    </button>

                </>
                }

                {subMenu === 'highscores' && <>
                    <p>Not yet implemented</p>
                    <button onClick={() => setSubMenu('menu')}
                        className="menu-button selectable">
                        Back
                    </button>
                </>}
            </div>
        </animated.div>
    )
}
