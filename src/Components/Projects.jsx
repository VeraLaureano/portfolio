import React from 'react'
import PropTypes from 'prop-types'
import './Projects.css'
import Project from './Project'
import BigTitle from './BigTitle'

const Projects = ({ projects }) => {
  return (
    <section id="pr0j3cts" className="Projects">
    <BigTitle>Proj3cts</BigTitle>
    <div className="Projects__container">
      {projects.map((project, i) => 
        <Project
          key={`${project.name}-${i}`}
          name={project.name}
          techs={project.techs}
          desc={project.desc}
          visit={project.visit}
          code={project.code}
          image={project.image}
        />
      )}
    </div>
  </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

Projects.defaultProps = {
  projects: [{}]
}

export default Projects