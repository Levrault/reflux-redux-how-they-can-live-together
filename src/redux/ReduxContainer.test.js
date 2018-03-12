import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './ReduxStore';
import ReduxContainer from './ReduxContainer';

describe('Redux Store', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ReduxContainer /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
