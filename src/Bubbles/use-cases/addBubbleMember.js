import { onAddBubbleMember} from '../framework/actions'

export const AddBubbleMember = (dispatch) => async (
    fields, bubbleId
) => {
    
<<<<<<< HEAD
    const id = bubbleId
=======
    // const bubbleId = bubbleId
>>>>>>> 14d98cdb25f2394f395e9c0b2b8a830d447e1544
    const email = fields.email

    const response = await fetch(`http://localhost:8080/${id}/bubbleuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
            email: email
        }
    })
    let bubbleUser = await response.json()
       
    return dispatch(onAddBubbleMember(bubbleUser))

}
    

export default AddBubbleMember