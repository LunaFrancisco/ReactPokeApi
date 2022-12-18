import React from 'react'
import pokeType from '../../mockup/typejson.json'

import './index.css'


export const Card = ({ data }) => {
  let typePokemon = data.types[0].type.name;
  let linkUrl = pokeType[typePokemon].type;
  let bgColor =  pokeType[typePokemon].background;

  return (
    <div  className="card-content">
      <style>{`body { background-color: ${bgColor}; }`}</style>
     <h1 className="card-name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
     <img className="image-pktype" src={linkUrl} alt="Pokemon-Type"></img>
     <img className="card-img" src={data.sprites.front_default} alt="" />
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
