import React from 'react'
import Header from '../Header/Header'
import User_Hotel_Reservations from '../User_Hotel_Reservations/User_Hotel_Reservations'

function Reservations() {
    return (
        <div style={{display : 'flex',flexDirection : 'column',alignItems : 'center'}}>
            <Header/>
            <User_Hotel_Reservations/>
        </div>
    )
}

export default Reservations
