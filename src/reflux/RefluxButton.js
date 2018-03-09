import React from 'react';
import styled from 'styled-components';
import RefluxActions from './RefluxActions';

const Button = styled.button`
  background: transparent;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const RefluxButton = () => (
  <Button onClick={() => { RefluxActions.onIncrement(); }}>
      Execute a Reflux Action
  </Button>
);

export default RefluxButton;
