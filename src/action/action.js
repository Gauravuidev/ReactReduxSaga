export const increment = (data) => {
    return {
        type: 'Increment',
        payload: data
    }
}

export const decrement = () => {
    return {
        type: 'Decrement'
    }
}

export const loggedStatus = (data) => {
    return {
        type: 'loggedStatus',
        payload: data
    }
}