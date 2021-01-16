import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Buttons'
import SignInButton from '../Button/SignInButton'
import SignUpButton from '../Button/SignUpButton'
import './style.scss'
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {

    const [isSignedIn,setIsSignedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('jwtToken') != null){
            setIsSignedIn(true);
        }
    }, [])

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
                        <li style={isSignedIn ? {display : 'flex'} : {display: 'none'}}>
                            <Link to='/management/hotels'>
                                <span>
                                <img src="https://img.icons8.com/material/24/ffffff/hotel-information.png"/>
                                <p>Hotels</p>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="main__header__signedIn" style={isSignedIn ? {display : 'flex'} : {display: 'none'}}>
                    <span>
                        <PersonIcon/>
                        <p>Username</p>
                    </span>
                    <span>
                        <ExitToAppIcon/>
                        <a>Sign out</a>
                    </span>
                </div>
                <div className="main__header__buttons" style={isSignedIn ? {display : 'none'} : {display: 'flex'}}>
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
