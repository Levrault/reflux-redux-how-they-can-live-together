import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter color="#000" updatedBy="test" counter={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
