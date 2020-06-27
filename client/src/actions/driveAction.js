import axios from 'axios';
import { setAlert } from './alertAction';
import { GET_DRIVES, ADD_DRIVE, DRIVE_ERROR } from './types';

export const getDrives = () => (dispatch) => {};

export const addDrive = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      'http://localhost:5000/api/Drive',
      body,
      config
    );
    console.log(res);
    dispatch({
      type: ADD_DRIVE,
      payload: res.data,
    });
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};
