import React, { useEffect, useState } from "react";
import Axios from "axios";
import { connect } from "react-redux"
import { NavLink, Redirect } from "react-router-dom"
import "./login.css"

export const Register = () => {
    const [fields, setFields] = useState({})

    const [loginStatus, setloginStatus] = useState({})
    const setField = (evt) =>
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    console.log(fields)
    Axios.defaults.withCredentials = true;

    const register = async (e) => {
        e.preventDefault()
        const response = await Axios.post("http://localhost:8080/auth/register", 
        {
            firstName: fields.firstName,
            lastName: fields.lastName,
            email: fields.email,
            password: fields.password,
        })
        setFields({})
        console.log(response)
    };

    return (
        <div className="login-container">
            <div className="logo">Social Bubble</div>
            <form className="login-form" onSubmit = {register}>
                <div className="username-container">
                    <label>First Name</label>
                    <input className="username-input"
                        name="firstName"
                        type="text"
                        value={fields.firstName}
                        onChange={setField}
                        required>
                    </input>
                </div>
                <div className="username-container">
                    <label>Last Name</label>
                    <input className="username-input"
                        name="lastName"
                        type="text"
                        value={fields.lastName}
                        onChange={setField}
                        required>
                    </input>
                </div>

                <div className="username-container">
                    <label>Email</label>
                    <input className="username-input"
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={setField}
                        required>
                    </input>
                </div>

                <div className="password-container">
                    <label>Password</label>
                    <input className="password-input"
                        name="password"
                        type="password"
                        value={fields.password}
                        onChange={setField}
                        required>
                    </input>
                </div>

                <button className="signIn-button" type ="submit">Register</button>
            </form>
            <div className="signup-link">
                <p>Already a user? <NavLink to="/login/">Login</NavLink></p>
            </div>
        </div>
    )
}


export default Register