import React from 'react'
import './Navbar.css'
import poke from '../assets/poke.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-container'>
        <div className="nav-bottom">
            <h1>Pokémon Team Builder</h1>
            <span>Power up your crew and dominate the battlefield!</span>
        </div>
        <div className="nav-right">
        <a href="https://www.pokemon.com/us"> <img src={poke} alt="pokeball.img"/> </a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
