# Reflux and Redux how they can live together ?

Reflux is a simple library for unidirectional dataflow architecture and Redux is a predictable state container for JavaScript apps. In a modern react application, Reflux seems irrelevent and Redux seems to be the best solution to date.

But what happen when you have an old Reflux app and you need to migrate it to Redux ?

You got two options, the first one, you start from scratch with Redux. Simple but quite efficient. The second option, you migrate component by component to Redux while maintaining the old ones until you can update them.


This solution can be a lot of troubles since you will encounter the inevitable case scenario when a Redux component will need to exchange data with a Reflux component (or vice versa).

## My Solution

To ensure that your old Reflux component can live in armony with your brave but quite young Redux component, you will need a temporary solution. Why a temporary one ? Since you will, in the future, migrate all your reflux component, you will delete the solution.

So I created a solution and I called it a CombinedStore Component. It role ? Receive reflux and redux store data and sync them. That's all.

For this demo, I made a simple counter. It can be updated by a Reflux Store and Redux store. When the value is updated, I sync it on both stores.

## How I do it ?

By creating internal state and two callbacks: one for Redux and one for Reflux.

My internal state will be use to keep track of the lastest updated store (Redux or Reflux) and the current data. If a Reflux Store function is called, it will update the internal state with my onUpdate function. When this function is called, I simply use my Redux sync function to set the new Redux store data.

```javascript
/**
 * Reflux store listener, is called when
 * reflux store is udpdated
 *
 * reduxSync function is call to sync the redux store with
 * the data of the reflux store
 *
 * @param  {object} reflux
 */
onUpdate = (reflux) => {
  this.setState({ reflux, source: 'reflux' });

  // sync redux store
  this.props.reduxSync(reflux);
}
```

For the Redux part, I set my internal state in the componentWillReceiveProps function. Like in my Reflux solution, I set my callback just after updating the CombinedStore component's state.

```javascript
/**
 * Since Redux update his data by updating props,
 * I use the componentWillReceiveProps to update the
 * redux value
 * When redux value can be updtated, I sync the new
 * data with the reflux store
 * @param  {object} nextProps
 */
componentWillReceiveProps(nextProps) {
  const { redux: oldRedux } = this.props;
  const { redux: nextRedux } = nextProps;

  // redux source
  if (!_isEqual(oldRedux, nextRedux)) {
    this.setState({
      redux: nextRedux,
      source: 'redux',
    });

    // sync reflux store
    this.props.reflux.onSync(nextRedux);
  }
}
```



That's pretty much all. I made a demo accessible at [this page](https://guitarlove.github.io/reflux-redux-how-they-can-live-together/)