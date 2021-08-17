const initialState = {
    loggedStatus : false, 
    loggeddata: {
        username: '', 
        password: ''
    }
};

function loggedReducer (state=initialState, action) {
    switch(action.type) {
        case 'loggedStatus_async': 
            return {
                loggedStatus: !state.loggedStatus,
                loggeddata:  action.payload
            };
        default:
            return state
    }
}

export default loggedReducer;