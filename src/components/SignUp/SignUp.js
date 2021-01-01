import React from 'react';
import {Formik,Form, yupToFormErrors,Field} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import './style.scss';

function SignUp() {
    return (
        <div>
            <Formik
            initialValues={{
                username : '',
                email : '',
                password : '',
            }}
            validationSchema = {Yup.object({
                username : Yup.string()
                    .required('Username is required'),
                email : Yup.string()
                        .email('Invalid email')
                        .required('Email is required'),
                password : Yup.string()
                    .required('Password is required'),
            })}

            onSubmit = {() => {
                
            }}
            >
                {({ errors, touched,status,isSubmitting }) => (
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
                            <label>Username</label>
                            <Field type="text" placeholder="Enter your username" name="username"></Field>  
                            {errors.username && touched.username ? <div className="signup__container__box__validation">{errors.username}</div> : null}              
                            </div>
                            <div className="signup__container__box__input">
                            <label>E-mail</label>
                            <Field type="text" placeholder="Enter your email" name="email"></Field>
                            {errors.email && touched.email ? <div className="signup__container__box__validation">{errors.email}</div> : null}
                            </div>
                            <div className="signup__container__box__input">
                            <label>Phone Number</label>
                            <Field type="text" placeholder="Enter your phone number" name="phone"></Field>
                            {errors.phone && touched.phone ? <div className="signup__container__box__validation">{errors.phone}</div> : null}
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
