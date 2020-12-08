import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loginReducer } from './Login/framework/reducer'
import {
    bubble,
    bubbleUsers,
    bubblePosts
} from './Bubbles/framework/reducer'
import { Provider } from "react-redux"
// import store from "./common/redux/store"
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from "react-router-dom"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    loginReducer: loginReducer,
    bubbleReducer: bubble,
    bubbleUsersReducer: bubbleUsers,
    bubblePostsReducer: bubblePosts,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
