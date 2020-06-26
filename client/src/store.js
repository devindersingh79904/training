import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialstate = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
