import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './ContactForm.css'
function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ri9fuu9', 'template_nwuz509', form.current, 'hMTgLE2ETaSq22EyV');
        e.target.reset();
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
                <input type="text" name='name' id='username' className='text-input' autoComplete='off' placeholder='Enter your Full Name' />
                <label className='label' htmlFor="username">Your Full Name</label>
            </div>
            <div className="input-container">
                <input type="email" name='email' id='email' className='text-input' autoComplete='off' placeholder='Enter Your Email' />
                <label className='label' htmlFor="email">Your Email</label>
            </div>
            <div className="input-container">
                <textarea name="message" id="message" cols="30" rows="7" placeholder='Enter Your Message'></textarea>
                <label className='label' htmlFor="message" >Your Message</label>
            </div>
            <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
    )
}

export default ContactForm