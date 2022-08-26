import React from 'react'
import './Portfolio.css'
import Img from '../assets/img/portF.jpg'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2 className='text-2xl'>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Img} alt="" />
          </div>
          <h3>This is the Portfolio item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className='btn'>Github Repo</a>
            <a href="https://google.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Img} alt="" />
          </div>
          <h3>This is the Portfolio item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className='btn'>Github Repo</a>
            <a href="https://google.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Img} alt="" />
          </div>
          <h3>This is the Portfolio item Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className='btn'>Github Repo</a>
            <a href="https://google.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio