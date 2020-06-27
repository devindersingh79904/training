import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from './types';

export const registerUser = ({ name, email, password, role }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password, role });

  console.log(body);
  try {
    const res = await axios.post(
      'http://localhost:5000/api/adminRegister',
      body,
      config
    );
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};
