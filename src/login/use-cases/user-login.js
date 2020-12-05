import {onUserLogin} from "../framework/actions"

export const UserLogin = (apiUserLogin, dispatch) => async({
    user
}) => {
    const {username, password} = user


const userInfo = {username: user.firstName, lastName: user.lastName}

const response = await apiUserLogin(userInfo)
console.log(response)

if(response.error){
    return null
}

return dispatch(onUserLogin(response.toJSON()))

}

export default UserLogin