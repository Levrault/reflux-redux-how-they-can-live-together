import React, { PureComponent } from 'react';
import { ListenerMixin } from 'reflux';
import _isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import reactMixin from 'react-mixin';
import registry from './registry';

/**
 * CombinedStore link reflux store and redux store by
 * setting callback to both of them.
 *
 * I created two state on my component to keep track of the lastest
 * updated source. When my value are updated, I use the flag source
 * to set those value to the child component.
 *
 * Child component are mapped with a simple registry with a Id/Component value
 *
 * @extends PureComponent
 */
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

  /**
   * Constructor
   * Init reflux value based on the reflux store data (getComputedState)
   * Init redux data with store data
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      reflux: this.props.reflux.getComputedState(),
      redux: this.props.redux,
      source: 'redux',
    };
  }

  /**
   * Link reflux store to the component state
   */
  componentWillMount() {
    this.listenTo(this.props.reflux, this.onUpdate);
  }

  /**
   * Since Redux update his data by updating props,
   * I use the componentWillReceiveProps to update the
   * redux value
   * When redux value can be updtated, I sync the new
   * data with the reflux store
   * @param  {object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    const { redux: oldRedux } = this.props;
    const { redux: nextRedux } = nextProps;

    // redux source
    if (!_isEqual(oldRedux, nextRedux)) {
      this.setState({
        redux: nextRedux,
        source: 'redux',
      });

      // sync reflux store
      this.props.reflux.onSync(nextRedux);
    }
  }

  /**
   * Reflux store listener, is called when
   * reflux store is udpdated
   *
   * reduxSync function is call to sync the redux store with
   * the data of the reflux store
   *
   * @param  {object} reflux
   */
  onUpdate = (reflux) => {
    this.setState({ reflux, source: 'reflux' });

    // sync redux store
    this.props.reduxSync(reflux);
  }

  /**
   * Render
   */
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
