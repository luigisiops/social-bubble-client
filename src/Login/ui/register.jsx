import React, { useState } from "react"
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

    return (
        <div className="login-container">
            <div className="logo">Social Bubble</div>
            <div className="login-form">
                <div className="username-container">
                    <label>First Name</label>
                    <input className="username-input"
                        name="firstName"
                        type="text"
                        value={fields.firstName}
                        onChange={setField}>
                    </input>
                </div>

                <div className="username-container">
                    <label>Username</label>
                    <input className="username-input"
                        name="lastName"
                        type="text"
                        value={fields.lastName}
                        onChange={setField}>
                    </input>
                </div>
                <div className="username-container">
                    <label>Username</label>
                    <input className="username-input"
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={setField}>
                    </input>
                </div>

                <div className="password-container">
                    <label>Password</label>
                    <input className="password-input"
                        name="password"
                        type="password"
                        value={fields.password}
                        onChange={setField}>
                    </input>
                </div>

                <button className="signIn-button">Sign In</button>
            </div>
            <div className="signup-link">
                <p>Already a user? <NavLink to="/login/">Login</NavLink></p>
            </div>
        </div>
    )
}


export default Register