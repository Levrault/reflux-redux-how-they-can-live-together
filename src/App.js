import React from 'react';
import styled from 'styled-components';
import logo from './avatar.png';
import Demo from './Demo';
import Article from './text/Article';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  height: 100%;
  padding: 32px;
  text-align: center;
  background: #2c3e50;
  color: #fff;
`;

const Logo = styled.img`
  height: 200px;
  border-radius: 100%;
  border: 2px solid #FFF;
`;

const App = () => (
  <div>
    <Header>
      <Logo src={logo} alt="logo" />
      <h1>Reflux & Redux: How they can live together</h1>
      <h2>By Luc-Frédéric Langis</h2>
    </Header>
    <Wrapper>
      <Article />
      <Demo />
    </Wrapper>
  </div>
);

App.propTypes = {};

export default App;
