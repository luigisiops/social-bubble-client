import { createAction } from "@reduxjs/toolkit"

export const onGetBubbles = createAction("dashboard.getBubbles")

export const onGetBubblePosts = createAction("bubbles.getBubbleInfo")

export const onGetBubbleUsers = createAction("bubbles.getBubble.users")

export const onAddBubbles = createAction("bubbles.addBubble")