import {onGetBubbles} from '../framework/actions'

export const GetUserBubbles = (dispatch) => async(
    user
) => {
    
    if (user === null){
      return dispatch(onGetBubbles(bubble))
    }

    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/user/${user}/bubbles`,{
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
