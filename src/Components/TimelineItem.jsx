import React from 'react'
import PropTypes from 'prop-types'
import './TimelineItem.css'

const TimelineItem = ({ date, name, children }) => {
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
  date: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.node
}

TimelineItem.propTypes = {
  date: '',
  name: '',
  children: ''
}

export default TimelineItem