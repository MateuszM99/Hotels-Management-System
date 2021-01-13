import React,{useState,useEffect} from 'react'
import HotelCard from '../HotelCard/HotelCard'
import './style.scss'
import {useHistory} from 'react-router-dom'


function Hotels_List() {

    const [hotels,setHotels] = useState(null);
    const history = useHistory();
    const queryParams = new URLSearchParams(history.location.search)


    useEffect(() => {
        console.log(queryParams.get('search')); // daje nam search stringa
        async function getData(){
            try{
                let response = null //request place await getProfileRequest();
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
                <HotelCard key={hotel.id} />
            })}
        </div>
    )
}

export default Hotels_List
