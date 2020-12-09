import {onUpdateUserStatus} from '../framework/actions'

export const UpdateUserStatus = (dispatch) => async(
    userId, userStatus
) => {

    const status = {user_status: userStatus}

    const response = await fetch (`http://localhost:8080/user/${userId}/update-status`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)        
    })

    let statusResponse = await response.json()

    return dispatch(onUpdateUserStatus(statusResponse.user.user_status))

}

export default UpdateUserStatus