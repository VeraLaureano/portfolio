import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Hero.css'

const Hero = ({image}) => {
  const [text, setText] = useState('Laureano');
  const textLoad = () => {
    setTimeout(() => {
      setText('L4ureano')
    }, 0);
    setTimeout(() => {
      setText('Develop3r')
    }, 4000);
  }

  useEffect(() => {
    textLoad()
    setInterval(textLoad, 8000)
  }, [])

  return (
    <section id='hom3' className='Hero'>
      <div className="Hero__info">
        <div className="Hero__titles">
          <p className='Hero__sub'>I am ·</p>
          <h1 className='Hero__title'>{text}</h1>
        </div>
        <p className="Hero__desc">Model:<br/> 0000 0000 0001 0111<br/> 0000 0000 0001 0010<br/> 0010 0000 0000 0010</p>
      </div>
      <div className="Hero__visual">
        <img className="Hero__image" src={image} alt="Photography by Hugo Heimendinger" />
      </div>
    </section>
  )
}

Hero.propTypes = {
  image: PropTypes.string
}

export default Hero