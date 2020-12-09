import React, { useState } from "react"
// import { connect } from "react-redux"
import { NavLink, Redirect } from "react-router-dom"
import "./login.css"
import { useHistory } from "react-router-dom"


function Register() {
    const [fields, setFields] = useState({})
    const history = useHistory();

    // const [loginStatus, setloginStatus] = useState({})
    const setField = (evt) =>
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    // console.log(fields)

    function performRegistrationRequest() {
        fetch("http://localhost:8080/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fields),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log("Response", response);
            alert("Thank You For Registering!");
            history.push("/login");
            Redirect("login");
          });
      }

    return (
        <div className="login-container">
            <div className="logo">Social Bubble</div>
            <div className="login-form">
                <div className="username-container">
                    <label>First Name</label>
                    <input className="username-input"
                        name="firstName"
                        type="text"
                        // value={fields.firstName}
                        onChange={setField}>
                    </input>
                </div>

                <div className="username-container">
                    <label>Last Name</label>
                    <input className="username-input"
                        name="lastName"
                        type="text"
                        // value={fields.lastName}
                        onChange={setField}>
                    </input>
                </div>
                <div className="username-container">
                    <label>Email</label>
                    <input className="username-input"
                        name="email"
                        type="email"
                        // value={fields.email}
                        onChange={setField}>
                    </input>
                </div>

                <div className="password-container">
                    <label>Password</label>
                    <input className="password-input"
                        name="password"
                        type="password"
                        // value={fields.password}
                        onChange={setField}>
                    </input>
                </div>

                <button onClick={performRegistrationRequest} className="signIn-button">Register</button>
            </div>
            <div className="signup-link">
                <p>Already a user? <NavLink to="/login/">Login</NavLink></p>
            </div>
        </div>
    )
}


export default Register