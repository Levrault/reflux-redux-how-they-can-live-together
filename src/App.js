import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import Mock from './Mock';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const App = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt="logo" />
    </Header>
    <Mock />
  </Wrapper>
);

App.propTypes = {};

export default App;
