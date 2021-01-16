import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function EmployeeTR(props) {

    return (
        <tr>
            <td>{props.employee.id}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.name}</td>
            <td>{props.employee.surname}</td>
            <td>{props.employee.phoneNr}</td>
            <td>{props.employee.birthDate}</td>
            <td>{props.employee.position}</td>
            <td>{props.employee.salary}</td>
            <td>
                <div className="cm__employees__container__actions">
                    {/*<Link className="cm__employees__container__employee__button" to=''>Edit</Link> */}
                    <button className="cm__employees__container__employee__button" onClick={() => props.onClick(props.employee.id)}>Delete</button>
                </div>
            </td>
        </tr>


    )
}

export default EmployeeTR
