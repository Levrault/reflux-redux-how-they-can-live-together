import React, { PureComponent } from 'react';
import { ListenerMixin } from 'reflux';
import _isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import reactMixin from 'react-mixin';
import registry from './registry';

class CombinedStore extends PureComponent {
  static propTypes = {
    redux: PropTypes.object.isRequired,
    reflux: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
    reduxSync: PropTypes.func.isRequired,
    options: PropTypes.object,
  };

  static defaultProps = {
    options: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      reflux: this.props.reflux.getComputedState(),
      redux: this.props.redux,
      source: 'redux',
    };
  }

  componentWillMount() {
    this.listenTo(this.props.reflux, this.onUpdate);
  }

  componentWillReceiveProps(nextProps) {
    const { redux: oldRedux } = this.props;
    const { redux: nextRedux } = nextProps;

    // redux source
    if (!_isEqual(oldRedux, nextRedux)) {
      this.setState({
        redux: nextRedux,
        source: 'redux',
      });
      this.props.reflux.onSync(nextRedux);
    }
  }

  onUpdate = (reflux) => {
    this.setState({ reflux, source: 'reflux' });
    this.props.reduxSync(reflux);
  }

  render() {
    const { tag, options } = this.props;
    const { source } = this.state;
    const Tag = registry(tag);
    return (
      <div>
        <Tag {...this.state[source]} {...options} />
      </div>
    );
  }
}

reactMixin(CombinedStore.prototype, ListenerMixin);

export default CombinedStore;
