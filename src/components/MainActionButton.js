import styled, { css } from 'styled-components';

const ActionButton = styled.div`
  position: relative;
  flex: 1 0 20%; /* explanation below */
  margin: 1.4rem;
  height: 10rem;
  background-color: ${({ enabled }) => enabled ? '#2aa4d5' : 'gray'};
  border-radius: 1.2rem;
  cursor: ${({ enabled }) => enabled ? 'pointer' : 'not-allowed'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ enabled }) => enabled ? '#36b4ec' : 'gray'};
  }

  span {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  ${({enabled}) => enabled === false && css`
    &::after {
      content: 'desactivado';
      text-transform: uppercase;
      background-color: #3C3C3C;
      position: absolute;
      bottom: 0;
      padding: 0.2rem 0.8rem;
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
    }
  `}

`;

const MainActionButton = ({ enabled = true, children }) => {
  return <ActionButton enabled={enabled}>
    {children}
  </ActionButton>
}

export default MainActionButton;
