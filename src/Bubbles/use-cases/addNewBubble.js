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
    
<<<<<<< HEAD
    let bubble = await response.json()
    return dispatch(onAddBubbles(bubble))
=======
    let test = await response.json()
    
return dispatch(onAddBubbles(test))
>>>>>>> acd3757dcacab75300ed1fb7a77abf75066faa40

  }
export default AddNewBubble