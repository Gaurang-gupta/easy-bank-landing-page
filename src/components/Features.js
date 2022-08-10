import React from 'react'
import "./Features.css"
const Features = () => {
    return (
        <div className='features__wrapper'>
            <div className='features__main'>
                <h1 className='features__heading'>Why choose Easybank?</h1>
                <p className='features__para'>We leverage Open banking to turn your bank account into your financial hub.</p>
                <p className='features__para'>Control your finances like never before</p>
                <div className='features__cards'>
                    <div className='card'>
                        <img src='./images/icon-online.svg' />
                        <h2 className='card__heading'>Online banking</h2>
                        <p className='card__para'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                    </div>
                    <div className='card'>
                        <img src='./images/icon-online.svg' />
                        <h2 className='card__heading'>Simple Budgeting</h2>
                        <p className='card__para'>See exactly where your money goes each month. Receive notifications When you're close to hitting your limits</p>
                    </div>
                    <div className='card'>
                        <img src='./images/icon-online.svg' />
                        <h2 className='card__heading'>Fast Onboarding</h2>
                        <p className='card__para'>We don't do branches. Open your account in minutes online and start taking control of your finances right away</p>
                    </div>
                    <div className='card'>
                        <img src='./images/icon-online.svg' />
                        <h2 className='card__heading'>Open API</h2>
                        <p className='card__para'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features