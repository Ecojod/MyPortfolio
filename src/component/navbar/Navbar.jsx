import React from 'react'
import './Navbar.css'
import { FcHome } from 'react-icons/fc'
import { BiUserVoice } from 'react-icons/bi'
import { BsBookmarkHeart } from 'react-icons/bs'
import { MdContactPhone } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'
import {MdOutlineDomainVerification} from 'react-icons/md'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  const [showBtn, setShowBtn] = useState('hidden ')
  const toggleBtn =()=>{
    if(showBtn === 'flex'){
      setShowBtn('hidden');
    }
    else{
      setShowBtn('flex')
    }
  }
  return (
    <>
    <div className=''>
      <button onClick={toggleBtn} className={`absolute toggle-btn`}>
        <BsFillMenuButtonWideFill/>
      </button>
      <nav className={`nav-first ${showBtn}`}>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FcHome />  </a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserVoice /> </a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkHeart /> </a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /> </a>
        <a href="#domain" onClick={() => setActiveNav('#domain')} className={activeNav === '#domain' ? 'active' : ''}><MdOutlineDomainVerification /> </a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
      </nav>
    </div>
      <nav className='nav-second'>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FcHome /> <span> Home</span></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserVoice /><span> About</span></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkHeart /><span>Experience </span></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /> <span>Portfolio</span></a>
        <a href="#domain" onClick={() => setActiveNav('#domain')} className={activeNav === '#domain' ? 'active' : ''}><MdOutlineDomainVerification /> <span>WorkDomains</span></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /><span>Contact Me</span></a>
      </nav>
    </>
  )
}

export default Navbar;