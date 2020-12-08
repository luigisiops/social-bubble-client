import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../../Login/framework/reducer'

import {
    bubble,
    bubbleUsers,
    bubblePosts
} from '../../Bubbles/framework/reducer'

const combineReducers = {
    loginReducer,
    bubble,
    bubbleUsers,
    bubblePosts,
}

const store = configureStore({
    reducer: combineReducers
})

export default store