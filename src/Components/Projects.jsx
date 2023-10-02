import React from 'react'
import PropTypes from 'prop-types'
import './Projects.css'
import Project from './Project'
import BigTitle from './BigTitle'

const Projects = ({ projects }) => {
  const project = projects[0]
  return (
    <section id="pr0j3cts" className="Projects">
    <BigTitle>Proj3cts</BigTitle>
    <div className="Projects__container">
        <Project
          name={project.name}
          techs={project.techs}
          visit={project.visit}
          code={project.code}
          image={project.image}
        >
        I developed a robust API for musical artists using TypeScript, Node.js, and MongoDB. The implementation follows an MVC architecture, where business logic is strategically separated into a layer called service, ensuring independence with the database and facilitating future changes. <br /> <br />
        To ensure code quality, I used ESLint, and to document the API, Swagger has been integrated, providing a clear and accessible reference for developers. User authentication is managed through JSON Web Tokens (JWT), while bcrypt ensures the protection of stored passwords. <br />
        </Project>
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