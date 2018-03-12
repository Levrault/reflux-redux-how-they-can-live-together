import RefluxStore from './RefluxStore';
import RefluxActions from './RefluxActions';

describe('Reflux Store', () => {
  it('should sync state with the new value', () => {
    const mock = { counter: 3, updatedBy: 'jest' };
    RefluxActions.onSync(mock);
    expect(RefluxStore.state).toEqual(mock);
  });

  it('should increment counter value', () => {
    RefluxActions.onReset();
    expect(RefluxStore.state.counter).toBe(0);
    RefluxActions.onIncrement();
    expect(RefluxStore.state.counter).toBe(1);
  });

  it('should decrement counter value', () => {
    RefluxActions.onReset();
    RefluxActions.onDecrement();
    expect(RefluxStore.state.counter).toBe(-1);
  });

  it('should reset counter value', () => {
    RefluxActions.onReset();
    for (let index = 0; index < 3; index += 1) {
      RefluxActions.onIncrement();
    }
    expect(RefluxStore.state.counter).toBe(3);
    RefluxActions.onReset();
    expect(RefluxStore.state.counter).toBe(0);
  });
});
