import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    color: #2aa4d5;
    font-size: 1.2rem;
  }

  input {
    background: #ffffff;
    border: 2px solid #000000;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    min-width: 16rem;
  }

  .viewPassword {
    display: ${({type}) => (type === 'password' ? 'flex' : 'none')};
    position: absolute;
    right: 1rem;
    top: 2rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
`;

// TODO: Move password to outher component
const InputText = ({label, name, type = 'text', register, ...rest}) => {
  const [showPassword, setShowPassword] = useState(false);

  const defineType = useCallback(
    (inputType) => {
      if (inputType !== 'password') {
        return inputType;
      }

      return showPassword ? 'text' : 'password';
    },
    [type, showPassword]
  );

  return (
    <InputContainer type={type}>
      <label>{label}</label>
      <input type={defineType(type)} {...register(name, {required: rest.required})} {...rest} />
      <div
        className="viewPassword"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <VisibilityIcon color="info"/> : <VisibilityOffIcon color="info"/>}
      </div>
    </InputContainer>
  );
};

export { InputText };
