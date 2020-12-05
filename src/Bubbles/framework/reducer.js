import { createReducer } from "@reduxjs/toolkit"

import {
    onGetBubblePosts
} from "./actions"

export const bubblePosts = createReducer(
    {
        posts:{},
    },
    
    {
        [onGetBubblePosts.type]: (state, {payload:posts}) => {
            return { ...state, posts}
        },       

    }
)

export default {bubblePosts}