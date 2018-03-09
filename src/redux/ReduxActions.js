import { INCREMENT, DECREMENT, RESET } from './ReduxConstant';

export const increment = counter => ({ type: INCREMENT, payload: counter + 1 });

export const decrement = counter => ({ type: DECREMENT, payload: counter - 1 });

export const reset = () => ({ type: RESET, payload: 0 });
