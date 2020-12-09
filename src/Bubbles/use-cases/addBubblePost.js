import {onAddBubblePost} from '../framework/actions'

export const AddBubblePost = (dispatch) => async(
    userId, fields, bubbleId
) => {

    const post = {user_id: userId, body: fields.body }

    const response = await fetch(`http://localhost:8080/post/create-post/${bubbleId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(post)
    })

    let userPost = await response.json()

    return dispatch(onAddBubblePost(userPost))

}

export default AddBubblePost