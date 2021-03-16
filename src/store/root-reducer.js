import { combineReducers } from 'redux';
import counterReducer from './reducer/counter';

const rootReducer = combineReducers({
    count : counterReducer
})

export default rootReducer;