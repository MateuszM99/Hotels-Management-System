import React from 'react'
import { Formik, Form, Field, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { addRoom } from '../../api/RoomManagementRequest';

function AddRoom() {
    return (
        <div className="cm__rooms__create__container">
            <Formik
                initialValues={{
                    hotelId: null,
                    price: '',
                    numberOfPeople: '',
                    // image: null,
                    description: '',
                }}
                validationSchema={Yup.object({
                    hotelId: Yup.string()
                        .required('Hotel id is required'),
                    price: Yup.string()
                        .required('Price is required'),
                    numberOfPeople: Yup.string()
                        .required('Persons number is required'),
                    // image: Yup.string()
                    //     .required('Image is required'),
                    description: Yup.mixed()
                        .required('Description is required')
                })}

                onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
                    // console.log(values);
                    addRoom(values);
                }}
            >
                {({ errors, touched, isSubmitting, status, setFieldValue }) => (
                    <Form>
                        <h2>Add room</h2>
                        {/* <span>
                    <label className="cm__rooms__create__container__label">Choose variation</label>
                    <Field className="cm__rooms__create__container__input" as="select" name="productId">
                        <option>New</option>
                    </Field>
                    </span> */}
                        {errors.productId && touched.productId ? <div className="cm__rooms__create__container__validation">{errors.productId}</div> : null}
                        <span>
                            <label className="cm__rooms__create__container__label">Hotel id:</label>
                            <Field className="cm__rooms__create__container__input" name="hotelId"></Field>
                        </span>
                        {errors.name && touched.name ? <div className="cm__rooms__create__container__validation">{errors.name}</div> : null}
                        <span>
                            <label className="cm__rooms__create__container__label">Price:</label>
                            <Field className="cm__rooms__create__container__input" name="price"></Field>
                        </span>
                        {errors.price && touched.price ? <div className="cm__rooms__create__container__validation">{errors.price}</div> : null}
                        <span>
                            <label className="cm__rooms__create__container__label">Persons:</label>
                            <Field className="cm__rooms__create__container__input" name="numberOfPeople"></Field>
                        </span>
                        {errors.sku && touched.sku ? <div className="cm__rooms__create__container__validation">{errors.sku}</div> : null}
                        {/* <span>
                        </span> */}
                        {errors.category && touched.category ? <div className="cm__rooms__create__container__validation">{errors.category}</div> : null}
                        {/* <span>
                            <label className="cm__rooms__create__container__label">Image:</label>
                            <input className="cm__rooms__create__container__file" id="image" name="image" type="file"
                                onChange={(event) => { setFieldValue("image", event.currentTarget.files[0]); }}
                            />
                        </span>
                        {errors.image && touched.image ? <div className="cm__rooms__create__container__validation">{errors.image}</div> : null} */}
                        <span>
                            <label className="cm__rooms__create__container__label">Description:</label>
                            <Field className="cm__rooms__create__container__textarea" as="textarea" name="description"></Field>
                        </span>
                        <button className="cm__rooms__create__container__create__button" type="submit">Add room</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddRoom
