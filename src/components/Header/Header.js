import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to=''>
                            <span>
                            <img src="https://img.icons8.com/fluent-systems-filled/24/ffffff/home.png"/>
                            <p>Home</p>
                            </span>
                        </Link>
                        </li>
                        <li>
                            <Link to='/management/hotels'>
                                <span>
                                <img src="https://img.icons8.com/material/24/ffffff/hotel-information.png"/>
                                <p>Hotels</p>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="main__header__buttons">
                    <Link to='/signIn'>
                        <Button height="40px">
                            Sign In
                        </Button>
                    </Link>
                    <Link to='/signUp'>
                        <Button marginLeft="20px" height="40px">
                            Sign Up
                        </Button>
                    </Link>
                </div>    
            </div>
        </header>
    )
}

export default Header
