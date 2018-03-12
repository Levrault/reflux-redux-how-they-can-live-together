import { Store, initStore } from 'reflux';
import RefluxActions from './RefluxActions';

class RefluxStore extends Store {
  constructor() {
    super();
    this.state = this.getComputedState();
    this.listenables = [RefluxActions]; // listen action
  }

  /**
   * Return a default state
   * @returns object
   */
  getComputedState = () => (
    { updatedBy: 'Reflux', counter: 0 }
  )

  /**
   * Set a new state
   */
  onSync = (state) => {
    this.setState(state);
  }

  /**
   * Increment and update reflux's counter value
   * @param  {string} updatedBy
   * @param  {number} counter
   * @return {object}
   */
  onIncrement = () => {
    const counter = this.state.counter + 1;
    this.setState({
      updatedBy: 'Reflux',
      counter,
    });
  }

  /**
   * Decrement and update reflux's counter value
   * @param  {string} updatedBy
   * @param  {number} counter
   * @return {object}
   */
  onDecrement = () => {
    const counter = this.state.counter - 1;
    this.setState({
      updatedBy: 'Reflux',
      counter,
    });
  }

  /**
   * Reset counter to 0
   * @return {object}
   */
  onReset = () => {
    this.setState(this.getComputedState());
  }
}

export default initStore(RefluxStore);
