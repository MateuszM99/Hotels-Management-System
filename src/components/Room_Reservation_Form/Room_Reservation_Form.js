import React, {useEffect, useState, useReducer} from 'react'
import {Formik, Form, Field, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
import './style.scss'
import {DateSingleInput, Datepicker} from '@datepicker-react/styled'
import {Button} from '../Button/Buttons'
import {useParams} from 'react-router-dom'
import {format} from 'date-fns';
import {createReservation} from "../../api/ReservationManagementRequest";

const initialState1 = {
    date: null,
    showDatepicker: false,
}

const initialState2 = {
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


function Room_Reservation_Form() {

    const {hotelName} = useParams();
    const {roomId} = useParams();
    const [state1, dispatch1] = useReducer(reducer, initialState1)
    const [state2, dispatch2] = useReducer(reducer, initialState2)

    return (
        <div className="reservation__container">
            <div className="reservation__main__container">
                <div className="reservation__main__container__forms">
                    <Formik
                        initialValues={{
                            startDate: '',
                            endDate: ''
                        }}
                        validationSchema={Yup.object({})}

                        onSubmit={(values) => {
                            createReservation(values, roomId);
                            // console.log(values);
                        }}
                    >
                        {({errors, touched, status, isSubmitting, setFieldValue}) => (
                            <Form>
                                <h3 className="reservation__form_header">Reservation details</h3>
                                <div className="reservation__form__inputs">
                                    <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Check in date:</label>
                                        <div>
                                            <DateSingleInput
                                                onDateChange={data => {
                                                    setFieldValue("startDate", format(data.date, 'yyyy-MM-dd'))
                                                    dispatch1({type: 'dateChange', payload: data})
                                                }}
                                                onFocusChange={focusedInput => dispatch1({
                                                    type: 'focusChange',
                                                    payload: focusedInput
                                                })}
                                                date={state1.date}
                                                showDatepicker={state1.showDatepicker}
                                                displayFormat={"yyyy-MM-dd"}
                                            />
                                        </div>
                                    </span>
                                        <span>
                                        <label>Check out date:</label>
                                        <div>
                                            <DateSingleInput
                                                onDateChange={data => {
                                                    setFieldValue("endDate", format(data.date, 'yyyy-MM-dd'))
                                                    dispatch2({type: 'dateChange', payload: data})
                                                }}
                                                onFocusChange={focusedInput => dispatch2({
                                                    type: 'focusChange',
                                                    payload: focusedInput
                                                })}
                                                date={state2.date}
                                                showDatepicker={state2.showDatepicker}
                                                displayFormat={"yyyy-MM-dd"}
                                            />
                                        </div>
                                    </span>
                                    </div>
                                </div>
                                <Button width='300px'>Submit reservation</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Room_Reservation_Form
