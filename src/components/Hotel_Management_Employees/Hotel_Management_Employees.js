import React, {useEffect, useState} from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import EmployeeTR from './EmployeeTR'
import {getAllEmployees} from "../../api/EmployeesManagementRequests";

function Hotel_Management_Employees() {

    const [employees,setEmployees] = useState(null);
    const [searchString,setSearchString] = useState('');

    useEffect(() => {
        async function getData(){
            try{
                getAllEmployees(localStorage.getItem("jwtToken")).then(r => setEmployees(r.data)) //request wasz
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
                    <th>Id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone number</th>
                    <th>Birthdate</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map(employee => <EmployeeTR key={employee.id} employee={employee}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Employees
