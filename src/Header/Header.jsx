import React from 'react'
import './Header.css'
import poke from '../assets/poke.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='head-container'>
        <div className="head-bottom">
            <h1>Pokémon Team Builder</h1>
            <span>Power up your crew and dominate the battlefield!</span>
        </div>
        <div className="head-right">
        <a href="https://www.pokemon.com/us"> <img src={poke} alt="pokeball.img"/> </a>
        </div>
    </div>
    </div>
  )
}

export default Header
