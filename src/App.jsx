
import './App.css'
import Projects from './Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import  Navbar from './components/Navbar/Navbar'
import PortfolioBanner from './components/PortfolioBanner/PortfolioBanner'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Skills from './components/Skills/Skills'

function App() {

  return (
    
    <div className=' mx-auto px-2'>
     <Navbar></Navbar>
     <PortfolioBanner></PortfolioBanner>
     <AboutMe></AboutMe>
     <Skills></Skills>
     <Projects></Projects>
     <Education></Education>
     <ProjectSection></ProjectSection>
     <Experience></Experience>
     <Blog></Blog> 
   <Contact></Contact>

        
        </div>
  )
}

export default App
