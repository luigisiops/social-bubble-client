import {onGetBubbles} from '../framework/actions'

export const GetUserBubbles = (dispatch) => async(
    user
) => {
    
    const userId = {id: user.id}

    const response = await fetch(`http://localhost:8080/bubble/10`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }, 
      })
    
    let bubble = await response.json()
    return dispatch(onGetBubbles(bubble))
    // const bubble = {title: bubble.title}
    /*
    const response = await fetch('http://localhost:8080/create-bubble)
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(bubble)

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

export default GetUserBubbles