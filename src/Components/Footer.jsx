import React from 'react'
import './Footer.css'
import Anchor from './Anchor'
import Link from './Link'

const Footer = () => {
  return (
    <footer className="Footer">
      <ul className="Footer__links">
        <li><Anchor link="https://www.instagram.com/v3r4_l4ur1/"><i className="fa-brands fa-instagram"></i></Anchor></li>
        <li><Anchor link="https://github.com/VeraLaureano"><i className="fa-brands fa-github"></i></Anchor></li>
        <li><Anchor link="https://www.linkedin.com/in/laureano-vera-320086204/"><i className="fa-brands fa-linkedin-in"></i></Anchor></li>
      </ul>
      <p className="Footer__right"><Link link="https://github.com/VeraLaureano">&copy;Laureano Vera.</Link> All rights reserved.</p>
    </footer>
  )
}

export default Footer