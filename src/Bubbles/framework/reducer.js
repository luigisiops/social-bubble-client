import { createReducer } from "@reduxjs/toolkit"

import {
    onGetBubblePosts,
    onAddBubblePost,
    onDeleteBubblePost,
    onGetBubbles,
    onGetBubbleUsers,
    onAddBubbles,
    onDeleteBubble,
} from "./actions"

import {
    onUpdateUserStatus,
} from "../../Login/framework/actions"

export const bubble = createReducer(
    {
        bubbleList: [],
        byId: {},
    },

    {
        [onAddBubbles.type]: (state, { payload: bubbleList }) => {

            if (bubbleList == null || bubbleList.length === 0) {
                return state
            }
                state.byId[bubbleList.id] = bubbleList
                state.bubbleList = [...state.bubbleList, bubbleList]
        },
        [onUpdateUserStatus.type]: (state, { payload: status}) => {
            for (const item in state.byId) {
                state.byId[item].bubble_status = status
            }
            state.bubbleList.forEach((item) => {
                item.bubble_status = status
            })
        },

        [onGetBubbles.type]: (state, { payload: bubbleList }) => {
            bubbleList.forEach((item) => {
                state.byId[item.id] = item
              })
              state.bubbleList = bubbleList
            },

        [onDeleteBubble.type]: (state, { payload: bubbleId }) => {
            let arr = state.bubbleList
            let bubbleList = []
            arr.forEach((element) => {
                if (element.id !== bubbleId) {
                    bubbleList.push(element)
                }
            })
            return { ...state, bubbleList }
        }

    }
)

export const bubbleUsers = createReducer(
    {
        byId: [],
    },
    {
        [onGetBubbleUsers.type]: (state, { payload: byId }) => {
            return { ...state, byId }
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
        [onAddBubblePost.type]: (state, { payload: post }) => {
            state.posts = [...state.posts, post]
        },

        [onDeleteBubblePost.type]: (state, { payload: postId }) => {
            let arr = state.posts
            let postList = []
            arr.forEach((element) => {
                if (element.id !== postId) {
                    postList.push(element)
                }
            })
            return { ...state, postList }
        },

    }
)

export default { bubblePosts, bubble, bubbleUsers }
