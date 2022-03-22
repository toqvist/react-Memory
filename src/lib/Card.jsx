import React, { useState } from 'react'

export default function Card(props) {
    //🦍🦩🐼🐢🐬

    //Math.round(Math.random()*5)
    const [isSelected, setSelected] = useState(false);

    function handleClick(event) {  
        // setSelected(!isSelected)
        setSelected(!isSelected);
        console.log("Selected " + event.target + " " + isSelected)
        
    }

    return (
        <div className={`card ${isSelected && 'selected'}`} onClick={handleClick}>
            <div className="border">
                <div className="content">
                    <p>{props.icon}</p>
                    <p>{isSelected}</p>
                </div>
            </div>
        </div>
    )
}
