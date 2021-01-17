import React, { useEffect, useState } from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import UserReservationTR from './UserReservationTR'

function User_Hotel_Reservations() {

    const [reservations,setReservations] = useState(null);
    const [searchString, setSearchString] = useState('');

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className="cm__reservations__container">
            <div className="cm__reservations__container__filter">
                <label>Search : </label>
                <input onChange={handleSearchChange}></input>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone number</th>
                    <th>Birthdate</th>
                    <th>Position</th>
                </tr>
                </thead>
                <tbody>
                {reservations?.map(reservation => <UserReservationTR/>)}
                </tbody>
            </table>
        </div>
    )
}

export default User_Hotel_Reservations
