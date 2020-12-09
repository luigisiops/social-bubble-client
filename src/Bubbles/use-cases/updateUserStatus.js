import {onUpdateUserStatus} from '../framework/actions'

export const UpdateUserStatus = (dispatch) => async(
    userId, userStatus
) => {

    const status = {user_status: userStatus}

    const response = await fetch (`https://gentle-tundra-53821.herokuapp.com/user/${userId}/status`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)        
    })

    let statusResponse = await response.json()

    return dispatch(onUpdateUserStatus(statusResponse.user_status))

}

export default UpdateUserStatus