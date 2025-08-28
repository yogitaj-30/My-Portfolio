import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import GitHub from './components/GitHub'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
    </>
  )
}

export default App
