import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Menu({gameState, startGame, setGameState}) {

    // function handleStartGame() {
    //     startGame()
    // }

    const fadeIn = useSpring({
        from: {
            opacity: "0.05"
        },
        to: {
            opacity: "1"
        }

    })

    function getSubMenu ( ) {
        return <HighScores/>
    }
//Setgame state not imported
    return (
        <animated.div className="menu-container"
            style={fadeIn}>
            <div className="menu">

                <button onClick={startGame}
                    className="menu-button selectable">
                    Start Game
                </button>
                <button onClick={() => setGameState('menu')}
                    className="menu-button selectable">
                    High Scores
                </button>

            </div>
        </animated.div>
    )
}
