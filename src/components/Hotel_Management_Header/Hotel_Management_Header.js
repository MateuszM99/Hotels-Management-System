import React from 'react'
import './style.scss'
import Hotel_Management_HotelCard from '../Hotel_Management_HotelCard/Hotel_Management_HotelCard'
import { Button } from '../Button/Buttons'

function Hotel_Management_Header() {
    return (
        <div className="hotel__management__header">
            <nav className="hotel__management__header__nav">
                <Button marginLeft="50px">Home</Button>
                <Button marginLeft="100px">Hotels list</Button>
                <span>
                    <p>Welcome Username</p>
                    <p>Sign out</p>
                </span>
            </nav>
        </div>
    )
}

export default Hotel_Management_Header
