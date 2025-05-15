import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Mcontainer from '../Mcontainer/Mcontainer'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className="intro">
        <p>Welcome to the Pokémon Team Builder — your companion for crafting the perfect team. Whether you're preparing for competitive battles or just want a well-balanced lineup, our tool helps you pick, plan, and power up your squad with confidence.</p>
      </div>
      <Mcontainer/>
    </div>
  )
}

export default Home
