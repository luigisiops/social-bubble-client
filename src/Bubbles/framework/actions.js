import { createAction } from "@reduxjs/toolkit"

export const onGetBubbles = createAction("dashboard.getBubbles")
export const onUpdateUserStatus = createAction("user.updateStatus")

export const onGetBubblePosts = createAction("bubbles.getBubbleInfo")

export const onGetBubbleUsers = createAction("bubbles.getBubble.users")
export const onAddBubbleUsers = createAction("bubbles.addBubbleUser")

export const onAddBubbles = createAction("bubbles.addBubble")
export const onDeleteBubble = createAction('bubbles.deleteBubble')
