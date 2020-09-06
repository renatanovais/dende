import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import orderReducer from './orderReducer'; 
import { clientsReducer } from './clientsReducer';

const rootReducer = combineReducers({ loginReducer, orderReducer, clientsReducer });

export default rootReducer;
