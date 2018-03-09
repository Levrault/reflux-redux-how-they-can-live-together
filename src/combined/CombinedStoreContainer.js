import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CombinedStore from './CombinedStore';
import { sync } from '../redux/ReduxActions';

const mapStateToProps = state => ({ state });

/**
 * Combined container is used to sync all redux data
 * to the CombinedStore.
 *
 * I need the complete reduce sync to create a generic
 * CombinedStore component. I can trigger the good store data
 * based on the reflux store passed has data.
 *
 * @param {object}    state
 * @param {function}  reduxSync
 * @param {object}    reflux
 * @param {string}    tag
 * @param {object}    options
 */
const CombinedContainer = ({
  state,
  reduxSync,
  reflux,
  tag,
  options,
}) => (
  <div>
    <CombinedStore
      redux={state}
      reflux={reflux}
      tag={tag}
      reduxSync={reduxSync}
      options={options}
    />
  </div>
);

CombinedContainer.defaultProps = {
  options: {},
};

CombinedContainer.propTypes = {
  state: PropTypes.object.isRequired,
  reflux: PropTypes.any.isRequired,
  tag: PropTypes.string.isRequired,
  options: PropTypes.object,
  reduxSync: PropTypes.func.isRequired,
};

const CombinedStoreContainer = connect(mapStateToProps, { reduxSync: sync })(CombinedContainer);

export default CombinedStoreContainer;
