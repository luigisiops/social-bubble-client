import { onAddBubbleUsers } from '../framework/actions'

export const AddBubbleUsers = (dispatch) => async (
    bubble
) => {

    //const bubbleId = bubble.id
    const bubbleId = { id: bubble }


    const response = await fetch(`http://localhost:8080/bubble/10/users`, {
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