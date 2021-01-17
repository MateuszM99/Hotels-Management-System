import React,{useState} from 'react'
import './style.scss'
import HotelIcon from '@material-ui/icons/Hotel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link, useHistory, useParams } from 'react-router-dom';


function Hotel_Management_Navbar(props) {

    const history = useHistory();
    const { hotelName } = useParams();
    const [isAdmin,setIsAdmin] = useState(false);
    // console.log(hotelName);

    useEffect(() => {
        if (localStorage.getItem('jwtToken') != null) {
            const token = localStorage.getItem('jwtToken');
            if(jwt_decode(token).role == 'ADMIN'){
                setIsAdmin(true);
            }
        }
    }, [])

    return (
        <div className="hotel__management__navbar">
            <nav className="hotel__management__navbar__nav">
                <ul className="hotel__management__navbar__nav__list">
                    <Link to={`/management/hotelManage/${hotelName}/rooms`} style={isAdmin ? {display:'block'} : {display : 'none'}}>
                        <li>
                            <HotelIcon style={{ marginLeft: '15px' }} />
                            <p>Rooms manage</p>
                        </li>
                    </Link>
                    <Link to={`/management/hotelManage/${hotelName}/reservations`}>
                        <li>
                            <EventNoteIcon style={{ marginLeft: '15px' }} />
                            <p>Reservation manage</p>
                        </li>
                    </Link>
                    <Link to={`/management/hotelManage/${hotelName}/employees`} style={isAdmin ? {display:'block'} : {display : 'none'}}>
                        <li>
                            <PeopleAltIcon style={{ marginLeft: '15px' }} />
                            <p>Employees manage</p>
                        </li>
                    </Link>
                    <Link to={`/management/hotelManage/${hotelName}/schedules`}>
                        <li>
                            <ScheduleIcon style={{ marginLeft: '15px' }} />
                            <p>Schedules manage</p>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Hotel_Management_Navbar
