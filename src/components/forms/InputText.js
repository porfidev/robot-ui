import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  label {
    color: #2AA4D5;
    font-size: 1.2rem;
  }
  
  input {
    background: #FFFFFF;
    border: 2px solid #000000;
    padding: 0.6rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    min-width: 16rem;
  }
`

const InputText = ({label, type = 'text', ...rest}) => {
  return <InputContainer>
    <label>{label}</label>
    <input type={type} {...rest} />
  </InputContainer>
}

export { InputText };
