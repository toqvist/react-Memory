import React from 'react'

export default function Card(props) {
  //🦍🦩🐼🐢🐬

  //Math.round(Math.random()*5)
    

  return (
      <div className="card">
          <div className="border">
              <div className="content">
              <p>{props.icon}</p>
              </div>
          </div>
      </div>
  )
}
