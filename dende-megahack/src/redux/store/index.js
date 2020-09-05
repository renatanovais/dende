import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';

const rootReducer = combineReducers({ reducer });

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
