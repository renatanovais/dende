import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import orderReducer from './orderReducer'; 

const rootReducer = combineReducers({ loginReducer, orderReducer });

export default rootReducer;
