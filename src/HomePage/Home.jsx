import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Mcontainer from '../Mcontainer/Mcontainer'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className="intro">
        <p>Build your dream Pokémon team with our sleek app! Filter by type, search, and select six Pokémon with ease.</p>
      </div>
      <Mcontainer/>
    </div>
    
  )
}

export default Home
