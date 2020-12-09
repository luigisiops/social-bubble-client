import { onGetBubbleUsers } from '../framework/actions'

export const GetBubbleUsers = (dispatch) => async (
    bubble
) => {

    //const bubbleId = bubble.id
    const bubbleId = { id: bubble }


    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/bubble/${bubble}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let bubbleUsers = await response.json()

    return dispatch(onGetBubbleUsers(bubbleUsers))
}

export default GetBubbleUsers
