import styled from 'styled-components';

const StyledButton = styled.button`
  background: #FFFFFF;
  border: 2px solid #000000;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  color: #000;
  cursor: pointer;
  
  &:hover {
    background-color: lightgray;
  }
`;

const ActionButton = ({children, ...rest}) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
export { ActionButton };
