import {combineReducers} from 'redux';
import appReducer from './reducer';
import loggedReducer from './logged';

const rootReducer = combineReducers({
    counterState:appReducer,
    loggedState:loggedReducer
});

export default rootReducer;