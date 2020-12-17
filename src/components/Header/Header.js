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
                        <li>Home</li>
                        <li>Hotels</li>
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
