import { createAction } from "@reduxjs/toolkit"

export const onGetBubbles = createAction("dashboard.getBubbles")
export const onUpdateUserStatus = createAction("user.updateStatus")
export const onUpdateBubbleStatus = createAction("bubble.updateStatus")

export const onGetBubblePosts = createAction("bubbles.getBubblePost")
export const onAddBubblePost = createAction ("bubbles.addBubblePost")

export const onGetBubbleUsers = createAction("bubbles.getBubble.users")
export const onAddBubbleUsers = createAction("bubbles.addBubbleUser")

export const onAddBubbles = createAction("bubbles.addBubble")
export const onDeleteBubble = createAction('bubbles.deleteBubble')

export const onAddBubbleMember = createAction("members.addBubbleMember")
