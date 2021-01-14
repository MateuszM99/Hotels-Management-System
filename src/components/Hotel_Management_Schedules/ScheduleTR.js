import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function ScheduleTR() {
    return (
        <tr>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>Placeholder</td>
            <td>
                <div className="cm__schedules__container__actions">
                    <Link className="cm__schedules__container__schedule__button" to=''>Edit</Link> 
                    <button className="cm__schedules__container__schedule__button">Delete</button>
                </div>
            </td>
        </tr>


    )
}

export default ScheduleTR
