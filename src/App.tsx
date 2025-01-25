import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="w-full min-h-[400px]  p-8">
      <div className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-50">
        <NavBar />
      </div>
      <div className="pt-16">
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact/>
      </div>
    </div>
  )
}

export default App