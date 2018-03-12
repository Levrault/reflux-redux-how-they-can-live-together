import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Name = styled.span`
  font-size:2rem;
  margin-right: 8px;
  color: ${props => props.color}
`;

const Value = styled.span`
  font-size:2rem;
  color: #0984e3;
  font-weight: 700;
`;

const getColors = (updatedBy) => {
  switch (updatedBy) {
    case 'Reflux':
      return '#db7093';
    default:
      return '#00cec9';
  }
};

/**
 * Simple counter
 *
 * @param {string} updatedBy which store has send the counter value
 * @param {number} counter
 */
const Counter = ({ updatedBy, counter }) => (
  <Wrapper>
    <Name color={getColors(updatedBy)}>{`Updated by ${updatedBy}`}</Name>
    <Value>{counter}</Value>
  </Wrapper>
);

Counter.propTypes = {
  updatedBy: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};


export default Counter;
