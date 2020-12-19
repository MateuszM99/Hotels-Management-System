import React from 'react'
import HotelCard from '../HotelCard/HotelCard'
import './style.scss'

function Hotels_List() {
    return (
        <div className="hotel__main__list">
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
        </div>
    )
}

export default Hotels_List
