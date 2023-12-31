import React from 'react'
import Title from './Title'
import './Stack.css'

const Stack = () => {
  return (
    <section id="st4ck" className="Stack">
    <div className="Stack__info">
      <Title>DEV Sk1lls</Title>
      <ul className="Stack__list">
        <li><a className="Stack__link" rel='noreferrer' href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
        <li><a className="Stack__link" rel='noreferrer' href="https://expressjs.com/" target="_blank">Express</a></li>
        <li><a className="Stack__link" rel='noreferrer' href="https://react.dev/" target="_blank">React</a></li>
        <li><a className="Stack__link" rel='noreferrer' href="https://nodejs.org/" target="_blank">NodeJS</a></li>
      </ul>
      <ul className="Stack__list">
        <li className="Stack__link">Analytical Capacity</li>
        <li><a className="Stack__link" rel='noreferrer' href="https://nodejs.org/" target="_blank">TypeScript</a></li>
        <li className="Stack__link">Innovative perspectives</li>
      </ul>
    </div>
  </section>
  )
}

export default Stack