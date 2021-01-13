import React,{useState,useEffect} from 'react'
import { Button } from '../Button/Buttons'
import Hotel_Management_HotelCard from '../Hotel_Management_HotelCard/Hotel_Management_HotelCard'
import AddHotel from './AddHotel'

function Hotel_Management_Hotels() {

    const [hotels,setHotels] = useState(null);

    useEffect(() => {
        async function getData(){
            try{
                let response = null //request wasz
                console.log(response.data);
                setHotels(response.data); 
            } catch(err) {
                // TODO if error
            }
        }
        
        getData();
    },[])

    return (
        <div className="hotel__main__list">
            {hotels?.map(hotel => {
                <Hotel_Management_HotelCard key={hotel.id}/>
            })}
            <Button width='300px' marginTop='50px'>Register new hotel</Button>
        </div>
    )
}

export default Hotel_Management_Hotels
