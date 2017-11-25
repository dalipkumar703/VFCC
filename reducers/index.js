import { combineReducers } from 'redux';
import login from './login';
import vote from './vote';

export default combineReducers({
 login,
 vote
});
