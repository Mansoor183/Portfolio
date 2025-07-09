import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <NavBar />

      {/* Header Section */}
      <Header />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Doe. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App