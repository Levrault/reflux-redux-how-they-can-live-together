import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  font-weight: bold;
  flex:1;
  color: ${props => (props.color ? props.color : '#00cec9')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => (props.color ? props.color : '#00cec9')};
  border-radius: 3px;
  transition: .25s;

  &:hover {
    background: ${props => (props.color ? props.color : '#00cec9')};
    transition: .25s;
    color: white;
  }
`;

export default Button;
