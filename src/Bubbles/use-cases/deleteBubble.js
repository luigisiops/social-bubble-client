import {onDeleteBubble} from '../framework/actions'

export const DeleteBubble = (dispatch) => async(
    bubbleId
) => {
    
    const bubble = {id: bubbleId}

    const response = await fetch(`http://localhost:8080/bubble/${bubbleId}/delete-bubble`,{
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(bubble)
    })
    
    let bubbleResponse = await response.json()
    return dispatch(onDeleteBubble(bubbleId))

  }
export default DeleteBubble