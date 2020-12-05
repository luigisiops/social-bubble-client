import { createReducer } from "@reduxjs/toolkit"

import {
   onUpdateUserStatus,
   onGetBubbles,
   onleaveBubble,
} from "./actions"

export const bubble = createReducer(
   {
      bubbleList: {},
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

export default { bubble, bubbleUsers }
