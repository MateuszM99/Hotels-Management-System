import React,{useEffect,useState,useReducer} from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import ScheduleTR from './ScheduleTR';
import {DateSingleInput, Datepicker} from '@datepicker-react/styled'
import { ThemeProvider } from "styled-components";
import {deleteEmployee, deleteSchedule, getCurrentSchedules} from "../../api/EmployeesManagementRequests";


const initialState = {
    date: null,
    showDatepicker: false,
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'focusChange':
        return {...state, showDatepicker: action.payload}
      case 'dateChange':
        return action.payload
      default:
        throw new Error()
    }
  }


function Hotel_Management_Schedules() {

    const {hotelName} = useParams();
    const [schedules,setSchedules] = useState(null);
    const [searchString,setSearchString] = useState('');
    const [date,setDate] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if(schedules == null) {
            getSchedules();
        }
    },[schedules])

    const getSchedules = async () => {
        try {
            let response = await getCurrentSchedules(localStorage.getItem("jwtToken"))
            console.log(response.data);
            setSchedules(response.data);
        } catch (err) {
            // TODO
        }
    }

    const deleteScheduleAsync = async (scheduleId) => {
        try {
            await deleteSchedule(scheduleId, localStorage.getItem("jwtToken"));
        } catch (err) {
            // TODO if error
        }
    }

    const handleDeleteSchedule = async scheduleId => {
        await deleteScheduleAsync(scheduleId)
        await getSchedules()
    }

    const handleSearchChange = (e) => {
        setSearchString(e.target.value)
    }

    return (
        <ThemeProvider
        theme={{
        breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: "system-ui, -apple-system",
          colors: {
            accessibility: "#131620",
            selectedDay: " #131620",
            selectedDayHover: "#131620",
            primaryColor: "#131620"
          }
        }
        }}
        >
        <div className="cm__schedules__container">
            <div className="cm__schedules__container__filter">
                <DateSingleInput
                    onDateChange={data => dispatch({type: 'dateChange', payload: data})}
                    onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                    date={state.date}
                    showDatepicker={state.showDatepicker}
                />
                <Link to={`/management/hotelManage/${hotelName}/schedules/addSchedule`}>Add new schedule</Link>
                <label>Search : </label>
                <input className="cm__schedules__container__filter__input"></input>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>Schedule id</th>
                    <th>Employee id name</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules?.map(schedule => {
                        return <ScheduleTR key={schedule.scheduleId} schedule={schedule} onClick={handleDeleteSchedule}/>
                    })}
                </tbody>
            </table>
        </div>   
        </ThemeProvider>
    )
}

export default Hotel_Management_Schedules
