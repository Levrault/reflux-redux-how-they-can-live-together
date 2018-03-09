import React, { PureComponent } from 'react';
import { ListenerMixin } from 'reflux';
import reactMixin from 'react-mixin';
import RefluxStore from './RefluxStore';
import Counter from '../common/Counter';

/**
 * display a counter that has been sync with the reflux store
 *
 * @param {string} updatedby
 * @param {number} counter
 */
class RefluxComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = RefluxStore.getComputedState();
  }

  componentWillMount() {
    this.listenTo(RefluxStore, this.onUpdate);
  }

  onUpdate = (state) => {
    this.setState(state);
  }

  render() {
    const { updatedBy, counter } = this.state;
    return (
      <div>
        <Counter color="#db7093" updatedBy={updatedBy} counter={counter} />
      </div>
    );
  }
}

reactMixin(RefluxComponent.prototype, ListenerMixin);

export default RefluxComponent;
