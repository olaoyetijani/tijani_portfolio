import React from 'react'
import './header.css'
import CTA from './CTA'
<<<<<<< HEAD
import { mern_stack } from '../../assets/index'
=======
import {mern_stack} from '../../assets/index'
>>>>>>> 0f2d4ca52a1b58f79dedb7af451c9f5a7030d968
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello I'm </h5> */}
        <h5>Hello, I'm Tijani,</h5>
<<<<<<< HEAD
        <h4 className="text-light">Software Engineer</h4>
=======
        <h4 className="text-light">Full Stack Developer</h4>
>>>>>>> 0f2d4ca52a1b58f79dedb7af451c9f5a7030d968
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