import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { HERO } from './components/Hero/hero'
import { OurServices } from './components/services/services'
import { About } from './components/About/about'
import { StatsSection } from './components/stats/stat'
import { Footer } from './components/footer/footer'

function App() {
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
