import {  } from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import './App.css'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-[#F5F5DC]'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Certifications></Certifications>
      <Contact></Contact>
    </div>
  )
}

export default App
