import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
//import visibilityFilter from './visibilityFilter';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
export default store
