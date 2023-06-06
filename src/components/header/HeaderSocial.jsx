import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/hussein-sheu-tijani-a784791b6/' target="_blank" rel='noopener noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/olaoyetijani' target="_blank" rel='noopener noreferrer'><FaGithub /></a>
        <a href='https://www.instagram.com/olaoye_tijani/' target="_blank" rel='noopener noreferrer'><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocial