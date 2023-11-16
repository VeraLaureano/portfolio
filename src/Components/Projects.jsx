import React from 'react'
import PropTypes from 'prop-types'
import './Projects.css'
import Project from './Project'
import BigTitle from './BigTitle'

const Projects = ({ projects }) => {
  const project = projects[0]
  const project2 = projects[1]
  const project3 = projects[2]
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
        This project represents the Beta version of a robust software I have been working on. It is a gamified e-learning platform with an experience system and user authentication. One of its notable features is an AI chat utilizing the ChatGPT API for intelligent interactions. Technologically, the project is built using Node.js, Express, TypeScript, MongoDB, and React.js with React Router <br /> <br />
        The backend architecture follows the MVC pattern, ensuring effective separation of business logic into a service layer. User authentication is managed through JSON Web Tokens (JWT), and password security is ensured using bcrypt, allowing for future changes with ease. This project blends innovative technology with solid development practices to deliver a unique and secure educational experience. <br />
      </Project>
      <Project
        name={project2.name}
        techs={project2.techs}
        visit={project2.visit}
        code={project2.code}
        image={project2.image}
      >
        ...
      </Project>
      <Project
        name={project3.name}
        techs={project3.techs}
        visit={project3.visit}
        code={project3.code}
        image={project3.image}
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