import {onGetBubblePosts} from '../framework/actions'

const GetBubblePosts = (dispatch) => async(
    bubble
) => {
    // const bubbleId = {id: bubble.id}

    const response = await fetch(`http://localhost:8080/post/8`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    let posts = await response.json()
    return dispatch(onGetBubblePosts(posts))
}

export {GetBubblePosts}