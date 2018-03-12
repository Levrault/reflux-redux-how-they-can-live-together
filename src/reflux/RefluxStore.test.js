import RefluxStore from './RefluxStore';

describe('Reflux Store', () => {
  it('should return a default state value', () => {
    expect(RefluxStore.getComputedState()).toEqual({ counter: 0, updatedBy: 'Reflux' });
  });

  it('should sync state with the new value', () => {
    const mock = { counter: 3, updatedBy: 'jest' };
    RefluxStore.onSync(mock);
    expect(RefluxStore.state).toEqual(mock);
  });

  it('should increment counter value', () => {
    RefluxStore.onReset();
    expect(RefluxStore.state.counter).toBe(0);
    RefluxStore.onIncrement();
    expect(RefluxStore.state.counter).toBe(1);
  });

  it('should decrement counter value', () => {
    RefluxStore.onReset();
    RefluxStore.onDecrement();
    expect(RefluxStore.state.counter).toBe(-1);
  });

  it('should reset counter value', () => {
    RefluxStore.onReset();
    for (let index = 0; index < 3; index += 1) {
      RefluxStore.onIncrement();
    }
    expect(RefluxStore.state.counter).toBe(3);
    RefluxStore.onReset();
    expect(RefluxStore.state.counter).toBe(0);
  });
});
