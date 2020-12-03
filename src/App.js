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

// import { Login } from './login/ui/login'
// import { Register } from './login/ui/register'
// import BubbleBuilder from './login/ui/bubble-builder/BubbleBuilder';zz
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <Provider store = {store}>
      <Router>
      <NavigationBar />
        <Sidebar />
        <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
          {/* <Route exact path = "/login" component={Login} /> */}
          {/* <Route exact path = "/register" component={Register} /> */}
          {/* <Route exact path = '/bubble-builder' component={BubbleBuilder} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
