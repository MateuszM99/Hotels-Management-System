import { Form, Formik } from 'formik'
import React from 'react'

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
                <Form>

                </Form>
            </Formik>
        </div>
    )
}

export default SignUp
