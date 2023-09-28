import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'

function Title({children}) {
  return (
    <h3 className='Title'>{children}</h3>
  )
}

Title.propTypes = {
  children: PropTypes.node
}

export default Title