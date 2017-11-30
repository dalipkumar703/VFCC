import { combineReducers } from 'redux';
import login from './login';
import vote from './vote';
import pincode from './pincode';
export default combineReducers({
 login,
 vote,
 pincode
});
