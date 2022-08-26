import React from 'react'
import './About.css'
import AboutImg from '../assets/img/abouTimg.jpg'
import { TbAward } from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2 className='text-2xl'>About ME</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={AboutImg} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <TbAward className='about-icon' />
              <h5>Experience</h5>
              <small>7+ Months Work</small>
            </article>
            <article className="about-card">
              <FiUsers className='about-icon' />
              <h5>Internships</h5>
              <small>3+ Internships</small>
            </article>
            <article className="about-card">
              <VscFolderActive className='about-icon' />
              <h5>Projects</h5>
              <small>50+ completed projects</small>
            </article>
          </div>

          <p>Hello, This is Ecogas AKA Tushar Yadav. i have started my coding journey in November, 2021. Then i started Web Development in Fabruary, 2022 and found it really interesting. Till now i have completed 50+ projects. Currently i'm trying to master ReactJs, Tailwind and MERN. If you're interested in working with me <span><a href="#contact" className='text-rose-500 font-bold'>Contact Me</a></span> Right now.</p>
          <a href="#contact" className='btn btn-primary'> Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
