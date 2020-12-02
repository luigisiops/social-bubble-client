import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./login.css"

import {UserLogin} from '../use-cases/user-login'
import {
    UserClient,
} from "../framework/clients"

export const Login = () => {
    const [fields, setFields] = useState({})

    const [loginStatus, setloginStatus] = useState({})
    const setField = (evt) => 
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    console.log(fields)
    

    return(
        <div className = "login-container">
            <div className = "logo">Social Bubble</div>
            <div className = "login-form">
                <div className = "username-container">
                    <label>Username</label>
                    <input className = "username-input" 
                    name = "email" 
                    type = "email"
                    value = {fields.email}
                    onChange = {setField}>
                    </input>
                </div>
                <div className = "password-container">
                    <label>Password</label>
                    <input className = "password-input" 
                    name = "password"
                    type = "password"
                    value = {fields.password}
                    onChange = {setField}>
                    </input>
                </div>
               
                <button className = "signIn-button">Sign In</button>
            </div>
            <div className = "signup-link">
            <p>Not a user? <NavLink to="/register/">Register</NavLink></p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, {users}) => ({
})

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)