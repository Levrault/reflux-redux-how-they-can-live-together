import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CombinedStore from './CombinedStore';
import { sync } from '../redux/ReduxActions';

const mapStateToProps = state => ({ state });

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
