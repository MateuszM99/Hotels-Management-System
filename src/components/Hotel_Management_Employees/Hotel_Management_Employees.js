import React,{useEffect,useState} from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import EmployeeTR from './EmployeeTR'

function Hotel_Management_Employees() {

    const {hotelName} = useParams();
    const [employees,setEmployees] = useState(null);
    const [searchString,setSearchString] = useState('');
    
    console.log(hotelName);
    useEffect(() => {
        async function getData(){
            try{
                let response = null //request wasz
                console.log(response.data);
                setEmployees(response.data); 
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
                <Link to={`/management/hotelManage/${hotelName}/employees/addEmployee`}>Add employee</Link>
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
                    {employees?.map(employee => {
                        <EmployeeTR key={employee.id}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Employees
