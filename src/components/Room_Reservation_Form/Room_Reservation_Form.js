import React from 'react'
import {Formik,Form,Field, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
import './style.scss'
import {DateSingleInput, Datepicker} from '@datepicker-react/styled'
import { Button } from '../Button/Buttons'

function Room_Reservation_Form() {
    return (
        <div className="reservation__container">   
            <div className="reservation__main__container">
                <div className="reservation__main__container__forms">
                    <Formik
                    initialValues={{
                        email: '',
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        dateOfBirth: '',
                        postCode: '',
                        city: '',
                        street: '',


                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email')
                            .required('Email is required'),
                        password: Yup.string()
                            .required('Password is required'),
                    })}

                    onSubmit={(values) => {
                        
                    }}
                    >
                    {({ errors, touched, status, isSubmitting }) => (
                        <Form>
                            <h3 className="reservation__form_header">Client details</h3>
                            <div className="reservation__form__inputs">
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>First name:</label>
                                        <div>
                                            <Field type="text" name="postCode" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Last name:</label>
                                        <div>
                                            <Field type="text" name="postCode" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                                        </div>
                                    </span>
                                </div>
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Email address:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Phone number:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <h3 className="reservation__form_header">Address details</h3>
                            <div className="reservation__form__inputs">
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Country:</label>
                                        <div>
                                            <Field type="text" name="postCode" className="reservation__form__inputs__row_input_width2"></Field>
                                            {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                                        </div>
                                    </span>
                                </div>
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>City:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width2"></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                </div>
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Street:</label>
                                        <div>
                                            <Field type="text" name="street" className="reservation__form__inputs__row_input_width" style={{width: "400px"}}></Field>
                                            {errors.street && touched.street ? <div className="validation">{errors.street}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Post-Code:</label>
                                        <div>
                                            <Field type="text" name="postCode" className="reservation__form__inputs__row_input_width" style={{width: "125px"}}></Field>
                                            {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <h3 className="reservation__form_header">Reservation details</h3>
                            <div className="reservation__form__inputs">
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Hotel name:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Hotel address:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                </div>
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Room name:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Room for:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                </div>
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Check in date:</label>
                                        <div>
                                            <DateSingleInput/>
                                            {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Check out date:</label>
                                        <div>
                                            <DateSingleInput/>
                                            {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                                        </div>
                                    </span>
                                </div>
                                <div className="reservation__form__inputs__row">
                                    <span>
                                        <label>Adults:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width"></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                                        </div>
                                    </span>
                                    <span>
                                        <label>Children:</label>
                                        <div>
                                            <Field type="text" name="city" className="reservation__form__inputs__row_input_width"></Field>
                                            {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
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
