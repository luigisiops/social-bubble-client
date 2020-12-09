import {onAddBubblePost} from '../framework/actions'

export const AddBubblePost = (dispatch) => async(
    userId, post
) => {

    const postReq = {user_id: userId, body: post }

    const response = await fetch(`http://localhost:8080/post/${postReq.user_id}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(postReq.body)
    })

    let userPost = await response.json()

    return dispatch(onAddBubblePost(userPost))

}

export default AddBubblePost