import React from 'react'
import { Button } from '../Button/Buttons'
import SignInButton from '../Button/SignInButton'
import SignUpButton from '../Button/SignUpButton'
import './style.scss'

function Header() {
    return (
        <header>
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
                    <Button>Sign In</Button>
                    <Button>Sign Up</Button>
                </div>    
            </div>
        </header>
    )
}

export default Header
