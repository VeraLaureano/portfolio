import React from 'react'
import PropTypes from 'prop-types'
import './Project.css'
import Title from './Title'

const Project = ({ name, techs, visit, code, image, children }) => {
    const toString = (techs) => {
      let string = ''

      for (let i = 0; i < techs.length; i++) {
        if (i != 0)
          string += ' / '
        string += techs[i]
      }

      return string
    } 

    return (
    <div className="Project">
        <div className="Project__info">
          <div className="main">
            <Title>{name}</Title>
            <code className="tech">{toString(techs)}</code>
          </div>
          <p className="desc">{children}</p>
          <div className="links">
            <a rel='noreferrer' href={visit} target="_blank"><i className="fa-solid fa-link"></i> Visit</a>
            {code
              ?<a rel='noreferrer' href={code} target="_blank"><i className="fa-solid fa-code"></i> Code</a>
              : ''}
          </div>
        </div>
        <div className="Project__visual">
          <img src={image} alt="Project image" className="image" />
        </div>
      </div>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  techs: PropTypes.array,
  visit: PropTypes.string,
  code: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node
}

Project.defaultProps = {
  name: 'Project',
  techs: [],
  visit: '/',
  code: undefined,
  image: ''
}


export default Project