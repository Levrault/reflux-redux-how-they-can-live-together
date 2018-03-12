import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/ReduxStore';
import RefluxStore from '../reflux/RefluxStore';
import CombinedStoreContainer from './CombinedStoreContainer';

describe('Redux Store', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    const options = { color: '#0984e3', name: 'combined', value: 0 };
    ReactDOM.render(<Provider store={store}><CombinedStoreContainer tag="Counter" reflux={RefluxStore} options={options} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
