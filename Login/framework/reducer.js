// import { bindActionCreators } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import {
   onUserLogin
   // onUserLogout,
   // onUpdateUserStatus,
   // onCreateOrUpdateBubble,
   // onRemoveBubble,
   // onCreateOrUpdateBubbleUser,
   // onleaveBubble,
} from "./actions"

// const initialState = {
//    isAuthenticated: false
   // user: {
   //    id: 1,
   //    firstName: "John",
   //    lastName: "Smith",
   //    email: "johnsmith@email.com",
   //    password: "password",
   // },
// }

export const loginReducer = createReducer(
   { isAuthenticated: false
      // user: {
      //    id: 1,
      //    firstName: "John",
      //    lastName: "Smith",
      //    email: "johnsmith@email.com",
      //    password: "password",
      // },, {isAuthenticated: false}
   },
   {
      [onUserLogin.type]: (state) => {
         return { ...state, isAuthenticated: true}
      },
   }
)
// const loginReducer = (state = initialState => {
   
//    if(bindActionCreators.type == 'ON_LOGINReducer') {
//       return {
//          ...state,
//          isAuthenticated: true
//       }
//    }
//    return state
// })

// export { loginReducer }
// import { createReducer } from "@reduxjs/toolkit"
// import {
//    onUserLogin,
//    // onUserLogout,
//    // onUpdateUserStatus,
//    // onCreateOrUpdateBubble,
//    // onRemoveBubble,
//    // onCreateOrUpdateBubbleUser,
//    // onleaveBubble,
// } from "./actions"

// // const initialState = {
// //    isAuthenticated: false,
// //    user: {
// //       id: 1,
// //       firstName: "John",
// //       lastName: "Smith",
// //       email: "johnsmith@email.com",
// //       password: "password",
// //    },
// // }

// const loginReducer = createReducer(
//    {isAuthenticated: false},
//    {
//       [onUserLogin.type]: (state) => {
//          return { ...state, isAuthenticted: true }
//       },
//    }
// )

// export { loginReducer }

// export const authReducer =  createReducer(state = initialState, {
//    if(action.type === 'ON_LOGIN') {
//        return {
//            ...state,
//            isAuthenticted: true
//        }
//    }
//    return state
// }
