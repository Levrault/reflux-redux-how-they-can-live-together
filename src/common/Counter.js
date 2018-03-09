import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Name = styled.span.attrs({
  color: props => props.color,
})`
  font-weight: 700;
  margin-right: 8px;
  color: ${props => props.color}
`;

const Value = styled.span`
  color: #0984e3;
`;

const Counter = ({ color, name, value }) => (
  <Wrapper>
    <Name color={color}>{name}</Name>
    <Value>{value}</Value>
  </Wrapper>
);

Counter.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};


export default Counter;
