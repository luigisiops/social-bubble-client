import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from '../../Login/framework/reducer'

import {
    user,
    bubble,
    bubbleUsers,
    bubblePosts
} from '../../Bubbles/framework/reducer'

const combineReducers = {
    user,
    loginReducer,
    bubble,
    bubbleUsers,
    bubblePosts,
}

const store = configureStore({
    reducer: combineReducers
})

export default store