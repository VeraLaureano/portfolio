import React from 'react'
import './BigTitle.css'
import PropTypes from 'prop-types'

const BigTitle = ({children}) => {
  return (
    <h2 className="BigTitle">{children}</h2>
  )
}

BigTitle.propTypes = {
  children: PropTypes.node
}

BigTitle.defaultProps = {
  children: ''
}

export default BigTitle