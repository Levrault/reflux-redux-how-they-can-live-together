import { createStore } from 'redux';
import Reducer from './ReduxReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
