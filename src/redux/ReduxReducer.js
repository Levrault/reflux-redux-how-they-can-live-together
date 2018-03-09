import { INCREMENT, DECREMENT, RESET, SYNC } from './ReduxConstant';

const initialState = {
  updatedBy: 'Redux',
  counter: 0,
};

export default function ReduxReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, ...action.payload };
    case DECREMENT:
      return { ...state, ...action.payload };
    case SYNC:
      return { ...state, ...action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
