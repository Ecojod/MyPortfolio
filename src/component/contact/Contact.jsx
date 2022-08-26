import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'

import emailjs from 'emailjs-com';
import ContactForm from './ContactForm'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ri9fuu9', 'template_nwuz509', form.current, 'hMTgLE2ETaSq22EyV');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2 className='text-2xl'>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className='contact-option-icon' />
            <h4>Email</h4>
            <h5>yadavtushar2618@gmail.com</h5>
            <a href="mailto:yadavtushar2618@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messanger</h4>
            <h5>Tush Ar</h5>
            <a href="https://m.me/profile.php?id=100017855165480" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact-option">
            <ImWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>+918602101276</h5>
            <a href="https://api.whatsapp.com/send?phone=8602101276" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact