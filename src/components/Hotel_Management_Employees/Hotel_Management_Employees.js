import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import EmployeeTR from './EmployeeTR'

function Hotel_Management_Employees() {
    return (
        <div className="cm__employees__container">
            <div className="cm__employees__container__filter">
                <Link to={''}>Add employee</Link>
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
                    <EmployeeTR/>
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Employees
