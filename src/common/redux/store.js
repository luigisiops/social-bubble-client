import { configureStore } from '@reduxjs/toolkit'
import {
    login,
} from '../../login/framework/reducer'
import {
    bubble,
    bubbleUsers,
} from '../../dashboard/framework/reducer'

const reducers = {
    login,
    bubble,
    bubbleUsers
}

const store = configureStore({
    reducer: reducers,
})

export default store