import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #000000d6;
  margin: 32px 0;
  max-width:740px;
  font-size: 21px;
`;

const Paragraphe = styled.p`
  text-align: left;
`;

const Code = styled.pre`
  background-color: #0000000d;
  padding: 8px;
  font-size: 16px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 34px;
`;
/**
 * Dump pure text component
 */
const Article = () => (
  <Wrapper>
    <Paragraphe>
      Reflux is a simple library for unidirectional dataflow architecture and Redux
      is a predictable state container for JavaScript apps. In a modern react application,
      Reflux seems irrelevent and Redux seems to be the best solution to date.
    </Paragraphe>

    <Paragraphe>
      But what happen when you have an old Reflux app and you need to migrate it to Redux ?
    </Paragraphe>

    <Paragraphe>
      You got two options, the first one, you start from scratch with Redux.
      Simple but quite efficient.
      The second option, you migrate component by component to Redux
      while maintaining the old one until you can update them.
    </Paragraphe>

    <Paragraphe>
      This solution can be a lot a trouble since you will encounter
      the inevitable scenario case when a Redux component will need
      to exchange data with a Reflux component (or vice versa).
    </Paragraphe>

    <Title>My solution</Title>
    <Paragraphe>
      To ensure that your old Reflux component can live in armony
      with your brave but quit young Redux component,
      you will need a temporary solution. Why a temporary one ? Since you
      will, at some day, migrate all your reflux component, you will
      delete the solution.
    </Paragraphe>

    <Paragraphe>
      So I create a solution and I call it a CombinedStore Component. His role ?
      Receive reflux and redux store date and sync them. That all.
    </Paragraphe>

    <Paragraphe>
      For this demo, a made a simple counter. He can be updated by a Reflux Store and Redux store.
      When the value is updated, I sync it on both store.
    </Paragraphe>

    <Title>
      How I do it ?
    </Title>

    <Paragraphe>
      By creating internal state and two callback: one for Redux and one for Reflux.
    </Paragraphe>

    <Paragraphe>
      My internal state will be use to keep track of the lastest updated store (Redux or Reflux)
      and the current data. If a Reflux Store is used, he will update the internal store with my
      onUpdate function. When this function is called, I simple use my Redux sync function to
      set the new Redux store data.

      <Code>{`
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
      `}
      </Code>
    </Paragraphe>

    <Paragraphe>
      For the Redux part, I set my internal state in the componentWillReceiveProps function.
      Like in my Reflux solution, I set my callback just after updating my internal state.
      <Code>{`
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
    `}
      </Code>
    </Paragraphe>

    <Paragraphe>
      That pretty much all. You can test my live demo just below.
    </Paragraphe>

  </Wrapper>
);
export default Article;
