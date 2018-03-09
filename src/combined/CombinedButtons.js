import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import Title from '../common/Title';
import { decrement } from '../redux/ReduxActions';

const Wrapper = styled.div`
  margin: 2em;
`;

const ButtonsWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const mapStateToProps = ({ counter }) => ({ counter });

const CombinedButtons = ({
  counter,
  onIncrement,
  onDecrement,
}) => (
  <Wrapper>
    <Title color="#0984e3">Combined Reflux/Redux Actions</Title>
    <ButtonsWrapper>
      <Button color="#0984e3" onClick={() => { onIncrement(counter); }}>
          Increment with Reflux
      </Button>
      <Button color="#0984e3" onClick={() => { onDecrement(counter); }}>
          Decrement with Redux
      </Button>
      <Button color="#0984e3">{'How it\'s working'}</Button>
    </ButtonsWrapper>
  </Wrapper>
);

CombinedButtons.defaultProps = {
  counter: 0,
  onIncrement: () => {},
  onDecrement: () => {},
};

CombinedButtons.propTypes = {
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

const CombinedButtonsContainer = connect(
  mapStateToProps,
  {
    onDecrement: decrement,
  },
)(CombinedButtons);

export default CombinedButtonsContainer;
