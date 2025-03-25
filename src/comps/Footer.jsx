import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
        <img src='Easybank/images/logo.svg' alt='Easybank logo' className='footerLogo'/>
        <div className='footerMedia'>
            <a href='#'><img src='Easybank/images/icon-facebook.svg' alt='Facebook logo'/></a>
            <a href='#'><img src='Easybank/images/icon-youtube.svg' alt='Facebook logo'/></a>
            <a href='#'><img src='Easybank/images/icon-twitter.svg' alt='Facebook logo'/></a>
            <a href='#'><img src='Easybank/images/icon-pinterest.svg' alt='Facebook logo'/></a>
            <a href='#'><img src='Easybank/images/icon-instagram.svg' alt='Facebook logo'/></a>
        </div>
        <ul className='footerLinks'>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Privacy Policy</a></li>
        </ul>
        <button>Request Invite</button>
        <p className='copyright'>© Easybank. All Rights Reserved</p>
    </footer>
  )
}

export default Footer