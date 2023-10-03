import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'

const Link = ({link, target, children}) => {
  return (
    <a className='Link' rel='noreferrer' target={target} href={link}>{children}</a>
  )
}

Link.propTypes = {
  link: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
}

Link.defaultProps = {
  link: '/',
  target: ''
}

export default Link