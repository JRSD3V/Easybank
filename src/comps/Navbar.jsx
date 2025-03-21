import React, { useState } from 'react'
import '../css/variables.css'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav>
    <div className='navInner'>
    <div className='navLogo'>
            <img src='/Easybank/images/logo.svg' alt='Easybank graphic' />
        </div>
        <ul className={`navLinks ${mobileMenu ? 'active' : ''}`}>
            <li className='navItem'><a href='#'>Home</a></li>
            <li className='navItem'><a href='#'>About</a></li>
            <li className='navItem'><a href='#'>Contact</a></li>
            <li className='navItem'><a href='#'>Blog</a></li>
            <li className='navItem'><a href='#'>Careers</a></li>
        </ul>
        <div className={`burger ${mobileMenu ? 'burgerActive' : ''}`} onClick={toggleMenu}>
            <div className='burgerLine burgerLine1'></div>
            <div className='burgerLine burgerLine2'></div>
            <div className='burgerLine burgerLine3'></div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar