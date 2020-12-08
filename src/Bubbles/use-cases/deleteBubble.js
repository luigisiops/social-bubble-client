import {onAddBubbles} from '../framework/actions'

export const DeleteBubble = (dispatch) => async(
    bubbleId
) => {
    
    const bubble = {id: bubbleId}

    const response = await fetch('http://localhost:8080/bubble/delete-bubble',{
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(bubble)
    })
    
    //let bubble = await response.json()
    return dispatch(onAddBubbles(test))

  }
export default DeleteBubble