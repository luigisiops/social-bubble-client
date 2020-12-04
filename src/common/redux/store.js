import { configureStore } from '@reduxjs/toolkit'
import {
    login,
    bubble,
    bubbleUsers
} from '../../login/framework/reducer'

const reducers = {
    login,
    bubble,
    bubbleUsers
}

const store = configureStore({
    reducer: reducers,
})

export default store