import { createReducer } from "@reduxjs/toolkit"

import {
    onGetBubblePosts,
    onGetBubbles,
    onGetBubbleUsers,
    onAddBubbles,
    onDeleteBubble,
    onUpdateUserStatus,
} from "./actions"

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

        [onDeleteBubble.type] : (state, {payload: bubbleId}) => {
            let arr = state.bubbleList
            let bubbleList = []
            arr.forEach((element) => {
                if (element.id !== bubbleId){
                    bubbleList.push(element)
                }
            })
            return { ...state, bubbleList}
        }

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

export default { bubblePosts, bubble, bubbleUsers }
