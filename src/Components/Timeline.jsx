import React from 'react'
import './Timeline.css'
import TimelineItem from './TimelineItem'
import BigTitle from './BigTitle'

const Timeline = () => {
  return (
    <section className="Timeline section" id="educ4tion">
    <BigTitle>Education</BigTitle>
    <div className="container section-wrapper">
      <div className="Timeline__items">
        <TimelineItem name="Google" date="2020">
          Introduction to Web Development<br />
          Cibersegurity in Teleworking
        </TimelineItem>
        <TimelineItem name="freeCodeCamp" date="2020 - 2022">
          Basic Frontend (Html, Css) <br />
          JavaScript <br />
          Responsive Design <br />
          Game Development with JS <br />
          Python
        </TimelineItem>
        <TimelineItem name="Udemy" date="2021">
          JavaScript ES6 <br />
          React/Svelte <br />
          Node/Express <br />
          TypeScript <br />
          MongoDB
        </TimelineItem>
        <TimelineItem name="Platzi" date="2021 - 2022">
          ECMAScript 6+ <br />
          Frontend Development <br />
          Asynchronous JavaScript <br />
          Array Manipulation ins JS <br />
          Closures and Scope in JS <br />
          TypeScript <br />
          Svelte <br />
          NodeJS
        </TimelineItem>
        <TimelineItem name="UNLP" date="2022 - Act">
          Computer Engineering
        </TimelineItem>
        <TimelineItem date="To be continue...">
          <i>9 223 372 036 854 775 807</i>
        </TimelineItem>
      </div>
    </div>
  </section>
  )
}

export default Timeline