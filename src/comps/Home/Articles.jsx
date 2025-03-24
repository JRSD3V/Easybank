import React from 'react'

const Articles = () => {
  return (
    <section id='articles'>
        <div className='articlesWrapper'>
            <div className='articlesIntro'>
                <h2>Latest Articles</h2>
            </div>
            <div className='articlesItems'>
                <div className='articlesItem'>
                    <div className='articlesItemImgWrapper'>
                        <img src='Easybank/images/image-currency.jpg' alt='Stock picture of different currencies'/>
                    </div>
                    <div className='articlesInfo'>
                        <p className='articleAuthor'>By Claire Robinson</p>
                        <h4 className='articleTitle'>Receive money in any currency with no fees</h4>
                        <p className='articleDesc'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
                    </div>
                </div>
                <div className='articlesItem'>
                    <div className='articlesItemImgWrapper'>
                        <img src='Easybank/images/image-restaurant.jpg' alt='Stock picture of tasty food on a plate in a resturant'/>
                    </div>
                    <div className='articlesInfo'>
                        <p className='articleAuthor'>By Wilson Hutton</p>
                        <h4 className='articleTitle'>Treat yourself without worrying about money</h4>
                        <p className='articleDesc'>Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you ...</p>
                    </div>
                </div>
                <div className='articlesItem'>
                    <div className='articlesItemImgWrapper'>
                        <img src='Easybank/images/image-plane.jpg' alt='Stock picture of a plane in the sky looking at the wing with clouds in the background'/>
                    </div>
                    <div className='articlesInfo'>
                        <p className='articleAuthor'>By Wilson Hutton</p>
                        <h4 className='articleTitle'>Take your Easybank card everywhere you go</h4>
                        <p className='articleDesc'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
                    </div>
                </div>
                <div className='articlesItem'>
                    <div className='articlesItemImgWrapper'>
                        <img src='Easybank/images/image-confetti.jpg' alt='Stock picture of confetti infront of a blue background'/>
                    </div>
                    <div className='articlesInfo'>
                        <p className='articleAuthor'>By Claire Robinson</p>
                        <h4 className='articleTitle'>Our invite-only Beta accounts are now live!</h4>
                        <p className='articleDesc'>After a lot of hardwork by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles