import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Title from '../common/Title';
import { increment, decrement, reset } from './ReduxActions';

const Wrapper = styled.div`
  margin: 2em;
`;

const ButtonsWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const mapStateToProps = ({ counter }) => ({ counter });

const ButtonsContainer = ({
  counter,
  onIncrement,
  onDecrement,
  onReset,
}) => (
  <Wrapper>
    <Title>Redux Actions</Title>
    <ButtonsWrapper>
      <Button onClick={() => { onIncrement(counter); }}>
          Increment
      </Button>
      <Button onClick={() => { onDecrement(counter); }}>
          Decrement
      </Button>
      <Button onClick={() => { onReset(counter); }}>
          Reset
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

ButtonsContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const ReducButtonsContainer = connect(
  mapStateToProps,
  {
    onIncrement: increment,
    onDecrement: decrement,
    onReset: reset,
  },
)(ButtonsContainer);

export default ReducButtonsContainer;
