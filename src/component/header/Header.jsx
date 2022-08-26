import React from 'react'
import CTA from './CTA'
import './Header.css'
import Me from '../assets/img/headeRimg.jpg'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header id='home'>
      <div className="container header-container">
        <h5 className='header-head'>Hello I'm ...</h5>
        <h1 className='header-head relative'>Tush Ar
          <span className="text-red-400">(Ecojod) </span>
          <div className="loader-body absolute">
            <div className="loader-width">
              <div className="loader"></div>
            </div>
          </div>
        </h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header