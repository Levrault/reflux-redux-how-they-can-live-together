import React, { Component } from 'react';
import styled from 'styled-components';
import RefluxComponent from './reflux/RefluxComponent';
import RefluxButtons from './reflux/RefluxButtons';
import ReduxContainer from './redux/ReduxContainer';
import ReduxButtonsContainer from './redux/ReduxButtonsContainer';
import CombinedStoreContainer from './combined/CombinedStoreContainer';
import CombinedButtons from './combined/CombinedButtons';
import RefluxStore from './reflux/RefluxStore';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class Mock extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <h1>Mock</h1>
        <CombinedStoreContainer tag="Counter" reflux={RefluxStore} options={{ name: 'combined', value: 0 }} />
        <ButtonWrapper>
          <RefluxButtons />
          <CombinedButtons onIncrement={RefluxStore.onIncrement} />
          <ReduxButtonsContainer />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default Mock;
