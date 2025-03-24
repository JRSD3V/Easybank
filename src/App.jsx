import { useState } from 'react'
import Navbar from './comps/Navbar'
import Header from './comps/Home/Header'
import Services from './comps/Home/Services'
import Articles from './comps/Home/Articles'
import './css/comps/navbar.css'
import './css/comps/header.css'
import './css/comps/services.css'
import './css/comps/articles.css'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Articles />
    </>
  )

}

export default App
