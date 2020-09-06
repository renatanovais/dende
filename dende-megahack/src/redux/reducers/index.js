import { combineReducers } from 'redux';
<<<<<<< HEAD
import loginReducer from './loginReducer';
import orderReducer from './orderReducer'; 

const rootReducer = combineReducers({ loginReducer, orderReducer });
=======
import { loginReducer } from './loginReducer';
import { clientsReducer } from './clientsReducer';

const rootReducer = combineReducers({ loginReducer, clientsReducer });
>>>>>>> bc4267cc88a5fed1b56ff02fb2469c6b8a147553

export default rootReducer;
