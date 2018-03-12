import React from 'react';
import ReactDOM from 'react-dom';
import RefluxButtons from './RefluxComponent';

describe('Reflux Store', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RefluxButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
