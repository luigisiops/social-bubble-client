import {onDeleteBubblePost} from '../framework/actions'

export const DeleteBubblePost = (dispatch) => async(
    PostId
) => {
    console.log(PostId)
    const response = await fetch(`https://gentle-tundra-53821.herokuapp.com/post/${PostId}/delete-post`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let userPost = await response.json()
    return dispatch(onDeleteBubblePost())

}

export default DeleteBubblePost