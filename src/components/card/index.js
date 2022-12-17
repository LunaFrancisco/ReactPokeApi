import React from 'react'
import './index.css'
export const Card = ({ data }) => {
  
  return (
    <div className="card-content">
      <h1 className="card-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
      <img className="card-img" src={ data.sprites.front_default} alt="" />
     <div className="card-footer">
     <div className="abilities">
      <h2 className="card-abilities">Abilities</h2>
      {data.abilities.slice(0, 3).map((ability, index) => {
        return <p key={index}>{ability.ability.name}</p>
      })}
     </div>
     <div className="moves">
      <h2>Moves</h2>
      <ul>
        {data.moves.slice(0, 3).map((move, index) => {
          return <p key={index}>{move.move.name}</p>
        })}
      </ul>
     </div >
     </div>
     
    </div>
  )
}
