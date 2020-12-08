import {onGetBubbles} from '../framework/actions'

export const GetUserBubbles = (dispatch) => async(
    user
) => {
    
    const userId = {id: user.id}

    const response = await fetch(`http://localhost:8080/user/10/bubbles`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }, 
      })
    console.log('testing bubbles work?')
    let bubble = await response.json()
    return dispatch(onGetBubbles(bubble))
    }

export default GetUserBubbles
