import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'

const Link = ({link, children}) => {
  return (
    <a className='Link' href={link}>{children}</a>
  )
}

Link.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
}

Link.defaultProps = {
  link: '/'
}

export default Link