import React from 'react'
import './header.css'
import CV from '../../assets/tijani_cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA