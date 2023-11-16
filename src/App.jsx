import About from "./Components/About"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Stack from "./Components/Stack"
import Timeline from "./Components/Timeline"
import heroImage from '/hero.jpg'
import projectOneImage from '/01.png'
import projectTwoImage from '/02.png'
import projectThreeImage from '/03.png'
import MyNavbar from "./Components/Navbar"


const projects = [
  {
    name: 'AI-Qlou',
    techs: ['NodeJS', 'Express', 'Typescript', 'MongoDB', 'ReactJS', 'React Router','Eslint', 'AI'],
    visit: 'https://ai-qlou.onrender.com/',
    image: projectOneImage
  },
  {
    name: 'React Movie App',
    techs: ['React', 'React Router', 'TheMovieDB API'],
    visit: 'https://react-mov-app.netlify.app/',
    code: 'https://github.com/LaureanoVera/movies-react-app/tree/master',
    image: projectTwoImage
  },
  {
    name: '422 WRLD API',
    techs: ['NodeJS', 'Express', 'Typescript', 'MongoDB', 'Swagger', 'Eslint', 'AI'],
    visit: 'https://four22-wrld.onrender.com/',
    code: 'https://github.com/VeraLaureano/modo-diablo-api',
    image: projectThreeImage
  },
]

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
