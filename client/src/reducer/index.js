import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import driveReducer from './driveReducer';
import volunteerReducer from './volunteerReducer';
export default combineReducers({
  authReducer,
  alertReducer,
  driveReducer,
  volunteerReducer,
});
