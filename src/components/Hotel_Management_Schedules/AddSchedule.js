import React,{useEffect,useState,useReducer} from 'react'
import {Formik,Form,Field, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
import {DateSingleInput} from '@datepicker-react/styled'
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';


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


function AddSchedule() {

    const [date,setDate] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="cm__schedules__create__container">
            <Formik
                initialValues = {{
                   
                }}
                validationSchema = {Yup.object({
                    
                })}

                onSubmit = {(values,{setSubmitting, setStatus,resetForm}) => {
                    
                }}           
            >
            {({ errors, touched,isSubmitting,status,setFieldValue }) => (
                <Form>
                    <h3 style={{marginBottom:'50px'}}>Create schedule</h3>
                    <span>                       
                        <label className="cm__schedules__create__container__label">Start hour</label>
                        <TimePicker className="cm__schedules__create__container__input"/>
                    </span>
                    <span>
                        <label className="cm__schedules__create__container__label">End hour</label>
                        <TimePicker className="cm__schedules__create__container__input" />
                    </span>
                    <span>
                        <label className="cm__schedules__create__container__label">Select date</label>
                        <DateSingleInput
                        onDateChange={data => dispatch({type: 'dateChange', payload: data})}
                        onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
                        date={state.date}
                        showDatepicker={state.showDatepicker}                  
                        />
                    </span>
                    <button className="cm__schedules__create__container__create__button">Add schedule</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default AddSchedule
