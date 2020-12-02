import { createReducer } from "@reduxjs/toolkit"
import {
    onUserLogin,
} from "./actions"

export const login = createReducer(
    {
        byId: {}
    },
    {
        [createOrUpdatePlans.type]: (state, { payload: user }) => {
            console.log(user)
            const users = user
            return {...state, users}
        }
    })