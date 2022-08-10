import React from 'react'
import "./Articles.css"
const Articles = () => {
    return (
        <div className='article__wrapper'>
            <div className='article__main'>
                <h1 className='article__heading latest'>Latest Articles</h1>
                <div className='article__cards'>
                    <div className='article__card'>
                        <img className='article__image' src='./images/image-currency.jpg' />
                        <div className='article__card__info'>
                            <p className='article__author'>By Claire Robinson</p>
                            <h2 className='article__heading card__article__heading'>Recieve money in any currency with no fees</h2>
                            <p className='article__para'>
                                The world is getting smaller and we're becoming more mobile.So why you should be forced to only recieve money in a single...
                            </p>
                        </div>
                    </div>
                    <div className='article__card'>
                        <img className='article__image' src='./images/image-restaurant.jpg' />
                        <div className='article__card__info'>
                            <p className='article__author'>By Wilson Hutton</p>
                            <h2 className='article__heading card__article__heading'>Treat yourself without worrying about money</h2>
                            <p className='article__para'>
                                Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...
                            </p>
                        </div>
                    </div>
                    <div className='article__card'>
                        <img className='article__image' src='./images/image-plane.jpg' />
                        <div className='article__card__info'>
                            <p className='article__author'>By Wilson Hutton</p>
                            <h2 className='article__heading card__article__heading'>Take your Easybank card wherever you go</h2>
                            <p className='article__para'>
                                We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're aboard. We'll even show you...
                            </p>
                        </div>
                    </div>
                    <div className='article__card'>
                        <img className='article__image' src='./images/image-confetti.jpg' />
                        <div className='article__card__info'>
                            <p className='article__author'>By Claire Robinson</p>
                            <h2 className='article__heading card__article__heading'>Our inivite-only Beta accounts are now live!</h2>
                            <p className='article__para'>
                                After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Articles