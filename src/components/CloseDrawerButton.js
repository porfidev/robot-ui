import styled from 'styled-components';

const CloseDrawerButton = styled.div`
  display: flex;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  &:hover {
    background-color: #2f2f2f;
  }
`;

export { CloseDrawerButton };
