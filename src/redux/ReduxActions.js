import { INCREMENT, DECREMENT, RESET, SYNC } from './ReduxConstant';

/**
 * Increment and update redux's counter value
 * @param  {string} updatedBy
 * @param  {number} counter
 * @return {object}
 */
export const increment = (updatedBy, counter) => ({
  type: INCREMENT,
  payload: {
    updatedBy,
    counter: counter + 1,
  },
});

/**
 * Decrement and update redux's counter value
 * @param  {string} updatedBy
 * @param  {number} counter
 * @return {object}
 */
export const decrement = (updatedBy, counter) => ({
  type: DECREMENT,
  payload: {
    updatedBy,
    counter: counter - 1,
  },
});

/**
 * Sync all data with the props value
 * @param  {object} data
 * @return {object}
 */
export const sync = data => ({ type: SYNC, payload: data });

/**
 * Reset counter to 0
 * @return {object}
 */
export const reset = () => ({ type: RESET, payload: 0 });
