import { createAction } from "@reduxjs/toolkit"

export const onUserLogin = createAction("user.login")
export const onUserLogout = createAction("user.logout")
export const onUpdateUserStatus = createAction("user.update.status")

export const onCreateOrUpdateBubble = createAction("bubble.create")
export const onRemoveBubble = createAction("bubble.remove")

export const onCreateOrUpdateBubbleUser = createAction("bubble.bubbleUser.add")
export const onRemoveBubbleUser = createAction("bubble.bubbleUser.remove")

// import { createAction } from "@reduxjs/toolkit"

// export const onUserLogin = createAction("user.login")
