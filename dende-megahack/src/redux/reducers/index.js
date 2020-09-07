import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import orderReducer from './orderReducer'; 
import { clientsReducer } from './clientsReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({ loginReducer, orderReducer, clientsReducer, registerReducer });

export default rootReducer;
