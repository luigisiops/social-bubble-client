import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./login.css"

import { UserLogin } from '../use-cases/user-login'
import Axios from "axios";
  
function Login(props) {
    const [fields, setFields] = useState({})
    const [loginStatus, setLoginStatus] = useState(true);
    // const [adminUser, setAdminUser] = useState({});
    // const [guestUser] = useState({
    //   username: "David",
    //   password: "1234",
    // });

    // handleLogin = (e) => {
    //     this.setState({
    //       user: {
    //         ...this.state.user,
    //         [e.target.name]: e.target.value,
    //       },
    //     });
    //   };

      function handleLogin(e) {
        setFields({
          ...fields,
          [e.target.name]: e.target.value,
        });
      }
    
    //   function handleAdminLogin(e) {
    //     setAdminUser({
    //       ...adminUser,
    //       [e.target.name]: e.target.value,
    //     });
    //   }


    axios.defaults.withCredentials = true;

    function handleLoginPost(){
         axios
         .post("http://localhost:8080/auth/login", {
            email: fields.email,
            password: fields.password
        })
                .then((response =>{
                    if (response.data.success) {
                        const token = response.data.token;
                        localStorage.setItem("jsonwebtoken", token);
                        setAuthenticationHeader(token);
                        props.onAuthenticated();
                        alert(response.data.message);
                        props.history.push("/");
                    } else {
                        alert(response.data.message);
                        alert("response failed");
                        setFields({
                        ...fields,
                        password: "",
                        });
                    }
    })
 

    // function handleAdminPost() {
    //     axios
    //       .post("https://react-redux-bookstore-server.herokuapp.com/login/admin", {
    //         // .post("http://localhost:3001/login/admin", {
    //         username: adminUser.adminUsername,
    //         password: adminUser.adminPassword,
    //       })
    //       .then((response) => {
    //         if (response.data.success) {
    //           const token = response.data.token;
    //           localStorage.setItem("jsonwebtoken", token);
    //           setAuthenticationHeader(token);
    //           props.onAuthenticated();
    //           props.onAdministrator();
    //           alert(response.data.message);
    //           props.history.push("/Admin");
    //         } else {
    //           alert(response.data.message);
    //           alert("response failed");
    //           setAdminUser({
    //             ...adminUser,
    //             password: "",
    //           });
    //         }
    //       });
    //   }

    // function guestLoginPost() {
    //     fetch("https://react-redux-bookstore-server.herokuapp.com/login/guest", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(guestUser),
    //     })
    //       .then((res) => res.json())
    //       .then((response) => {
    //         if (response.success) {
    //           props.onAuthenticated();
    //           alert(response.message);
    //           props.history.push("/");
    //         } else {
    //           alert(response.message);
    //           setUser({
    //             ...user,
    //             password: "",
    //           });
    //         }
    //       });
    //   }

    // function userAuthenticated() {
    //     fetch
    //     Axios.post("http://localhost:8080/isUserAuth", {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     })
    //         console.log(response);
    // };


    )

    return (
        <div className="login-container">
            <div className="logo">Social Bubble</div>
            <form className="login-form" onSubmit={Login}>
                <div className="username-container">
                    <label>Email</label>
                    <input className="username-input"
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleLogin}>
                    </input>
                </div>
                <div className="password-container">
                    <label>Password</label>
                    <input className="password-input"
                        name="password"
                        type="password"
                        value={fields.password}
                        onChange={handleLogin}>
                    </input>
                </div>

            <Button type="submit" onClick={handleLoginPost} > 
            User Login 
            </Button>
            
            </form>
           {loginStatus} 

           {/*  && (
                <button className="signIn-button" onClick={userAuthenticated}>check if authenticated</button>
            )} */}

            <h1>{loginStatus}</h1>
            <div className="signup-link">
                <p>Not a user? <NavLink to="/register/">Register</NavLink></p>
            </div>
        </div>
  );
}}


        const mapDispatchToProps = (dispatch) => {
            return {
                onLogin: () => dispatch({ type: 'ON_LOGIN' })
            }
        };

export default connect(null, mapDispatchToProps)(Login)