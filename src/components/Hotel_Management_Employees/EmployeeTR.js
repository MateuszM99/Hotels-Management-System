import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function EmployeeTR() {
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
                <div className="cm__employees__container__actions">
                    <Link className="cm__employees__container__employee__button" to=''>Edit</Link> 
                    <button className="cm__employees__container__employee__button">Delete</button>
                </div>
            </td>
        </tr>


    )
}

export default EmployeeTR
