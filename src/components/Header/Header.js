import React from 'react'
import { Button } from '../Button/Buttons'
import SignInButton from '../Button/SignInButton'
import SignUpButton from '../Button/SignUpButton'
import './style.scss'

function Header() {
    return (
        <header style={{display:'flex',width:'100%'}}>
            <div className="main__header">
                <nav className="main__header__nav">
                    <ul>
                        <li>
                            <span>
                            <img src="https://img.icons8.com/fluent-systems-filled/24/ffffff/home.png"/>
                            <p>Home</p>
                            </span>
                        </li>
                        <li>
                            <span>
                            <img src="https://img.icons8.com/material/24/ffffff/hotel-information.png"/>
                            <p>Hotels</p>
                            </span>
                        </li>
                    </ul>
                </nav>
                <div className="main__header__buttons">
                    <Button height="40px">Sign In</Button>
                    <Button marginLeft="20px" height="40px">Sign Up</Button>
                </div>    
            </div>
        </header>
    )
}

export default Header
