import {onDeleteBubble} from '../framework/actions'

export const DeleteBubble = (dispatch) => async(
    bubbleId
) => {
    

    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/bubble/${bubbleId}/delete-bubble`,{
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        }, 
    })
    
    let bubbleResponse = await response.json()
    return dispatch(onDeleteBubble(bubbleId))

  }
export default DeleteBubble