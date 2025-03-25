import React from 'react'

const Services = () => {
  return (
    <section id='services'>
        <div className='servicesWrapper'>
            <div className='servicesIntro'>
                <h2>Why choose<br />Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className='servicesItems'>
                <div className='servicesItem'>
                    <img className='servicesItemIcon' src='Easybank/images/icon-online.svg' alt='Graphic of a hand holding credit cards' />
                    <h3 className='servicesItemTitle'>Online Banking</h3>
                    <p className='servicesItemDesc'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className='servicesItem'>
                    <img className='servicesItemIcon' src='Easybank/images/icon-budgeting.svg' alt='Graphic of a hand holding credit cards' />
                    <h3 className='servicesItemTitle'>Simple Budgeting</h3>
                    <p className='servicesItemDesc'>See exactly where your money goes each month. Recieve notifications when you're close to your hitting limits.</p>
                </div>
                <div className='servicesItem'>
                    <img className='servicesItemIcon' src='Easybank/images/icon-onboarding.svg' alt='Graphic of a hand holding credit cards' />
                    <h3 className='servicesItemTitle'>Fast Onboarding</h3>
                    <p className='servicesItemDesc'>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className='servicesItem'>
                    <img className='servicesItemIcon' src='Easybank/images/icon-api.svg' alt='Graphic of a hand holding credit cards' />
                    <h3 className='servicesItemTitle'>Open API</h3>
                    <p className='servicesItemDesc'>Manage your savings, investments, pensions, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services