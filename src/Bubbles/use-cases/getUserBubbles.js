import {onGetBubbles} from '../framework/actions'

export const GetUserBubbles = (dispatch) => async(
    user
) => {
    
    const userId = {id: user}

    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/user/40/bubbles`,{
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
