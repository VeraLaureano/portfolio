import React from 'react'
import Anchor from './Anchor'
import Title from './Title'
import './About.css'

const About = () => {
  return (
    <section className="About">
    <div className="About__content">
      <div className="About__info">
        <Title>A l1tle of m3.</Title>
        <p className="About__sub"><code>Software Developer</code></p>
        <p className="About__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quisquam, sapiente sint at quia harum porro. Id, accusamus? Temporibus a laborum eos, soluta rem veniam labore aliquid aspernatur. Molestias recusandae voluptates exercitationem aperiam id nisi. Tenetur consequuntur laboriosam culpa vero.</p>
        <ul className="About__links">
          <li><Anchor link="/"><i className="fa-brands fa-instagram"></i></Anchor></li>
          <li><Anchor link="/"><i className="fa-brands fa-github"></i></Anchor></li>
          <li><Anchor link="/"><i className="fa-brands fa-linkedin-in"></i></Anchor></li>
        </ul>
        <p className="About__other"><code>2023?</code></p>
      </div>
    </div>
  </section>
  )
}

export default About