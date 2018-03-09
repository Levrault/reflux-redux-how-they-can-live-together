import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from '../common/Counter';

const mapStateToProps = ({ updatedBy, counter }) => (
  {
    updatedBy,
    counter,
  }
);

/**
 * display a counter that has been sync with the redux store
 *
 * @param {string} updatedby
 * @param {number} counter
 */
const Container = ({ updatedBy, counter }) => (
  <div>
    <Counter color="#00cec9" updatedBy={updatedBy} counter={counter} />
  </div>
);

Container.propTypes = {
  updatedBy: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};


const ReduxContainer = connect(mapStateToProps)(Container);
export default ReduxContainer;
