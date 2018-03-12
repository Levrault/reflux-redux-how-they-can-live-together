import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RefluxComponent from './RefluxComponent';
import RefluxStore from './RefluxStore';

describe('Reflux Store', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RefluxComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should sync state with reflux store', () => {
    const component = shallow(<RefluxComponent />);
    expect(component.state()).toEqual({ updatedBy: 'Reflux', counter: 0 });

    // on sync
    RefluxStore.onSync({ updatedBy: 'jest', counter: 100 });
    expect(component.state()).toEqual({ updatedBy: 'jest', counter: 100 });

    // increment
    RefluxStore.onIncrement();
    expect(component.state('counter')).toBe(101);

    // decrement
    RefluxStore.onDecrement();
    expect(component.state('counter')).toBe(100);

    // reset
    RefluxStore.onReset();
    expect(component.state()).toEqual({ updatedBy: 'Reflux', counter: 0 });
  });

  it('should change state when onUpdate function is called', () => {
    const component = shallow(<RefluxComponent />);

    const mock = { updatedBy: 'jest', counter: 10 };
    component.instance().onUpdate(mock);
    expect(component.state()).toEqual(mock);
  });
});
