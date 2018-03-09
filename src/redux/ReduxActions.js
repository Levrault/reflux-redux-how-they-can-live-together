import { INCREMENT, DECREMENT, RESET, SYNC } from './ReduxConstant';

export const increment = (updatedBy, counter) => ({
  type: INCREMENT,
  payload: {
    updatedBy,
    counter: counter + 1,
  },
});

export const decrement = (updatedBy, counter) => ({
  type: DECREMENT,
  payload: {
    updatedBy,
    counter: counter - 1,
  },
});

export const sync = data => ({ type: SYNC, payload: data });

export const reset = () => ({ type: RESET, payload: 0 });
