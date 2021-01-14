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
import Hotel_Management_Schedules from '../Hotel_Management_Schedules/Hotel_Management_Schedules'
import AddSchedule from '../Hotel_Management_Schedules/AddSchedule'

function Hotel_Management() {
    return (
        <div>
            <Hotel_Management_Header/>
            <Route exact path="/management/hotels">
                <Hotel_Management_Hotels/>
            </Route>
            <Route path="/management/hotelManage/:hotelName">
                <div style={{display: 'flex'}}>
                    <Hotel_Management_Navbar/>
                    <Route exact path="/management/hotelManage/:hotelName/rooms">
                        <Hotel_Management_Rooms/>
                    </Route>
                    <Route path="/management/hotelManage/:hotelName/rooms/addRoom">
                        <AddRoom/>
                    </Route>
                    <Route path="/management/hotelManage/:hotelName/reservations">
                        <Hotel_Management_Reservations/>
                    </Route>
                    <Route exact path="/management/hotelManage/:hotelName/employees">
                        <Hotel_Management_Employees/>             
                    </Route>
                    <Route exact path="/management/hotelManage/:hotelName/employees/addEmployee">
                        <AddEmployee/>        
                    </Route>
                    <Route exact path="/management/hotelManage/:hotelName/schedules">
                        <Hotel_Management_Schedules/>
                    </Route>
                    <Route exact path="/management/hotelManage/:hotelName/schedules/addSchedule">
                        <AddSchedule/>
                    </Route>
                </div>
            </Route>
        </div>
    )
}

export default Hotel_Management
