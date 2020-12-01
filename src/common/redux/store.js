import { combineReducers, createStore } from "redux"
import { configureStore } from '@reduxjs/toolkit'

const reducers = {

}

const rootReducer = combineReducers(reducers)

const store = configureStore({
    reducer: reducers,
})

export default store