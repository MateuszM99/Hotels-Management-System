import React,{useEffect,useState} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import ReservationTR from './ReservationTR'

function Hotel_Management_Reservations() {

    const [reservations,setReservations] = useState(null);
    const [searchString,setSearchString] = useState('');
    
    useEffect(() => {
        async function getData(){
            try{
                let response = null //request wasz
                console.log(response.data);
                setReservations(response.data); 
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
        <div className="cm__employees__container">
            <div className="cm__employees__container__filter">
                <label>Search : </label>
                <input onChange={handleSearchChange}></input>
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
                    {reservations?.map(employee => {
                        <ReservationTR key={employee.id}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Reservations
