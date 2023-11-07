import React from 'react'
import Anchor from './Anchor'
import Title from './Title'
import './About.css'
import Link from './Link'

const About = () => {
  return (
    <section id="4bout" className="About">
    <div className="About__content">
      <div className="About__info">
        <Title>A l1tle of m3.</Title>
        <p className="About__sub"><code>Software Developer</code></p>
        <p className="About__desc">
          Self-taught Software Developer and Computer Engineering student.
          Enthusiastic about problem-solving and process optimization.
          Possess a strong focus on code quality and efficiency.
        </p>
        <Link target="_blank" link="https://drive.google.com/file/d/19olkphqoyboire8M5mF_BJlUL9KcGCmZ/view?usp=sharing"><code><i className="fa-solid fa-download"></i> Download CV</code></Link>
        <ul className="About__links">
          <li><Anchor link="https://www.instagram.com/v3r4_l4ur1/"><i className="fa-brands fa-instagram"></i></Anchor></li>
          <li><Anchor link="https://github.com/VeraLaureano"><i className="fa-brands fa-github"></i></Anchor></li>
          <li><Anchor link="https://www.linkedin.com/in/laureano-vera-320086204/"><i className="fa-brands fa-linkedin-in"></i></Anchor></li>
        </ul>
        <p className="About__other"><code>2023?</code></p>
      </div>
    </div>
  </section>
  )
}

export default About