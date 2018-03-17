import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #000000d6;
  margin: 32px 0;
  max-width: 740px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(max-width: 762px) {
    margin: 16px 0;
  }
`;

const Paragraphe = styled.p`
  text-align: left;

  @media(max-width: 762px) {
    padding: 0 16px;
    text-align: justify;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 1.6rem;

  @media(max-width: 762px) {
    padding: 0 16px;
  }
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
      while maintaining the old ones until you can update them.
    </Paragraphe>

    <Paragraphe>
      This solution can be a lot of troubles since you will encounter
      the inevitable case scenario when a Redux component will need
      to exchange data with a Reflux component (or vice versa).
    </Paragraphe>

    <Title>My solution</Title>
    <Paragraphe>
      To ensure that your old Reflux component can live in armony
      with your brave but quite young Redux component,
      you will need a temporary solution. Why a temporary one ? Since you
      will, in the future, migrate all your reflux component, you will
      delete the solution.
    </Paragraphe>

    <Paragraphe>
      So I created a solution and I called it a CombinedStore Component. It role ?
      Receive reflux and redux store data and sync them. That's all.
    </Paragraphe>

    <Paragraphe>
      For this demo, I made a simple counter. It can be updated by a Reflux Store and Redux store.
      When the value is updated, I sync it on both stores.
    </Paragraphe>

    <Title>
      How I did it ?
    </Title>

    <Paragraphe>
      By creating internal state and two callbacks: one for Redux and one for Reflux.
    </Paragraphe>

    <Paragraphe>
      My internal state will be use to keep track of the lastest updated store (Redux or Reflux)
      and the current data. If a Reflux Store function is called, it will update the
      internal state with my onUpdate function. When this function is called, I
      simply use my Redux sync function to set the new Redux store data.
    </Paragraphe>

    <SyntaxHighlighter language="javascript" style={docco}>{`
/**
 * Reflux store listener, is called 
 * when reflux store is udpdated
 *
 * reduxSync function is call to sync 
 * the redux store with 
 * the data of the reflux store
 *
 * @param  {object} reflux
 */
onUpdate = (reflux) => {
  this.setState({ 
    reflux, 
    source: 'reflux' 
  });

  // sync redux store
  this.props.reduxSync(reflux);
}
      `}
    </SyntaxHighlighter>

    <Paragraphe>
      For the Redux part, I set my internal state in the componentWillReceiveProps function.
      Like in my Reflux solution, I set my callback just after updating the
      CombinedStore component's state.
    </Paragraphe>
    <SyntaxHighlighter language="javascript" style={docco}>{`
/**
 * Since Redux update his 
 * data by updating props,
 * I use the componentWillReceiveProps 
 * to update the redux value
 * When redux value can be updtated, 
 * I sync the new data with the reflux 
 * store
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
    </SyntaxHighlighter>

    <Paragraphe>
      That's pretty much all. You can test my live demo just below.
    </Paragraphe>

  </Wrapper>
);
export default Article;
