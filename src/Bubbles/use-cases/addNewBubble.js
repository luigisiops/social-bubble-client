import {onAddBubbles} from '../framework/actions'

export const AddNewBubble = (dispatch) => async(
    fields
) => {
    
    const title = {title: fields.title}
    console.log(title)

    const response = await fetch('http://localhost:8080/bubble/create-bubble',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(title)
    })
    
    let bubble = await response.json()
    return dispatch(onAddBubbles('bubble'))
    // const bubble = {title: bubble.title}
    /*


    */
    /*const response = await fetch('http://localhost:8080/login',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(fields)
      })
      console.log(response)*/

    //return dispatch(onUserLogin(response.toJSON()))

    //return dispatch(onUserLogin(user))
//}
    }

export default AddNewBubble