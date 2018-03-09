import { Store, initStore } from 'reflux';
import RefluxActions from './RefluxActions';

class RefluxStore extends Store {
  constructor() {
    super();
    this.state = this.getComputedState();
    this.listenables = [RefluxActions]; // listen action
  }

  getComputedState = () => (
    { updatedBy: 'Reflux', counter: 0 }
  )

  onStatusUpdate = (state) => {
    this.setState(state);
  }

  onIncrement = () => {
    const counter = this.state.counter + 1;
    this.setState({
      updatedBy: 'Reflux',
      counter,
    });
  }

  onReset = () => {
    this.setState({ counter: 0 });
  }
}

export default initStore(RefluxStore);
