import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => (props.color ? props.color : '#00cec9')};
`;

export default Title;
