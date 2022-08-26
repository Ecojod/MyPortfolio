import React from 'react'
import './Testimonials.css'
import Img from '../assets/img/testiM.jpg'
import {MdDeveloperMode} from 'react-icons/md'

// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

function Testimonials() {
  return (
    <section id="domain">
      <h5>Things I Do </h5>
      <h2 className='text-2xl'>Work Domains</h2>

      <Swiper className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{delay:1500}}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client-avatar flex items-center justify-center">
            <MdDeveloperMode/>
          </div>
          <h5 className='client-name'>Full Stack Development</h5>
          <small className="client-review">
           I have started working as a web developer in fabruary, 2022. Till now i have completed 50+ projects. Few months ego i started working on projects that are helping me to master Full Stack Web Development.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar flex items-center justify-center">
            <MdDeveloperMode/>
          </div>
          <h5 className='client-name'>Video Editing</h5>
          <small className="client-review">
            I have been a Gamer since 2016. I love gaming and love to edit gaming videos. I have edited like almost 500+ videos related to Gaming and 100+ other videos. 
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
