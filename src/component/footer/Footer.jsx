import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FiGithub,FiFacebook} from 'react-icons/fi'
function Footer() {
  return (
    <footer>
      <a href="/" className='footer-logo'>ECOGAS</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com"><FiFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://github.com"><FiGithub/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Ecogas Gaming. All Rights Reserved 2022 </small>
      </div>
    </footer>
  )
}

export default Footer