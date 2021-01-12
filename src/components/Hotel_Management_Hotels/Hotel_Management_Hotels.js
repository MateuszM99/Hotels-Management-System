import React from 'react'
import { Button } from '../Button/Buttons'
import Hotel_Management_HotelCard from '../Hotel_Management_HotelCard/Hotel_Management_HotelCard'
import AddHotel from './AddHotel'

function Hotel_Management_Hotels() {
    return (
        <div className="hotel__main__list">
            <Hotel_Management_HotelCard></Hotel_Management_HotelCard>
            <Hotel_Management_HotelCard></Hotel_Management_HotelCard>
            <Hotel_Management_HotelCard></Hotel_Management_HotelCard>
            <Button width='300px' marginTop='50px'>Register new hotel</Button>
        </div>
    )
}

export default Hotel_Management_Hotels
