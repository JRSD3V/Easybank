import { useState } from 'react'
import Navbar from './comps/Navbar'
import Header from './comps/Home/Header'
import Services from './comps/Home/Services'
import './css/comps/navbar.css'
import './css/comps/header.css'
import './css/comps/services.css'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Services />
    </>
  )

}

export default App
