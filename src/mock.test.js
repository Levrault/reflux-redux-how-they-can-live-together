import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/ReduxStore';
import Mock from './Mock';

describe('Redux Store', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Mock /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
