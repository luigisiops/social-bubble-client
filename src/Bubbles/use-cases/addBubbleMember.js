import { onAddBubbleMember} from '../framework/actions'

export const AddBubbleMember = (dispatch) => async (
    fields, bubbleId
) => {
    
    const id = bubbleId
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