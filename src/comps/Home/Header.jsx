import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='headerTop'>
            <picture>
                <source media='(max-width: 768px)' src='Easybank/images/bg-intro-mobile.svg'></source>
                <source media='(min-width: 769px)' src='Easybank/images/bg-intro-desktop.svg'></source>
                <img src='Easybank/images/bg-intro-desktop.svg' className='headerTopBgImg'/>
            </picture>
            <img src='Easybank/images/image-mockups.png' alt='graphic of 4 phones with banking information on them' className='headerTopPhoneImg'/>
        </div>
        <div className='headerBottom'>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop shop for spending, saving, budgeting, investing, and much more.</p>
            <button>Request Invite</button>
        </div>
    </header>
  )
}

export default Header