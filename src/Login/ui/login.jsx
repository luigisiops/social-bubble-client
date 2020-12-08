import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./login.css"
import { setAuthenticationHeader } from "../../utils/Auth";
import axios from "axios";
import { useHistory } from "react-router-dom"
import GetUserBubbles from "../../Bubbles/use-cases/getUserBubbles";
import GetLoggedInUser from "../use-cases/getLoggedInUser";
// import {SendLogin} from '../use-cases/user-login'

function Login(props, getUser) {
    const [fields, setFields] = useState({})
    const history = useHistory();

    // const [loginStatus, setloginStatus] = useState({})

    function setField(evt) {
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    }

    function performLoginRequest() {
        axios
            .post("http://localhost:8080/auth/login", {
            email: fields.email,
            password: fields.password
        })
        .then((response) =>{
            if (response.data.success) {
                const token = response.data.token;
                localStorage.setItem("jsonwebtoken", token);
                setAuthenticationHeader(token);
                props.onAuthenticated();
                props.getUser(fields);
                alert(response.data.message);
                history.push("/");
            } else {
                alert(response.data.message);
                alert("response failed");
                setFields({
                ...fields,
                password: "",
                });
            }
        })
    }

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
        //   }
    // console.log(fields)


    return (
        <div className="login-container">
            <div className="logo">Social Bubble
            </div>
            <div className="login-form">
                {/* <form className="login-form"> */}
                    <div className="username-container">
                        <label>Username</label>
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
                    <button
                    onClick={performLoginRequest}
                    // type="submit"
                    // className="login-btn"
                    >
                    Login
                    </button>
                {/* </form> */}
            </div>
            <div>
                <NavLink to ="/dashboard">Dashboard</NavLink>
            </div>
            <div className="signup-link">
                <p>Not a user? <NavLink to="/register">Register</NavLink></p>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        // onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
        // onAuthenticated: () => dispatch(true)  isAuthenticated: true  
        getUser: GetLoggedInUser(dispatch),
        onAuthenticated: () => dispatch({type: 'user.login'})  
    }
//         onUserLogin: SendLogin(dispatch)
}

export default connect(null, mapDispatchToProps)(Login)

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onUserLogin: () => dispatch({ type: 'ON_LOGIN' })
//     }
// };

// export default connect(null, mapDispatchToProps)(Login)

// import React, { useState } from "react"
// import { NavLink } from "react-router-dom"
// import { connect } from "react-redux"
// import "./login.css"
// import { setAuthenticationHeader } from "../../utils/Auth";

// import { UserLogin } from '../use-cases/user-login'
// import axios from "axios";
  
// function Login(props) {
    
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
//   const [fields, setFields] = useState({})
//       function handleLogin(e) {
      
//         setFields({
//           ...fields,
//           [e.target.name]: e.target.value,
//         });
//       }
    
    //   function handleAdminLogin(e) {
    //     setAdminUser({
    //       ...adminUser,
    //       [e.target.name]: e.target.value,
    //     });
    //   }


    // axios.defaults.withCredentials = true;

//     function handleLoginPost(){
//          axios
//          .post("http://localhost:8080/auth/login", {
//             email: fields.email,
//             password: fields.password
//         })
//                 .then((response) =>{
//                     if (response.data.success) {
//                         const token = response.data.token;
//                         localStorage.setItem("jsonwebtoken", token);
//                         setAuthenticationHeader(token);
//                         props.onLogin();
//                         alert(response.data.message);
//                         props.history.push("/");
//                     } else {
//                         alert(response.data.message);
//                         alert("response failed");
//                         setFields({
//                         ...fields,
//                         password: "",
//                         });
//                     }
//     })
// }
 

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


    

//     return (
//         <>

//         <div className="login-container">
//             <div className="logo">Social Bubble</div>
//             <form className="login-form" onSubmit={Login}>
//                 <div className="username-container">
//                     <label>Email</label>
//                     <input className="username-input"
//                         name="email"
//                         type="email"
//                         value={fields.email}
//                         onChange={handleLogin}>
//                     </input>
//                 </div>
//                 <div className="password-container">
//                     <label>Password</label>
//                     <input className="password-input"
//                         name="password"
//                         type="password"
//                         value={fields.password}
//                         onChange={handleLogin}>
//                     </input>
//                 </div>
//                 <button
//           onClick={handleLoginPost}
//           type="button"
//           className="login-btn"
//         >
//           Login
//         </button>
//             <button type="submit" onClick={handleLoginPost} > 
//             User Login 
//             </button>
            
//             </form>





//             <div className="signup-link">
//                 <p>Not a user? <NavLink to="/register/">Register</NavLink></p>
//             </div>
//         </div>

//     </>
//   );
// }



// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogin: () => dispatch({ type: 'ON_LOGIN' })
//     }
// };

// export default connect(null, mapDispatchToProps)(Login)