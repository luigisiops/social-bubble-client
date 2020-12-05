import { createReducer } from "@reduxjs/toolkit"
import {
   onUserLogin,
   onUserLogout,
   onUpdateUserStatus,
   onCreateOrUpdateBubble,
   onRemoveBubble,
   onCreateOrUpdateBubbleUser,
   onleaveBubble,
} from "./actions"

const initialState = {
   isAuthenticated: false,
   user: {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "johnsmith@email.com",
      password: "password",
   },
}

export const login = createReducer(
   {},
   {
      [onUserLogin.type]: (state, { payload: user }) => {
         return { ...state, user }
      },
   }
)

/*
export const authReducer =  createReducer(state = initialState, {

    if(action.type === 'ON_LOGIN') {
        return {
            ...state,
            isAuthenticted: true
        }
    }
    return state
}
*/
export default { login }
