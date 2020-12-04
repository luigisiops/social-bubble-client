import './App.css';

import React from "react"
import { Provider } from "react-redux"
import store from "./common/redux/store"
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"

import Login from './login/ui/login'
import Register from './login/ui/register'

import Bubbles from './Bubbles/ui/Bubbles'
import BubbleBuilder from './BubbleBuilder/ui/BubbleBuilder';
import  Dashboard from './dashboard/ui/Dashboard';


const App = () => {
  return (
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = '/bubbles' component={Bubbles} />
          <Route exact path = '/bubble-builder' component={BubbleBuilder} />
          <Route exact path = '/dashboard' component = {Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
