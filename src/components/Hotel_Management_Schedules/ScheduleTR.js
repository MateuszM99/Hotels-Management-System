import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function ScheduleTR(props) {
    return (
        <tr>
            <td>{props.schedule.scheduleId}</td>
            <td>{props.schedule.employeeId}</td>
            <td>{props.schedule.startDate}</td>
            <td>{props.schedule.endDate}</td>
            <td>
                <div className="cm__schedules__container__actions">
                    {/*<Link className="cm__schedules__container__schedule__button" to=''>Edit</Link> */}
                    <button className="cm__schedules__container__schedule__button"
                            onClick={() => props.onClick(props.schedule.scheduleId)}>Delete
                    </button>
                </div>
            </td>
        </tr>


    )
}

export default ScheduleTR
