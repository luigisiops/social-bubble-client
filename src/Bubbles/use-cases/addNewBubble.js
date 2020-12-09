import {onAddBubbles} from '../framework/actions'

export const AddNewBubble = (dispatch) => async(
    fields, userId
) => {
    
    const title = {title: fields.title, userId: userId }

    console.log(title)

    const response = await fetch('http://localhost:8080/bubble/create-bubble',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(title)
    })
    console.log(title)
    
    let bubble = await response.json()
    return dispatch(onAddBubbles(bubble))

  }
export default AddNewBubble