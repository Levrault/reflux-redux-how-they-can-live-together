import React from 'react';
import styled from 'styled-components';
import RefluxActions from './RefluxActions';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: transparent;
  flex:1;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const RefluxButtons = () => (
  <div>
    <Title>Reflux Actions</Title>
    <Wrapper>
      <Button onClick={() => { RefluxActions.onIncrement(); }}>
          Increment
      </Button>
      <Button onClick={() => { RefluxActions.onDecrement(); }}>
          Decrement
      </Button>
      <Button onClick={() => { RefluxActions.onReset(); }}>
          Reset
      </Button>
    </Wrapper>
  </div>
);

export default RefluxButtons;
