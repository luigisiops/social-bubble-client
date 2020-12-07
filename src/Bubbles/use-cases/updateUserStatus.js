import {onUpdateUserStatus} from '../framework/actions'

export const UpdateUserStatus = (dispatch) => async(
    user
) => {

    const userStatus = {user_status: user}

    /*const reponse = await fetch (`http://localhost:8080/`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
            user_status: user
        }
    })*/

    //let status = await response.json()

    return dispatch(onUpdateUserStatus({
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "johnsmith@email.com",
        password: "password",
        user_status: user
    }))







}