import React, {useEffect, useState} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import RoomTR from './RoomTR'

function Hotel_Management_Rooms() {

    const [rooms,setRooms] = useState(null);
    
    useEffect(() => {
        async function getData(){
            try{
                let response = null //request wasz
                console.log(response);
                setRooms(response.data); 
            } catch(err) {
                // TODO if error
            }
        }
        
        getData();
    },[])

    const handleSearchChange = (e) => {
        function setSearchString(value) {
        }

        setSearchString(e.target.value)
    }

    return (
        <div className="cm__rooms__container">
            <div className="cm__rooms__container__filter">
                <Link to={''}>Add room</Link>
                <label>Search : </label>
                <input></input>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms?.map(room => {
                        <RoomTR key={room.id}/>
                    })}
                </tbody>
            </table>
        </div>   
    )
}

export default Hotel_Management_Rooms
