import { onGetBubbleUsers } from '../framework/actions'

export const GetBubbleUsers = (dispatch) => async (
    bubble
) => {

    //const bubbleId = bubble.id
    const bubbleId = { id: bubble }


    const response = await fetch(`http://localhost:8080/bubble/10/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let bubbleUsers = await response.json()

    return dispatch(onGetBubbleUsers(bubbleUsers))
}

export default GetBubbleUsers
