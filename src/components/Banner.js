import React from 'react'
import "./Banner.css"
const Banner = () => {
    return (
        <>
            <div className='mobile'>
                <img className='app__image' src="./images/image-mockups.png" />
            </div>
            <div className="banner__wrapper">
                <div className='banner__content'>
                    <h1 className='banner__heading'>Next generation</h1>
                    <h1 className='banner__heading'>digital banking</h1>
                    <p className='banner__para'>
                        Take your financial life online. Your Easybank account will be a one-stop-shop from spending, saving, budgeting, investing, and much more
                    </p>
                    <div className='banner__button'>
                        Request Invite
                    </div>
                </div>
            </div>
        </>

    )
}

export default Banner