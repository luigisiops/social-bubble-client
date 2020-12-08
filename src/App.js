import './App.css';
import React from "react"

import {
  // Redirect,
  Route,
  Switch,
} from "react-router-dom"

import Login from './Login/ui/login'
import Register from './Login/ui/register'

import Bubbles from './Bubbles/ui/Bubbles'
import BubbleBuilder from './BubbleBuilder/ui/BubbleBuilder';
import Dashboard from './Bubbles/ui/Dashboard';
import Members from './Bubbles/ui/Members';
import LandingPage from './Login/ui/landingPage';
import AddMember from './Bubbles/ui/AddMember'

// import { configureStore } from '@reduxjs/toolkit'

function App() {
  //   const store = createStore(
    //     reducer, /* preloadedState, */
    //  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //   );
  // create a global store
  // const store = createStore(
  //   rootReducer,
  //   composeEnhancers(applyMiddleware(thunk))
  // );
  return (
    
      
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = '/bubbles/:bubbleId' component={Bubbles} />
          <Route exact path = '/bubble-builder' component={BubbleBuilder} />
          <Route exact path = '/dashboard' component = {Dashboard} />
          <Route exact path = '/members/:bubbleId' component = {Members} />
          <Route exact path = '/members/:bubbleId/add-member' component = {AddMember} />
        </Switch>
  );
}

export default App;
