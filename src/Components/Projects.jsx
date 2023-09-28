import React from 'react'
import PropTypes from 'prop-types'
import './Projects.css'
import Project from './Project'

const Projects = ({ projects }) => {
  return (
    <section className="Projects">
    <h2 className="Projects__title">Proj3cts</h2>
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