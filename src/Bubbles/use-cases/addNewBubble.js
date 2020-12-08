import {onAddBubbles} from '../framework/actions'

export const AddNewBubble = (dispatch) => async(
    fields, userId
) => {
    
    const title = {title: fields.title, userId: userId }
    const test = {
      "id": 11,
      "title": "Le test Bubble",
      "bubble_status": "green",
      "updatedAt": "2020-12-06T03:06:08.714Z",
      "createdAt": "2020-12-06T03:06:08.714Z"
    }
    console.log(title)

    /*const response = await fetch('http://localhost:8080/bubble/create-bubble',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(title)
    })*/
    console.log(title)
    
    //let bubble = await response.json()
    return dispatch(onAddBubbles(test))

  }
export default AddNewBubble