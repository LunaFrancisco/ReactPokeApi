import axios from 'axios'
import React, { useState } from 'react'
import { Card } from '../card'
import './index.css'
import data from '../../mockup/data.json'

export const PokeForm = () => {
    const [pokeApi, setPokeApi] = useState("")
    
    const [pokemon, setPokemon] = useState("")
    const changeInput = (event) => {
        setPokemon(event.target.value)
    }
    
    const findPokemon = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
            .then(res => {
                setPokeApi(res.data)
            })
            .catch(err => {
                console.log(err)
                alert("Pokemon no encontrado")
            }, [])    
    }

    const setRandom = async() => {
        const random = Math.floor(Math.random() * 898) + 1
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(res => {
                setPokeApi(res.data)
            })
            .catch(err => {
                console.log(err)
                alert("Pokemon no encontrado")
            }, [])
    }
    
    return (
        <>
            <div className='content'>

                <h1>PokeBuscador</h1>
                <div className="search">
                    <div className='input-block'>
                        <input className='input-text' type="text" placeholder="Ditto" value={pokemon} onChange={changeInput} />
                    </div>
                    <button className='Button '
                        onClick={findPokemon}
                    >Buscar</button>
                    <button className='Button Yellow' 
                        onClick={setRandom}
                    >Random</button>
                </div>
            </div>
            <Card
                data={pokeApi ? pokeApi : data}
            />
        </>
    )
}
