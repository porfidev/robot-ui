import styled from 'styled-components';

const ShutDownButton = styled.div`
  position: absolute;
  background-color: #c30c3b;
  color: #ffffff;
  width: 6rem;
  height: 9rem;
  top: 2rem;
  left: 0;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #ec124b;
  }
`;

export { ShutDownButton };
