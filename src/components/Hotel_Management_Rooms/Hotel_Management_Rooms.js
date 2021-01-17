import React, { useEffect, useState } from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import RoomTR from './RoomTR'
import { getRoomsByHotelId, deleteRoom } from '../../api/RoomManagementRequest';

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

    const getRooms = async () => {
        try {
            let response = await getRoomsByHotelId(hotelName);
            setRooms(response.data)
        } catch (err) {
            // TODO if error
        }
    }

    const deleteRoomAsync = async (roomId) => {
        try {
            let response = await deleteRoom(roomId);
        } catch (err) {
            // TODO if error
        }
    }

    const handleDeleteRoom = async roomId => {
        await deleteRoomAsync(roomId)
        getRooms()
    }

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
                        return <RoomTR key={room.roomId} roomm={room} onClick={handleDeleteRoom} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Rooms
