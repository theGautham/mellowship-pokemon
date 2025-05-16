import React from 'react'
import './Footer.css'
import poke from '../assets/poke.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/telegram.png'
import x from '../assets/x.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot-left">
        <img src={poke} alt="" />
      </div>
      <div className="foot-right">
        <img src={instagram} alt="" className='social'/>
        <img src={linkedin} alt="" className='social'/>
        <img src={telegram} alt="" className='social'/>
        <img src={x} alt="" className='social'/>
      </div>
    </div>
  )
}

export default Footer
