import { combineReducers, createStore } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginReducer'

const reducers = {
    loginReducer: loginReducer
}

const rootReducer = combineReducers(reducers)

const store = configureStore({
    reducer: reducers,
})

export default store