import React from 'react'
import {Form, Formik} from 'formik'

function SignIn() {
    return (
        <div className="signIn__container">
            <Formik
                initialValues={{
                    username : '',
                    password : '',
                }}
                validationSchema = {Yup.object({
                    username : Yup.string()
                        .required('Username is required'),
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

export default SignIn
