import {onUserLogin} from '../framework/actions'

export const SendLogin = (dispatch) => async({
    fields
}) => {
    console.log(fields)
    
    const user = {email: fields.email, password: fields.password}

    /*const response = await fetch('http://localhost:8080/login',{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(fields)
      })
      console.log(response)*/

    //return dispatch(onUserLogin(response.toJSON()))

    return dispatch(onUserLogin(user))
}

export default SendLogin