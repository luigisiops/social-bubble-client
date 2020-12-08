import { createReducer } from "@reduxjs/toolkit"

import {
    onGetBubblePosts,
    onGetBubbles,
    onGetBubbleUsers,
    onAddBubbles
} from "./actions"

export const bubble = createReducer(
    {
        bubbleList: [],
    },

    {
        [onAddBubbles.type]: (state, { payload: bubbleList }) => {
            return { ...state, bubbleList }
        },

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
    {
        [onGetBubbleUsers.type]: (state, { payload: bubbleUsers }) => {
            bubbleUsers.forEach((item) => {
                state.byId[item.id] = item
            })
        }
    }

)

export const bubblePosts = createReducer(
    {
        posts: {},
    },

    {
        [onGetBubblePosts.type]: (state, { payload: posts }) => {
            return { ...state, posts }
        },

    }
)

// export { bubblePosts, bubble, bubbleUsers }