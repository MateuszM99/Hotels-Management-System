import React, {useState, useEffect} from 'react'
import HotelCard from '../HotelCard/HotelCard'
import './style.scss'
import {useHistory} from 'react-router-dom'
import {getAllHotels} from '../../api/HotelManagementRequest'
import jwt_decode from "jwt-decode";

function Hotels_List() {

    const [hotels, setHotels] = useState(null);
    const history = useHistory();
    const queryParams = new URLSearchParams(history.location.search)

    useEffect(() => {
        // console.log(queryParams.get('search')); // daje nam search stringa
        async function getData() {
            try {
                let response = await getAllHotels();
                setHotels(response.data);
            } catch (err) {
                // TODO if error
            }
        }

        getData();
    }, [])

    return (
        <div className="hotel__main__list">
            {hotels?.map(hotel => {
                return <HotelCard key={hotel.id} ht={hotel}/>
            })}
        </div>
    )
}

export default Hotels_List
