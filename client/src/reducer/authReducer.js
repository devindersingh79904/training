// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   USER_LOADED,
//   AUTH_ERROR,
// } from '../actions/types';

const initialstate = {
  current: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};
export default (state = initialstate, action) => {
  switch (action) {
    default:
      return state;
  }
};
