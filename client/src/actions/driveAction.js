import axios from 'axios';
import { setAlert } from './alertAction';
import {
  DRIVE_ACCEPT_VOL,
  DRIVE_ASSIGN_VOL,
  DRIVE_DONE_VOL,
  GET_DRIVES,
  ADD_DRIVE,
  DRIVE_ERROR,
  SET_CURRENT_DRIVE,
  GET_DRIVE,
} from './types';

export const getDrives = () => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get('http://localhost:5000/api/Drive');

    // console.log(res.data);
    dispatch({
      type: GET_DRIVES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const addDrive = (body) => async (dispatch) => {
  console.log(body);
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
    dispatch(setAlert('added Successfully', 'success'));
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const setCurrentDrive = (body) => (dispatch) => {
  console.log(body);
  dispatch({
    type: SET_CURRENT_DRIVE,
    payload: body,
  });
};

export const getDrive = (id) => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get(`http://localhost:5000/api/Drive/${id}`);

    // console.log(res.data);
    dispatch({
      type: GET_DRIVE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const assignDriveVol = (id, body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Drive/assignDriveVol/${id}`,
      body,
      config
    );
    console.log(res);
    dispatch({
      type: DRIVE_ASSIGN_VOL,
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

export const acceptDriveVol = (id, body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const {acceptVolunteers} = body;
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Drive/acceptDriveVol/${id}`,
      body,
      config
    );
    console.log(res);
    dispatch({
      type: DRIVE_ACCEPT_VOL,
      payload: {id,acceptVolunteers}
    });
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const doneDriveVol = (id, body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Drive/presentDriveVol/${id}`,
      body,
      config
    );
    console.log(res);
    dispatch({
      type: DRIVE_DONE_VOL,
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
