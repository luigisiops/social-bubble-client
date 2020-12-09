import {React} from 'react'
import "./landingPage.css"
import bubble from './img/bubble.png'
import friends from './img/friends.png'
import statuspic from './img/status.png'
import { NavLink } from "react-router-dom"

const LandingPage = () => {
    return (
        <div id="wrapper">
            <div class="left-container">
                <div class="hbox">
                    <div>
                        <img src={bubble} class="icon" />
                    </div>
                    <div>
                        <h1>Create A Bubble</h1>
                    </div>
                </div>
                <div class="hbox">
                    <div>
                        <img src={friends} class="icon" />
                    </div>
                    <div>
                        <h1>Add Friends And Family</h1>
                    </div>
                </div>
                <div class="hbox">
                    <div>
                        <img src={statuspic} class="icon" />
                    </div>
                    <div>
                        <h1>Update Your Status For Others To See</h1>
                    </div>
                </div>
            </div>
            <div class="right-container">
                <div class="text2">
                    <h1 class="text">
                        Connect with the world through your very own bubbles
                    </h1>
                    <h4 class="text">Get started now</h4>
                </div>
                <div>
                    <NavLink to="/login/" className="login-button"><h2>Login</h2></NavLink>
                </div>
                <div>
                    <NavLink to="/register/" className="login-button"><h2>Register</h2></NavLink>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
