import { INCREMENT, DECREMENT, RESET, SYNC } from './ReduxConstant';

export const increment = counter => ({ type: INCREMENT, payload: counter + 1 });

export const decrement = counter => ({ type: DECREMENT, payload: counter - 1 });

export const sync = data => ({ type: SYNC, payload: data });

export const reset = () => ({ type: RESET, payload: 0 });
