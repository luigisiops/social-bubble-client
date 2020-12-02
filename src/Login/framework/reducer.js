import { bindActionCreators } from "redux"

const initialState = {
    isAuthenticated: false,
    user: {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "johnsmith@email.com",
        password: "password",
    }
}

const reducer = (state = initialState =>{

    if(bindActionCreators.type == 'ON_LOGIN') {
        return {
            ...state,
            isAuthenticted: true
        }
    }
    return state
})

export default reducer