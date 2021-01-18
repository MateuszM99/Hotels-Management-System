import React, {useReducer, useState, useEffect} from 'react'
import {Button} from '../Button/Buttons'
import ImageGallery from '../ImageGallery/ImageGallery'
import './style.scss'
import {DateRangeInput, DateSingleInput, Datepicker} from '@datepicker-react/styled'
import Select from 'react-select'
import Room_tr from './Room_tr'
import {date} from 'yup/lib/locale'
import {useHistory, useParams} from 'react-router-dom'
import {ThemeProvider} from "styled-components";
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import {getRoomsByHotelId} from '../../api/RoomManagementRequest';
import {getHotel} from '../../api/HotelManagementRequest';


const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return {...state, focusedInput: action.payload}
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}


function Hotel_Details() {


    const PHOTOS = [];

    const [isLoading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const [hotel, setHotel] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [adultsCheck, setAdultsCheck] = useState(0);
    const [childrenCheck, setChildrenCheck] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState)
    const [minDate, setMinDate] = useState(new Date());
    const {hotelName} = useParams(); // hotel id

    useEffect(() => {
        async function getData() {


            try {
                let hotelResponse = await getHotel(hotelName);
                setHotel(hotelResponse.data);
                let roomResponse = await getRoomsByHotelId(hotelName);
                setRooms(roomResponse.data);
            } catch (err) {
                // TODO if error
            }

        }

        getData();
    }, [])

    const createStars = () => {
        let table = [];
        for (var i = 0; i < hotel.numberOfStars; i++) {
            table.push(<img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>)
        }
        return table;
    }

    const handleAvailibilityAdults = (e) => {
        setAdultsCheck(e.target.value);
    }

    const handleAvailibilityChildren = (e) => {
        setChildrenCheck(e.target.value);
    }

    const handleAvailibilityCheck = async () => {

        // start date 
        // end date
        // adultsCheck
        // childrenCheck

        try {
            let response = null // wasz request
            setRooms(response.data);
        } catch (err) {
            // TODO if error
        }
    }

    if (hotel == null) {
        return (
            <div>
                Error
            </div>
        )
    }

    return (
        <ThemeProvider
            theme={{
                breakpoints: ["32em", "48em", "64em"],
                reactDatepicker: {
                    daySize: [36, 40],
                    fontFamily: "system-ui, -apple-system",
                    colors: {
                        accessibility: "#131620",
                        selectedDay: " #131620",
                        selectedDayHover: "#131620",
                        primaryColor: "#131620"
                    }
                }
            }}
        >
            <div className="hotel__details">
                <div className="hotel__details__main">
                    <div className="hotel__details__header">
                        <h3>Hotel {hotelName}</h3>
                        {
                            createStars()
                        }
                    </div>
                    <div className="hotel__details__address">
                        <img src="https://img.icons8.com/material-sharp/24/000000/marker.png"></img>
                        <p>{hotel.address}</p>
                    </div>
                    <ImageGallery/>
                </div>
                <div className="hotel__details__description">
                    <div className="hotel__details__description__text">
                        <h3>Number of rooms: {hotel.numberOfRooms}</h3>
                        <h3>Number of stars: {hotel.numberOfStars} </h3>
                    </div>
                    <div className="hotel__details__description__reserve">
                        <img
                            src="https://cf.bstatic.com/xdata/images/xphoto/max240x120/39352933.webp?k=bfaf8a27a70ea05bf329f8bc8d779fd981a068c7bd2edbab42e4bb89fe570ac8&o="></img>
                        <Button marginBottom="10px">Reserve now</Button>
                    </div>
                </div>
                <div className="hotel__details__availibility">
                    <h3>Availibilty</h3>
                    <div className="hotel__details__availibility__settings">
                        <div className="hotel__details__availibility__date__picker">
                            <DateRangeInput
                                onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
                                onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                                startDate={state.startDate}
                                endDate={state.endDate}
                                focusedInput={state.focusedInput}
                                minBookingDate={minDate}
                            />
                            <Button marginLeft="20px" height="48px" onClick={handleAvailibilityCheck}>Check</Button>
                        </div>
                        <div className="hotel__details__availibility__rooms">
                            <p>Adults:</p>
                            <select onChange={handleAvailibilityAdults}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <p>Children:</p>
                            <select onChange={handleAvailibilityChildren}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="hotel__details__rooms__list">
                    <table>
                        <thead>
                        <tr>
                            <th>Images</th>
                            <th>Persons</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {rooms?.map(room => {
                            return <Room_tr key={room.roomId} rm={room}/>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Hotel_Details
