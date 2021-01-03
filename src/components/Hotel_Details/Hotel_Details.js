import React,{useReducer} from 'react'
import { Button } from '../Button/Buttons'
import ImageGallery from '../ImageGallery/ImageGallery'
import './style.scss'
import {DateRangeInput, DateSingleInput, Datepicker} from '@datepicker-react/styled'
import Select from 'react-select'
import Room_tr from './Room_tr'


const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'focusChange':
        return {...state, focusedInput: action.payload}
      case 'dateChange':
        return action.payload
      default:
        throw new Error()
    }
  }


function Hotel_Details() {
      
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="hotel__details">
            <div className="hotel__details__main">
                <div className="hotel__details__header">
                    <h3>Hotel Name</h3>
                    <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                    <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                    <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                    <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                    <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>   
                </div>  
                <div className="hotel__details__address">
                    <img src="https://img.icons8.com/material-sharp/24/000000/marker.png"></img>
                    <p>Adres</p>
                </div>
                <ImageGallery/>
            </div>
            <div className="hotel__details__description">
                <div className="hotel__details__description__text">
                <h3>Description</h3>
                </div>
                <div className="hotel__details__description__reserve">
                    <img src="https://cf.bstatic.com/xdata/images/xphoto/max240x120/39352933.webp?k=bfaf8a27a70ea05bf329f8bc8d779fd981a068c7bd2edbab42e4bb89fe570ac8&o="></img>
                    <Button marginBottom="10px">Reserve now</Button>
                </div>
            </div>
            <div className="hotel__details__availibility">
                <h3>Availibilty</h3>
                <div className="hotel__details__availibility__settings">
                    <div className="hotel__details__availibility__date__picker">
                        <DateRangeInput
                        onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
                        onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                        startDate={state.startDate}
                        endDate={state.endDate}
                        focusedInput={state.focusedInput}
                        />
                        <Button marginLeft="20px" height="48px">Check</Button>
                    </div>
                    <div className="hotel__details__availibility__rooms">
                    <p>Rooms:</p>
                    <select></select>
                    <p>Adults:</p>
                    <select></select>
                    <p>Children:</p>
                    <select></select>                   
                    </div>
                </div>
            </div>
            <div className="hotel__details__rooms__list">
            <table>
                <thead>
                    <tr>
                    <th>For</th>
                    <th>Name</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Room_tr/>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Hotel_Details
