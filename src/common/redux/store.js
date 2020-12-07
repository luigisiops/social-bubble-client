import { configureStore } from '@reduxjs/toolkit'
import {
    login,
} from '../../login/framework/reducer'

import {
    user,
    bubble,
    bubbleUsers,
    bubblePosts
} from '../../Bubbles/framework/reducer'

const reducers = {
    user,
    login,
    bubble,
    bubbleUsers,
    bubblePosts,
}

const store = configureStore({
    reducer: reducers,
})

export default store