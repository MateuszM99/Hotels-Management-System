import React, { useEffect, useState, useReducer } from 'react';
import { Formik, Form, yupToFormErrors, Field } from 'formik';
import * as Yup from 'yup';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './style.scss';
import { DateSingleInput, Datepicker } from '@datepicker-react/styled'
import { registerRequest } from '../../api/SignUpRequest'

const initialState = {
    date: null,
    showDatepicker: false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return { ...state, showDatepicker: action.payload }
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}


function SignUp() {

    const history = useHistory();
    const [date, setDate] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialState)

    if (localStorage.getItem('userData') != null) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="signup__container">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    dateOfBirth: '',
                    address: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Email is required'),
                    password: Yup.string()
                        .required('Password is required'),
                })}

                onSubmit={async (values) => {
                    state.date.setDate(state.date.getDate() + 1);
                    values.dateOfBirth = state.date.toISOString().substring(0, 10);
                    let response = await registerRequest(values);
                    history.push("/");
                }}
            >
                {({ errors, touched, status, isSubmitting }) => (
                    <Form>
                        <div className="signup__container__box">
                            <p>Sign up</p>
                            <div className="signup__container__box__input">
                                <label>First name</label>
                                <Field type="text" placeholder="Enter your first name" name="firstName"></Field>
                                {errors.firstName && touched.firstName ? <div className="signup__container__box__validation">{errors.firstName}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>Last name</label>
                                <Field type="text" placeholder="Enter your last name" name="lastName"></Field>
                                {errors.lastName && touched.lastName ? <div className="signup__container__box__validation">{errors.lastName}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>E-mail</label>
                                <Field type="text" placeholder="Enter your email" name="email"></Field>
                                {errors.email && touched.email ? <div className="signup__container__box__validation">{errors.email}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>Phone Number</label>
                                <Field type="text" placeholder="Enter your phone number" name="phoneNumber"></Field>
                                {errors.phoneNumber && touched.phoneNumber ? <div className="signup__container__box__validation">{errors.phoneNumber}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>Password</label>
                                <Field type="password" placeholder="Enter your password" name="password"></Field>
                                {errors.password && touched.password ? <div className="signup__container__box__validation">{errors.password}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>Confirm Password</label>
                                <Field type="password" placeholder="Enter your password" name="password"></Field>
                                {errors.password && touched.password ? <div className="signup__container__box__validation">{errors.password}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>Address</label>
                                <Field type="text" placeholder="Number;Street;City;Postcode" name="address"></Field>
                                {errors.address && touched.address ? <div className="signup__container__box__validation">{errors.address}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                                <label>Birth Date</label>
                                <DateSingleInput
                                    onDateChange={data => dispatch({ type: 'dateChange', payload: data })}
                                    onFocusChange={focusedInput => dispatch({ type: 'focusChange', payload: focusedInput })}
                                    date={state.date}
                                    showDatepicker={state.showDatepicker}
                                />
                            </div>
                            <button className="signup__container__box__button" type="submit">{isSubmitting ? 'Signin up ...' : 'Sign up'}</button>
                            {status && status.errorMessage ? (
                                <div className="signup__container__box__validation">{status.errorMessage}</div>
                            ) : null}
                            <Link className="signup__container__box__signIn" to="/signIn">Already have an account? Sign in</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp
