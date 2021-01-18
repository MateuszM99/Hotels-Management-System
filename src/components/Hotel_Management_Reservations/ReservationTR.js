import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function ReservationTR(props) {
    console.log(props.res.reservationId);
    return (
        <tr>
            <td>{props.res.roomId}</td>
            <td>{props.res.email}</td>
            <td>{props.res.startDate}</td>
            <td>{props.res.endDate}</td>
            <td>
                <div className="cm__employees__container__actions">
                    <button className="cm__employees__container__employee__button"
                            onClick={() => props.onClick(props.res.reservationId)}>Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ReservationTR
