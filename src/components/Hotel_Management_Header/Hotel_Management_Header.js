import React from 'react'
import './style.scss'
import Hotel_Management_HotelCard from '../Hotel_Management_HotelCard/Hotel_Management_HotelCard'
import { Button } from '../Button/Buttons'
import {Link} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';

function Hotel_Management_Header() {
    return (
        <div className="hotel__management__header">
            <nav className="hotel__management__header__nav">
                <Link to=''>
                    <Button marginLeft="50px">
                        Home
                    </Button>
                </Link>
                <Link to='/management/hotels'>
                <Button marginLeft="100px">
                    Hotels list
                </Button>
                </Link>
                <span>
                    <p><PersonIcon/>Welcome Username</p>
                    <p>Sign out</p>
                </span>
            </nav>
        </div>
    )
}

export default Hotel_Management_Header
