import React, {useEffect, useState} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import ReservationTR from './ReservationTR'
import {deleteReservation, getAllReservations} from "../../api/ReservationManagementRequest";
import {deleteEmployee, getAllEmployees} from "../../api/EmployeesManagementRequests";

function Hotel_Management_Reservations() {

    const [reservations, setReservations] = useState(null);
    const [searchString, setSearchString] = useState('');

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             let response = await getAllReservations()
    //             console.log(response.data);
    //             setReservations(response.data);
    //         } catch (err) {
    //             // TODO if error
    //         }
    //     }
    //
    //     getData();
    // }, [])


    useEffect(() => {
        async function getData() {
            if (reservations == null) {
                getReservations();
            }
        }

        getData();
    }, [])

    const getReservations = async () => {
        try {
            let response = await getAllReservations(); //request wasz
            setReservations(response.data)
        } catch (err) {
            // TODO if error
        }
    }

    const deleteReservationAsync = async (reservationId) => {
        try {
            let response = await deleteReservation(reservationId);
        } catch (err) {
            // TODO if error
        }
    }

    const handleDeleteReservation = async reservationId => {
        await deleteReservationAsync(reservationId)
        getReservations()
    }

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className="cm__employees__container">
            <div className="cm__employees__container__filter">
                <label>Search : </label>
                <input onChange={handleSearchChange}></input>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Room id</th>
                    <th>Email</th>
                    <th>Start date</th>
                    <th>End Date</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {reservations?.map(reservation => {
                    return <ReservationTR key={reservation.id} res={reservation} onClick={handleDeleteReservation}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Reservations
