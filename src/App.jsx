import { useState } from 'react'
import './App.css'
import './style.css'
import './mediaqueries.css'
import FirstPage from './components/FirstPage'
import HamburgerNav from './components/HamburgerNav'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <FirstPage/>
        <HamburgerNav/>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
