import axios from 'axios';
import { setAlert } from './alertAction';
import { GET_COMPANYS, COMPANY_ERROR, ADD_COMPANY } from './types';

export const getCompany = () => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get('http://localhost:5000/api/company');
    dispatch({
      type: GET_COMPANYS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
    });
  }
};

export const addCompany = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      'http://localhost:5000/api/company',
      body,
      config
    );
    console.log(res);
    dispatch({
      type: ADD_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: COMPANY_ERROR,
    });
  }
};
