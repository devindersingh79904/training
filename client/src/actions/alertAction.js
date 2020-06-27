import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 } from 'uuid';

export const setAlert = (msg, alertType, timeout = 2000) => (dispatch) => {
  console.log('i am in setAlert');
  const id = v4();
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, alertType },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
