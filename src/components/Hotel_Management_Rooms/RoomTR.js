import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'


function RoomTR(props) {
    return (
        <tr>
            <td>{props.roomm.roomId}</td>
            <td>{props.roomm.roomId}</td>
            <td>{props.roomm.price}</td>
            <td>{props.roomm.numberOfPeople}</td>
            <td>{props.roomm.description}</td>
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
