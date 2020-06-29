import { ADD_COMPANY, GET_COMPANYS, COMPANY_ERROR } from '../actions/types';

const initialstate = {
  companys: [],
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANYS:
      return {
        ...state,
        companys: payload,
      };
    case ADD_COMPANY:
      return {
        ...state,
        companys: [payload, ...state.companys],
      };
    case COMPANY_ERROR:
      console.log('Company Error');

    default:
      return state;
  }
};
