import React from 'react'
import './header.css'
import CTA from './CTA'
import {meabout} from '../../assets/index'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hussein Sheu Tijani</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={meabout} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header