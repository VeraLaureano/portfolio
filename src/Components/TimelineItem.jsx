import React from 'react'
import PropTypes from 'prop-types'
import './TimelineItem.css'

const TimelineItem = ({ name, date, children }) => {
  return (
    <div className="Timeline__item">
      <div className="Timeline__dot"></div>
      <div className="Timeline__date">{date}</div>
      <div className="Timeline__content">
        <h3>{name}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.node
}

TimelineItem.propTypes = {
  date: '',
  name: ''
}

export default TimelineItem