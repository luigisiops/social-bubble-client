import {onGetBubblePosts} from '../framework/actions'

export const GetBubblePosts = (dispatch) => async(
    bubble
) => {
    const bubbleId = {id: bubble}
    console.log('djfhkaf')
    console.log(bubbleId)

    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/post/${bubbleId.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    let posts = await response.json()
    
    return dispatch(onGetBubblePosts(posts))
}

export default GetBubblePosts
