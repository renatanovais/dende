import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { clientsReducer } from './clientsReducer';

const rootReducer = combineReducers({ loginReducer, clientsReducer });

export default rootReducer;
