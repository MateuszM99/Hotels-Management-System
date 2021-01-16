import React from 'react';
import { Formik, Form, yupToFormErrors, Field } from 'formik';
import * as Yup from 'yup';
import { Link,Redirect } from 'react-router-dom';
import './style.scss';
import { loginRequest } from '../../api/SignInRequest';

function SignIn() {

    if(localStorage.getItem('userData') != null){
        return (
            <Redirect to="/"/>
        )
    }

    return (
        <div className="signIn__container">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .required('Username is required'),
                    password: Yup.string()
                        .required('Password is required'),
                })}

                onSubmit={(values) => {
                    loginRequest("Basic " + btoa(values.username + ":" + values.password)).then(response => {
                        localStorage.setItem("jwtToken", response.data)
                    })
                }}
            >
                {({ errors, touched, isSubmitting, status }) => (
                    <Form>
                        <div className="signIn__container__box">
                            <p>Log in</p>
                            <div className="signIn__container__box__input">
                                <label>Username</label>
                                <Field type="text" placeholder="Enter your username" name="username"></Field>
                                {errors.username && touched.username ? <div className="signIn-validation">{errors.username}</div> : null}
                            </div>
                            <div className="signIn__container__box__input">
                                <label>Password</label>
                                <Field type="password" placeholder="Enter your password" name="password"></Field>
                                {errors.password && touched.password ? <div className="signIn-validation">{errors.password}</div> : null}
                            </div>
                            <button className="signIn__container__box__button" type="submit">{isSubmitting ? 'Signin in ...' : 'Sign in'}</button>
                            {status && status.errorMessage ? (
                                <div className="signIn-validation">{status.errorMessage}</div>
                            ) : null}
                            <Link className="signIn__container__box__signup" to="/signUp">Don't have account yet? Sign up</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default SignIn
