import React from 'react';
import styled from 'styled-components';
import RefluxActions from './RefluxActions';
import Button from '../common/Button';
import Title from '../common/Title';

const Wrapper = styled.div`
  margin: 2em;
`;

const ButtonsWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

/**
 * Call reflux store action
 *
 * @param {number}   counter
 * @param {function} onIncrement
 * @param {function} onDecrement
 * @param {function} onReset
 */
const RefluxButtons = () => (
  <Wrapper>
    <Title color="#db7093">Reflux Actions</Title>
    <ButtonsWrapper>
      <Button type="button" color="#db7093" onClick={() => { RefluxActions.onIncrement(); }}>
          Increment
      </Button>
      <Button color="#db7093" onClick={() => { RefluxActions.onDecrement(); }}>
          Decrement
      </Button>
      <Button color="#db7093" onClick={() => { RefluxActions.onReset(); }}>
          Reset
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default RefluxButtons;
