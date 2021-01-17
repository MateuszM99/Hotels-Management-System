import React, {useEffect, useState} from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import UserReservationTR from './UserReservationTR'
import {getAllHotels} from "../../api/HotelManagementRequest";
import {getReservations} from "../../api/ReservationManagementRequest";

function User_Hotel_Reservations() {

    const [reservations, setReservations] = useState(null);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                let response = await getReservations();
                console.log(response.data);
                setReservations(response.data);
            } catch (err) {
                // TODO if error
            }
        }

        getData();
    }, [])

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className="cm__reservations__container">
            {/*<div className="cm__reservations__container__filter">*/}
            {/*    <label>Search : </label>*/}
            {/*    <input onChange={handleSearchChange}></input>*/}
            {/*</div>*/}
            <table>
                <thead>
                <tr>
                    <th>Room Id</th>
                    <th>Start date</th>
                    <th>End Date</th>
                </tr>
                </thead>
                <tbody>
                {reservations?.map(reservation => <UserReservationTR key={reservations.id} res={reservation}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default User_Hotel_Reservations
