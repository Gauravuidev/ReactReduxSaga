const initialState = {count : 0, data: "hardik"};

function appReducer (state=initialState, action) {
    switch(action.type) {
        case 'Increment_async': 
            return {
                count: state.count + 1,
                data: action.payload
            };
        case 'Decrement_async':
            return {count: state.count - 1, data: action.payload};
        default:
            return state
    }
}

export default appReducer;