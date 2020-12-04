import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./login.css"

//import {onUserLogin, onCreateOrUpdateBubble, onCreateOrUpdateBubbleUser} from '../framework/actions'
import {SendLogin} from '../use-cases/user-login'


export const Login = ({userLogin}) => {
    const [fields, setFields] = useState({})

    const [loginStatus, setloginStatus] = useState({})
    const setField = (evt) =>
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })

        const performLoginRequest = () => {

            /*fetch('http://localhost:8080/login',{
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify(fields)
            }).then(response => response.json())
            .then(result => {
              if(result.success) {
                // logged in successfully 
                // dispatch an action and update the isAuthenticated to true */
             /* }
            })*/
          }
    console.log(fields)


    return (
        <div className="login-container">
            <div className="logo">Social Bubble</div>
            <div className="login-form">
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

                <button className="signIn-button" onClick = {() => userLogin({fields})}>Sign In</button>
            </div>
            <div className="signup-link">
                <p>Not a user? <NavLink to="/register/">Register</NavLink></p>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
        userLogin: SendLogin(dispatch)
})

export default connect(null, mapDispatchToProps)(Login)