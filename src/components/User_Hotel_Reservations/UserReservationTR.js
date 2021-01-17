import React from 'react'

function UserReservationTR() {
    return (
        <tr>
            <td>props.employee.id</td>
            <td>props.employee.email</td>
            <td>props.employee.name</td>
            <td>props.employee.surname</td>
            <td>props.employee.phoneNr</td>
            <td>props.employee.birthDate</td>
            <td>props.employee.position</td>
            <td>props.employee.salary</td>
        </tr>
    )
}

export default UserReservationTR
