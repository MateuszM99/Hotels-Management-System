import React, {useState, useEffect} from 'react'
import {Button} from '../Button/Buttons'
import Hotel_Management_HotelCard from '../Hotel_Management_HotelCard/Hotel_Management_HotelCard'
import AddHotel from './AddHotel'
import {getAllHotels} from '../../api/HotelManagementRequest'
import {Link} from 'react-router-dom'

function Hotel_Management_Hotels() {

    const [hotels, setHotels] = useState(null);

    useEffect(() => {
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
                return <Hotel_Management_HotelCard key={hotel.id} ht={hotel}/>
            })}
            {/* <Button width='300px' marginTop='50px'>Register new hotel</Button> */}
            <Link to={`/management/hotels/new`}>Register</Link>
        </div>
    )
}

export default Hotel_Management_Hotels
