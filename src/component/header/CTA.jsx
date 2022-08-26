import React from 'react'
import './Header.css'
function CTA() {
  // const url = process.env.REACT_APP_CV_URL;
  return (
    <div className='cta'>
        <a href='https://ecogasportf.web.app' className='btn'>Checkout My Digital CV</a>
        <a href="#contact" className='btn-primary btn'>Lets Talk</a>
    </div>
  )
}

export default CTA