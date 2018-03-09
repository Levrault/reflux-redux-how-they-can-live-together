import React, { Component } from 'react';
import { ListenerMixin } from 'reflux';
import reactMixin from 'react-mixin';
import RefluxStore from './RefluxStore';
import Counter from '../common/Counter';

class RefluxComponent extends Component {
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
        <Counter color="#db7093" name={updatedBy} value={counter} />
      </div>
    );
  }
}

reactMixin(RefluxComponent.prototype, ListenerMixin);

export default RefluxComponent;
