import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
function HeaderSocials() {
  return (
    <div className='header-socials '>
        <a href="https://linkedin.com" ><BsLinkedin/></a>
        <a href="https://github.com" ><FaGithub/></a>
        <a href="https://instagram.com" ><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials