import React from 'react'
import './Experience.css'
import { BsPatchCheck } from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills i have</h5>
      <h2 className='text-2xl'>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Deveploment</h3>
          <div className="experience-content">
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>React js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Deveploment</h3>
          <div className="experience-content">
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="article-details">
              <BsPatchCheck className='article-details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience