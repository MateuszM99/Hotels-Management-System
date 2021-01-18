import React from 'react'
import {Formik, Form, Field, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
import {addEmployee} from "../../api/EmployeesManagementRequests";
import {useHistory, useParams} from 'react-router-dom';

function AddEmployee() {

    const {hotelName} = useParams();
    const history = useHistory();

    return (
        <div className="cm__employees__create__container">
            <Formik
                initialValues={{
                    position: '',
                    email: '',
                    password: '',
                    name: '',
                    surname: '',
                    phoneNr: 0,
                    birthDate: '',
                    address: '',
                    salary: 0
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email().required('Email is required'),
                    password: Yup.string().required('Password is required').min(8, 'Password too short - should be at least 8 characters'),
                    name: Yup.string().required('Name is required'),
                    surname: Yup.string().required('Surname is required'),
                    phoneNr: Yup.number().required('Phone number is required'),
                    birthDate: Yup.string().required('Birthday is required'),
                    address: Yup.mixed().required('Address is required'),
                    salary: Yup.number().required('Salary is required')
                })}

                onSubmit={(values, actions) => {
                    addEmployee(values, localStorage.getItem('jwtToken'))
                        .then(r => {
                                actions.setStatus(undefined);
                                history.push(`/management/hotelManage/${hotelName}/employees`)
                            }
                        ).catch(err => {
                        console.log(err.response.data.message)
                        actions.setStatus({errorMessage: err.response.data.message});
                    })
                }}
                    >
                {({errors, touched, isSubmitting, status, setFieldValue}) => (
                    <Form>
                    <h2>Add Employee</h2>
                    <span>
                    <label className="cm__employees__create__container__label">Choose position</label>
                    <Field className="cm__employees__create__container__input" as="select" name="position">
                    <option value="CLEANER">CLEANER</option>
                    <option value="WAITER">WAITER</option>
                    <option value="COOK">COOK</option>
                    <option value="MAID">MAID</option>
                    </Field>
                    </span>
                {errors.position && touched.position ? <div
                    className="cm__employees__create__container__validation">{errors.position}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Email *</label>
                    <Field className="cm__employees__create__container__input" name="email"/>
                    </span>
                {errors.email && touched.email ?
                    <div className="cm__employees__create__container__validation">{errors.email}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Password *</label>
                    <Field type='password' className="cm__employees__create__container__input" name="password"/>
                    </span>
                {errors.password && touched.password ?
                    <div
                    className="cm__employees__create__container__validation">{errors.password}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Name *</label>
                    <Field className="cm__employees__create__container__input" name="name"/>
                    </span>
                {errors.name && touched.name ?
                    <div className="cm__employees__create__container__validation">{errors.name}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Surname *</label>
                    <Field className="cm__employees__create__container__input" name="surname"/>
                    </span>
                {errors.surname && touched.surname ?
                    <div className="cm__employees__create__container__validation">{errors.surname}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Phone nr *</label>
                    <Field className="cm__employees__create__container__input" name="phoneNr"/>
                    </span>
                {errors.phoneNr && touched.phoneNr ?
                    <div className="cm__employees__create__container__validation">{errors.phoneNr}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Birthday *</label>
                    <Field className="cm__employees__create__container__input" name="birthDate"/>
                    </span>
                {errors.birthDate && touched.birthDate ? <div
                    className="cm__employees__create__container__validation">{errors.birthDate}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Address *<br/>[house nr;street;city;postal-code]</label>
                    <Field className="cm__employees__create__container__input" name="address"/>
                    </span>
                {errors.address && touched.address ?
                    <div className="cm__employees__create__container__validation">{errors.address}</div> : null}
                    <span>
                    <label className="cm__employees__create__container__label">Salary *</label>
                    <Field className="cm__employees__create__container__input" name="salary"/>
                    </span>
                {errors.salary && touched.salary ?
                    <div className="cm__employees__create__container__validation">{errors.salary}</div> : null}
                    <button className="cm__employees__create__container__create__button"
                    type="submit">Add employee
                    </button>
                {status && status.errorMessage ? (
                    <div className="cm__employees__create__container__validation">{status.errorMessage}</div>
                    ) : null}
                    </Form>
                    )}
                    </Formik>
                    </div>
                    )
                }

export default AddEmployee
