import axios from 'axios';
import { setAlert } from './alertAction';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from './types';

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
export const loadUser = () => async (dispatch) => {
  console.log('i am going to load user ');
  console.log(localStorage.token);
  if (localStorage.getItem('token')) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/adminAuth');

    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const registerUser = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // const body = JSON.stringify({ name, email, passowrd, role });

  // console.log(body);
  var res;
  try {
    // const result = await axios.post('/api/authRegister', body, config);

    res = await axios.post(
      'http://localhost:5000/api/adminRegister',
      body,
      config
    );
    console.log(res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    // console.log(err.response.data.msg);
    // console.log(res);
    // console.log(err);
    // console.log(err.message);
    var errors = err.response.data;
    // console.log(errors);
    dispatch(setAlert(errors.msg, 'danger'));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const loginUser = (body) => async (dispatch) => {
  console.log(body);
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };
  var res;
  try {
    res = await axios.post('http://localhost:5000/api/adminAuth', body, config);
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    var errors = err.response.data;
    // console.log(errors);
    dispatch(setAlert(errors.msg, 'danger'));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
