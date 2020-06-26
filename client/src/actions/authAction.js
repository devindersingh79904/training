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

export const register = ({ name, email, passowrd, role }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, passowrd, role });

  try {
  } catch (err) {}
};
