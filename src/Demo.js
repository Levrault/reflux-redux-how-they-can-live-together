import React from 'react';
import styled from 'styled-components';
import RefluxButtons from './reflux/RefluxButtons';
import ReduxButtonsContainer from './redux/ReduxButtonsContainer';
import CombinedStoreContainer from './combined/CombinedStoreContainer';
import CombinedButtons from './combined/CombinedButtons';
import RefluxStore from './reflux/RefluxStore';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  border: 1px solid #000000d6;
  border-radius: 8px;
  margin-bottom: 32px;
`;

/**
 * Demo component
 */
const Demo = () => (
  <Wrapper>
    <CombinedStoreContainer tag="Counter" reflux={RefluxStore} options={{ name: 'combined', value: 0 }} />
    <ButtonWrapper>
      <RefluxButtons />
      <CombinedButtons onIncrement={RefluxStore.onIncrement} />
      <ReduxButtonsContainer />
    </ButtonWrapper>
  </Wrapper>
);

export default Demo;
