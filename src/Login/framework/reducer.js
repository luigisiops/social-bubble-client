import { bindActionCreators } from "redux"

const initialState = {
    isAuthenticated: false
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