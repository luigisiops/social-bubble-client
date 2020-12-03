import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./login.css"

import { UserLogin } from '../use-cases/user-login'
import Axios from "axios";

export const Login = (props) => {
    const [fields, setFields] = useState({})

    const [loginStatus, setLoginStatus] = useState(true);

    Axios.defaults.withCredentials = true;

    const login = async (e) => {
        e.preventDefault()
        const response = await Axios.post("http://localhost:8080/auth/login", {
            email: fields.email,
            password: fields.password
        })
        console.log(response);
        if (!response.data.auth) {
            setLoginStatus(false);
        } else {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            setLoginStatus(true);
        }
    };

    useEffect(async () => {
        const response = await Axios.get("http://localhost:8080/auth/login")
        if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].email);
        }
    }, []);

    const userAuthenticated = async () => {
        const response = await Axios.get("http://localhost:8080/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            console.log(response);
    };

    const setField = (evt) =>
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
        console.log(fields)


    return (
        <div className="login-container">
            <div className="logo">Social Bubble</div>
            <form className="login-form" onSubmit={login}>
                <div className="username-container">
                    <label>Email</label>
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

                <button className="signIn-button" type = "submit">Sign In</button>
            </form>
            {loginStatus && (
                <button className="signIn-button" onClick={userAuthenticated}>check if authenticated</button>
            )}
            <h1>{loginStatus}</h1>
            <div className="signup-link">
                <p>Not a user? <NavLink to="/register/">Register</NavLink></p>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({ type: 'ON_LOGIN' })
    }
}

export default connect(null, mapDispatchToProps)(Login)