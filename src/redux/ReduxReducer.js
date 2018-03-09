import { INCREMENT, DECREMENT, RESET } from './ReduxConstant';

const initialState = {
  updatedBy: 'Redux',
  counter: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: action.payload };
    case DECREMENT:
      return { ...state, counter: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
