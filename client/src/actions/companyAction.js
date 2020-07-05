import axios from 'axios';
import { setAlert } from './alertAction';
import { GET_COMPANYS, COMPANY_ERROR, ADD_COMPANY } from './types';

export const getCompany = () => async (dispatch) => {
 try {
    const res = await axios.get('/api/company');
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
      '/api/company',
      body,
      config
    );
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
