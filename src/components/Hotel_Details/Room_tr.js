import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Button/Buttons'

function Room_tr(props) {
    return (
        <tr>
            <td>Adults</td>
            <td>Standard</td>
            <td>
                <div>
                    <Button>Reserve</Button>
                </div>
            </td>
        </tr>
    )
}

export default Room_tr
