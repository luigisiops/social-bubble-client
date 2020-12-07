import './App.css';

import React from "react"
import { Provider } from "react-redux"
import store from "./common/redux/store"
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
} from "react-router-dom"
src/login/ui/login.jsx
import  { Login }  from './login/ui/login.jsx'
import { Register } from './login/ui/register'

import Bubbles from './login/ui/components/Bubbles/Bubbles'
import BubbleBuilder from './login/ui/components/BubbleBuilder/BubbleBuilder';

const token = localStorage.getItem("jsonwebtoken");
setAuthenticationHeader(token);

const App = () => {
  return (
    <BrowserRouter>
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path = "/login" exact component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = '/bubbles' component={Bubbles} />
          <Route exact path = '/bubble-builder' component={BubbleBuilder} />
        </Switch>
      </Router>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
