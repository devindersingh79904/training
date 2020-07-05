import {
  ADD_COMPANY,
  GET_COMPANYS,
  COMPANY_ERROR,
  SET_LOADING,
} from '../actions/types';

const initialstate = {
  companys: [],
  loading: false,
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANYS:
      return {
        ...state,
        companys: payload,
        loading: false,
      };
    case ADD_COMPANY:
      return {
        ...state,
        loading: false,
        companys: [payload, ...state.companys],
      };
    case COMPANY_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
