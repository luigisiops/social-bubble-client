import { createReducer } from "@reduxjs/toolkit"

import {
    onGetBubblePosts,
    onGetBubbles,
} from "./actions"

export const bubble = createReducer(
    {
       bubbleList: [],
    },
    {
       [onGetBubbles.type]: (state, { payload: bubbleList }) => {
          return { ...state, bubbleList }
       },
    }
 )
 
 export const bubbleUsers = createReducer(
    {
       byId: {},
       byUserId: {},
       byBubbleId: {},
    },
 {}
 
 )

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

export default {bubblePosts, bubble, bubbleUsers}