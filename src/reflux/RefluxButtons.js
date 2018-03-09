import React from 'react';
import styled from 'styled-components';
import RefluxActions from './RefluxActions';

const Wrapper = styled.div`
  margin: 2em;
`;

const ButtonsWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #db7093;
`;

const Button = styled.button`
  background: transparent;
  flex:1;
  color: #db7093;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #db7093;
  border-radius: 3px;
`;

const RefluxButtons = () => (
  <Wrapper>
    <Title>Reflux Actions</Title>
    <ButtonsWrapper>
      <Button onClick={() => { RefluxActions.onIncrement(); }}>
          Increment
      </Button>
      <Button onClick={() => { RefluxActions.onDecrement(); }}>
          Decrement
      </Button>
      <Button onClick={() => { RefluxActions.onReset(); }}>
          Reset
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default RefluxButtons;
