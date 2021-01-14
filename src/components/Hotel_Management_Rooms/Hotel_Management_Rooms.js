import React,{useEffect,useState} from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import RoomTR from './RoomTR'

function Hotel_Management_Rooms() {

    const {hotelName} = useParams();
    const [rooms,setRooms] = useState(null);
    const [searchString,setSearchString] = useState('');
    
    useEffect(() => {
        async function getData(){
            try{
                let response = null //request wasz
                console.log(response.data);
                setRooms(response.data); 
            } catch(err) {
                // TODO if error
            }
        }
        
        getData();
    },[])

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <div className="cm__rooms__container">
            <div className="cm__rooms__container__filter">
                <Link to={`/management/hotelManage/${hotelName}/rooms/addRoom`}>Add room</Link>
                <label>Search : </label>
                <input></input>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    <th>Placeholder</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms?.map(room => {
                        <RoomTR key={room.id}/>
                    })}
                </tbody>
            </table>
        </div>   
    )
}

export default Hotel_Management_Rooms
