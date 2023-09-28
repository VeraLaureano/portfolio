import React from 'react'
import PropTypes from 'prop-types'
import './Anchor.css'

const Anchor = ({ link, children }) => {
  return (
    <a className="Anchor" rel='noreferrer' target='_blank' href={link}>
      {children}
    </a>
  )
}

Anchor.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node
}

Anchor.defaultProps = {
  link: '/',
  children: ''
}

export default Anchor