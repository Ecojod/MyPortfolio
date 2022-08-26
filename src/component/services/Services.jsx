import React from 'react'
import './Services.css'
import { FcCheckmark } from 'react-icons/fc'
function Services() {
  return (
    <section id='service'>
      <h5>MY Qualification</h5>
      <h2 className='text-2xl'>Education</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>High school</h3>
          </div>
          <ul className="service-list">
            <li>
              <FcCheckmark className='service-list-icon' />
              <p>Completed my High School Education from Spring Dale's School in the year 2018</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Graduation & PostGraduation</h3>
          </div>
          <ul className="service-list">
            <li>
              <FcCheckmark className='service-list-icon' />
              <p>Completed my Bachelors Degree of Science in the year 2021 form PTSN University and currently persuing Masters Degree</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services