import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link, useParams } from 'react-router-dom'
import RoomTR from './RoomTR'
import { getRoomsByHotelId } from '../../api/GetRooms';

function Hotel_Management_Rooms() {

    const { hotelName } = useParams();
    const [rooms, setRooms] = useState(null);
    const [searchString, setSearchString] = useState('');

    async function getData() {
        try {
            let response = await getRoomsByHotelId(hotelName);
            setRooms(response.data);
        } catch (err) {
            // TODO if error
        }
    }

    useEffect(() => {


        getData();
    }, [])

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className="cm__rooms__container">
            <div className="cm__rooms__container__filter">
                <Link to={`/management/hotelManage/${hotelName}/rooms/addRoom`}>Add room</Link>
                <label>Search : </label>
                <input></input>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Hotel id</th>
                        <th>Room id</th>
                        <th>Price</th>
                        <th>Persons</th>
                        <th>Description</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms?.map(room => {
                        return <RoomTR key={room.roomId} roomm={room} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Rooms
