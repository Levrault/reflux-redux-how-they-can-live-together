import React from 'react';
import logo from './logo.svg';
import Mock from './Mock';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
            How Reflux and Redux should communicate ?
      </div>
    </header>
    <Mock />
  </div>
);

App.propTypes = {};

export default App;
