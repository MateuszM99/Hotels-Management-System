import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'


function RoomTR() {
    return (
        <tr>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>
                <div className="cm__rooms__container__actions">
                    <Link className="cm__rooms__container__room__button" to=''>Edit</Link> 
                    <button className="cm__rooms__container__room__button">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default RoomTR
