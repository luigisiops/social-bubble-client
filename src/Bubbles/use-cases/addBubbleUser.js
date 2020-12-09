import { onAddBubbleUsers } from '../framework/actions'

export const AddBubbleUsers = (dispatch) => async (
    bubble
) => {

    //const bubbleId = bubble.id
    const bubbleId = { id: bubble }


    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/bubble/${bubble}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:{
            
        }
    })

    let bubbleUsers = await response.json()

    return dispatch(onAddBubbleUsers(bubbleUsers))
}

export default AddBubbleUsers