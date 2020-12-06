import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, Provider } from 'react-redux';
import { verifyToken } from './actions/userActions.js'

import './App.css';

// import store from "./common/redux/store"
// import {
//   Redirect,
//   Route,
//   BrowserRouter as Router,
//   Switch,
// } from "react-router-dom"

/* COMPONENTS  */
import {PrivateRoute} from './components/ProtectedRoute.js';
import Home from './components/Home.js';
import Entry from './components/Entry.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import SignIn from './components/forms/SignIn.js';
import SignUp from './components/forms/SignUp.js';
import NewEntry from './components/forms/NewEntry.js';
import Login from './login/ui/login'
import Register from './login/ui/register'
import Bubbles from './Bubbles/ui/Bubbles'
import BubbleBuilder from './BubbleBuilder/ui/BubbleBuilder';
import Dashboard from './Bubbles/ui/Dashboard';
import Members from './Bubbles/ui/Members'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch])
  
  return (
    <div>
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/entry/:id" component={Entry} />
          <Route exact path="/page/:page" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = '/bubbles' component={Bubbles} />
          <Route exact path = '/bubble-builder' component={BubbleBuilder} />
          <Route exact path = '/dashboard' component = {Dashboard} />
          <Route exact path = '/members' component = {Members} />
          <PrivateRoute exact path="/new" component={NewEntry} />
        </Switch>
      </Router>
    </Provider>
    </div>
  );
}