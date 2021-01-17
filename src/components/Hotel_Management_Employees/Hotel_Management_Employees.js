import React, {useEffect, useState} from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import EmployeeTR from './EmployeeTR'
import {deleteEmployee, getAllEmployees} from "../../api/EmployeesManagementRequests";

function Hotel_Management_Employees() {

    const {hotelName} = useParams();
    const [employees, setEmployees] = useState(null);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        if(employees == null) {
            getEmployees();
        }
    }, [employees])

    const getEmployees = async () => {
        try {
            let response = await getAllEmployees(localStorage.getItem("jwtToken")); //request wasz
            setEmployees(response.data)
        } catch (err) {
            // TODO if error
        }
    }

    const deleteEmployeeAsync = async (employeeId) => {
        try {
            let response = await deleteEmployee(employeeId, localStorage.getItem("jwtToken"));
        } catch (err) {
            // TODO if error
        }
    }

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    const handleDeleteEmployee = async employeeId => {
        await deleteEmployeeAsync(employeeId)
        getEmployees()
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
                {employees?.map(employee => <EmployeeTR key={employee.id} employee={employee} onClick={handleDeleteEmployee}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Hotel_Management_Employees
