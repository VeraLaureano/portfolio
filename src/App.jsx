import About from "./Components/About"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Stack from "./Components/Stack"
import Timeline from "./Components/Timeline"
import heroImage from '/hero.jpg'
import projectOneImage from '/01.png'
import MyNavbar from "./Components/Navbar"


const projects = [{
  name: 'AI-Qlou',
  techs: ['NodeJS', 'Express', 'Typescript', 'MongoDB', 'ReactJS', 'Eslint', 'AI'],
  visit: 'https://four22-wrld.onrender.com/',
  code: 'https://github.com/VeraLaureano/modo-diablo-api',
  image: projectOneImage
}]

function App() {
  return (
    <>
      <MyNavbar />
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
