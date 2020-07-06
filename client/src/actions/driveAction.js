import axios from 'axios';
import { setAlert } from './alertAction';
import setAuthToken from '../utils/setAuthToken';
import {
  GET_DRIVES,
  ADD_DRIVE,
  DRIVE_ERROR,
  SET_CURRENT_DRIVE,
  GET_DRIVE,
  SET_LOADING,
  DRIVE_ACCEPT_VOL,
  DRIVE_ASSIGN_VOL,
  DRIVE_DONE_VOL,
  DRIVE_ATTENDED_STD,
  DRIVE_SHORTLISTED_STD,
} from './types';

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const getDrives = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/Drive');
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

export const addDrive = (body,history) => async (dispatch) => {
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
    dispatch({
      type: ADD_DRIVE,
      payload: res.data,
    });
    dispatch(setAlert('added Successfully', 'success'));
    history.push('/add-drive');
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const setCurrentDrive = (body) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_DRIVE,
    payload: body,
  });
};

export const getDrive = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/Drive/${id}`);
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

export const assignDriveVol = (id, body,history) => async (dispatch) => {
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
    dispatch({
      type: DRIVE_ASSIGN_VOL,
      payload: res.data,
    });
    history.push('/assign-drive-vol');
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const acceptDriveVol = (id, body,history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { acceptVolunteers } = body;
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Drive/acceptDriveVol/${id}`,
      body,
      config
    );
    dispatch({
      type: DRIVE_ACCEPT_VOL,
      payload: { id, acceptVolunteers },
    });
    history.push('/mark-accepted');
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const doneDriveVol = (id, body,history) => async (dispatch) => {
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
    dispatch({
      type: DRIVE_DONE_VOL,
      payload: res.data,
    });
    history.push('/mark-present')
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const attendedDriveStd = (id, body,history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Drive/attendDriveStd/${id}`,
      body,
      config
    );
    dispatch({
      type: DRIVE_ATTENDED_STD,
      payload: res.data,
    });
    history.push('/attend-drive-students')
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};

export const shortlistedDriveStd = (id, body,history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Drive/selectDriveStd/${id}`,
      body,
      config
    );
    dispatch({
      type: DRIVE_SHORTLISTED_STD,
      payload: res.data,
    });
    history.push('/shorlisted-drive-students')
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: DRIVE_ERROR,
    });
  }
};
