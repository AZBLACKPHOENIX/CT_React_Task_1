import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { HERO } from './components/Hero/hero'
import { OurServices } from './components/services/services'
import { About } from './components/About/about'
import { StatsSection } from './components/stats/stat'
import { Footer } from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HERO/>
      <OurServices/>
      <About/>
      <StatsSection/> 
      <Footer/>
    </>
  )
}

export default App
