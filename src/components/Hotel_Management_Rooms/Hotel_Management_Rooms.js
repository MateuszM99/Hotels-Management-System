import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import RoomTR from './RoomTR'

function Hotel_Management_Rooms() {
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
                    <RoomTR/>
                </tbody>
            </table>
        </div>   
    )
}

export default Hotel_Management_Rooms
