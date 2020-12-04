import { createReducer } from "@reduxjs/toolkit"

import {
   onUpdateUserStatus,
   onCreateOrUpdateBubble,
   onGetBubbles,
   onRemoveBubble,
   onCreateOrUpdateBubbleUser,
   onleaveBubble,
} from "./actions"

export const bubble = createReducer(
   {
      bubbleList: {},
   },
   {
      [onCreateOrUpdateBubble.type]: (state, action) => {
         console.log(action.payload)
         return state
      },

      [onGetBubbles.type]: (state, {payload: bubbles}) => {
          return {...state, bubbles}
      },

      [onRemoveBubble.type]: (state, action) => {
         console.log(action.payload)
         return state
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
      [onCreateOrUpdateBubbleUser.type]: (state, action) => {
         console.log(action.payload)
         return state
      },
   }
)

export default { login, bubble, bubbleUsers }
