import React from 'react'

function UserReservationTR(props) {
    return (
        <tr>
            <td>{props.res.roomId}</td>
            <td>{props.res.startDate}</td>
            <td>{props.res.endDate}</td>
        </tr>
    )
}

export default UserReservationTR
