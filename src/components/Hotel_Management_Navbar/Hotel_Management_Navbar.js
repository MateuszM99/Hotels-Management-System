import React from 'react'
import './style.scss'
import HotelIcon from '@material-ui/icons/Hotel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';


function Hotel_Management_Navbar() {
    return (
        <div className="hotel__management__navbar">
            <nav className="hotel__management__navbar__nav">
                <ul className="hotel__management__navbar__nav__list">
                    <li>
                        <HotelIcon style={{marginLeft:'15px'}}/>
                        <p>Rooms manage</p>
                    </li>
                    <li>
                        <AttachMoneyIcon style={{marginLeft:'15px'}}/>
                        <p>Price manage</p>
                    </li>
                    <li>
                        <EventNoteIcon style={{marginLeft:'15px'}}/>
                        <p>Reservation manage</p>
                    </li>
                    <li>
                        <PeopleAltIcon style={{marginLeft:'15px'}}/>
                        <p>Employees manage</p>
                    </li>
                    <li>
                        <ScheduleIcon style={{marginLeft:'15px'}}/>
                        <p>Schedules manage</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Hotel_Management_Navbar
