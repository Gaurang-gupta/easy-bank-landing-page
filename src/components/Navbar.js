import React, { useEffect, useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [hidden, hiddenHandler] = useState(true);
    const setHidden = () => {
        console.log(hidden)
        hiddenHandler(hidden ? false : true);
    }
    return (
        <div className='test'>
            <div className='wrapper'>
                <div className='logo'>
                    <img src="./images/logo.svg" alt="logo" />
                    <img className='hamburg' onClick={setHidden} src="./images/icon-hamburger.svg" alt="ham" />
                </div>

                <div className={`options__container ${hidden && "hidden"}`}>
                    <ul className='options__list'>
                        <li className='option'>Home</li>
                        <li className='option'>About</li>
                        <li className='option'>Contact</li>
                        <li className='option'>Blog</li>
                        <li className='option'>Careers</li>
                    </ul>
                </div>

                <div className='invite'>
                    <div className='invite__button'>
                        Request Invite
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar