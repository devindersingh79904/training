import axios from 'axios';
import { setAlert } from './alertAction';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from './types';

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const loadUser = () => async (dispatch) => {};

export const registerUser = (body) => async (dispatch) => {
  const config = {
    header: {
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
