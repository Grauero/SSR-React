import { combineReducers } from 'redux';

import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  auth: authReducer,
  admins: adminsReducer,
  users: usersReducer
});
