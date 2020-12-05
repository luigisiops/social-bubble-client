import { createAction } from "@reduxjs/toolkit"

export const onGetBubbles = createAction("dashboard.getBubbles")

export const onGetBubblePosts = createAction("bubbles.getBubbleInfo")

export const onGetBubbleMembers = createAction("bubbles.getBubble.members")