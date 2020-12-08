import { createReducer } from "@reduxjs/toolkit"

import {
    onGetBubblePosts,
    onGetBubbles,
    onGetBubbleUsers,
    onAddBubbles,
    onDeleteBubble,
    onUpdateUserStatus,
} from "./actions"

export const user = createReducer(
    {
        user: {
            id: 1,
            firstName: "John",
            lastName: "Smith",
            email: "johnsmith@email.com",
            password: "password",
            user_status:"green"
         }
    },

    {
        [onUpdateUserStatus.type] : (state, {payload: user}) => {
            return {...state, user}
        }
    },
)

export const bubble = createReducer(
    {
        bubbleList: [],
    },

    {
        [onAddBubbles.type]: (state, { payload: bubbleList }) => {
            return { ...state, bubbleList: [
                ...state.bubbleList,
                bubbleList
            ] }
        },

        [onGetBubbles.type]: (state, { payload: bubbleList }) => {
            return { ...state, bubbleList }
        },

    }
)

export const bubbleUsers = createReducer(
    {
        byId: [],
    },
    {
        [onGetBubbleUsers.type]: (state, { payload: byId }) => {
            return {...state, byId}
        }
    }

)

export const bubblePosts = createReducer(
    {
        posts: [],
    },

    {
        [onGetBubblePosts.type]: (state, { payload: posts }) => {
            return { ...state, posts }
        },

    }
)

export default { bubblePosts, bubble, bubbleUsers, user }
