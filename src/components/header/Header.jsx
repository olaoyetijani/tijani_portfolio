import React from 'react'
import './header.css'
import CTA from './CTA'
import {mern_stack} from '../../assets/index'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello I'm </h5> */}
        <h5>Hello, I'm Tijani,</h5>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA />
        <HeaderSocial />

        <div className='mern'>
          <img src={mern_stack} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header