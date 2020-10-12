import React from 'react';
import './formStyle.css'
import { Formik } from 'formik'
import * as yup from 'yup'

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const formSchema = yup.object().shape({
    email: yup.string()
        .email()
        .required("Email is required"),
    password: yup.string()
        .required("Password is required")
        .min(7),
    username: yup.string()
        .required("Username is required")
        .min(2),
    phone: yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required()
})

function Form() {
    return (
        <div className="form-div">
            <h1 className='form-title'>Form Validation with Formik</h1>
            <div className="">
                <Formik initialValues={{
                    email: "",
                    password: "",
                    username: "",
                    phone: ""
                }}
                    validationSchema={formSchema}
                    onSubmit={(values) => console.log(values)}>

                    {({
                        handleSubmit, handleChange, handleBlur, isValid, values, errors, touched,
                    }) => {

                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="div-input">
                                    <div className="lable-name">
                                        <label htmlFor="email">Email:</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Type your email" />
                                </div>
                                {errors.email && touched.email && <div>
                                    <p className="errors">{errors.email}</p>
                                </div>}
                                <div className="div-input">
                                    <div className="lable">
                                        <label htmlFor="password">Password:</label>
                                    </div>
                                    <input
                                        className="input"
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Type your password" />
                                </div>
                                {errors.password && touched.password && < div >
                                    <p className="errors">{errors.password}</p>
                                </div>}
                                <div className="div-input">
                                    <div className="lable" >
                                        <label htmlFor="Username">Username:</label>
                                    </div>
                                    <input
                                        className="input"
                                        type="username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Username" />
                                </div>
                                {errors.username && touched.username && < div >
                                    <p className="errors">{errors.username}</p>
                                </div>}
                                <div className="div-input">
                                    <div className="lable">
                                        <label htmlFor="phone">Phone Number: </label>
                                    </div>
                                    <input
                                        className="input-phone"
                                        type="text"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Phone Number" />
                                </div>
                                {errors.phone && touched.phone && < div >
                                    <p className="errors">{errors.phone}</p>
                                </div>}
                                <div className="button-wrapper">
                                    <button type="submit" disabled={!isValid ? true : false}
                                        className="button-submit" >LogIn</button>
                                </div>
                            </form>
                        )
                    }}
                </Formik>
            </div>
        </div >


    )
}

export default Form;
