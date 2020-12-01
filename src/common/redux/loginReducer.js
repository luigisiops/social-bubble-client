const initialState = {
    users: {
        testUser: {
            username: 'TEST-NAME',
            password: '12345',
            email: 'test@email.com',
            phone: '123-123-1234'
        }
    }
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        
        default:
            return state
    }
}


export default loginReducer