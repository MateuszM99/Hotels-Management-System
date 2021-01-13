import React from 'react'
import Hotel_Management_Hotels from '../Hotel_Management_Hotels/Hotel_Management_Hotels'
import Hotel_Management_Header from '../Hotel_Management_Header/Hotel_Management_Header'
import { Route } from 'react-router-dom'
import Hotel_Management_Navbar from '../Hotel_Management_Navbar/Hotel_Management_Navbar'
import Hotel_Management_Rooms from '../Hotel_Management_Rooms/Hotel_Management_Rooms'
import Hotel_Management_Employees from '../Hotel_Management_Employees/Hotel_Management_Employees'
import AddEmployee from '../Hotel_Management_Employees/AddEmployee'
import AddRoom from '../Hotel_Management_Rooms/AddRoom'
import Hotel_Management_Reservations from '../Hotel_Management_Reservations/Hotel_Management_Reservations'

function Hotel_Management() {
    return (
        <div>
            <Hotel_Management_Header/>
            <Route exact path="/management/hotels">
                <Hotel_Management_Hotels/>
            </Route>
            <Route path="/management/hotelManage/:hotelname">
                <div style={{display: 'flex'}}>
                    <Hotel_Management_Navbar/>
                    <Route exact path="/management/hotelManage/:hotelname/rooms">
                        <Hotel_Management_Rooms/>
                    </Route>
                    <Route path="/management/hotelManage/:hotelname/rooms/addRoom">
                        <AddRoom/>
                    </Route>
                    <Route path="/management/hotelManage/:hotelname/reservations">
                        <Hotel_Management_Reservations/>
                    </Route>
                    <Route exact path="/management/hotelManage/:hotelname/employees">
                        <Hotel_Management_Employees/>             
                    </Route>
                    <Route exact path="/management/hotelManage/:hotelname/employees/addEmployee">
                        <AddEmployee/>        
                    </Route>
                    <Route path="/management/hotelManage/:hotelname/schedules">
                                                
                    </Route>
                </div>
            </Route>
        </div>
    )
}

export default Hotel_Management
