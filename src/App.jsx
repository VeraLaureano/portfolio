import About from "./Components/About"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Stack from "./Components/Stack"
import Timeline from "./Components/Timeline"
import heroImage from '/hero.jpg'
import projectOneImage from '/01.png'
import projectTwoImage from '/02.png'

const projects = [{
  name: 'Auth Service',
  techs: ['NodeJS', 'Express', 'MongoDB', 'Eslint', 'Swagger','AI'],
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio reiciendis harum nulla, culpa temporibus cupiditate quisquam tempora aspernatur, sunt neque in, ratione laboriosam fuga accusamus minima dolor totam. Nostrum.',
  visit: 'https://user-auth-5bdr.onrender.com/',
  code: 'https://github.com/VeraLaureano/autenticacion',
  image: projectOneImage
}, {
  name: '422WRLD API',
  techs: ['NodeJS', 'Express', 'Typescript', 'MongoDB', 'Eslint', 'Swagger','AI'],
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odio reiciendis harum nulla, culpa temporibus cupiditate quisquam tempora aspernatur, sunt neque in, ratione laboriosam fuga accusamus minima dolor totam. Nostrum.',
  visit: 'https://four22-wrld.onrender.com/',
  code: 'https://github.com/VeraLaureano/modo-diablo-api',
  image: projectTwoImage
}]

function App() {
  return (
    <>
      <main>
        <Hero image={heroImage} />
        <About />
        <Stack />
        <Timeline />
        <Projects projects={projects} />
      </main>
      <Footer />
    </>
  )
}

export default App
