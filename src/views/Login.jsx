import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import MainContainer from '../components/MainContainer.js';
import { ReactComponent as LogoOctopy } from '../assets/logo_solo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterOctopy = styled.div`
  position: absolute;
  bottom: 0;
  height: 2rem;
  width: calc(100% - (2rem * 2));
  background-color: #171717;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const FormContainer = styled.div`
  display: flex;
  margin: 4rem auto;
  flex: 1;
  max-width: 676px;

  legend {
    font-size: 2rem;
  }
`;

const LoginView = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });
  const onSubmit = data => {
    console.log('onSubmit', data);
  };

  return (
    <MainContainer>
      <LogoContainer>
        <LogoOctopy/>
      </LogoContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <legend>Ingrese sus datos para acceder y gestionar las acciones del robot.</legend>
            <Controller
              render={
                ({field, fieldState: {error}}) =>
                  (<TextField label="Usuario" variant="outlined" {...field} error={!!error}
                              helperText={error && error.message}
                              InputLabelProps={{shrink: true}}
                              fullWidth
                              style={{ margin: '40px 0'}}/>)}
              name="userName"
              control={control}
              rules={{required: 'Se requiere el nombre usuario'}}
            />
            <Controller
              render={
                ({field, fieldState: {error}}) =>
                  (<TextField label="Contraseña" variant="outlined" {...field} error={!!error}
                              helperText={error && error.message}
                              InputLabelProps={{shrink: true}}
                              fullWidth/>)}
              name="password"
              control={control}
              rules={{required: 'Se requiere la contraseña'}}
            />

          <Button type={'submit'} style={{ margin: '40px 0'}} fullWidth={true}>Comenzar</Button>
        </form>
      </FormContainer>
      <FooterOctopy>
        <span>Powered by <span>Octopy</span> 2022</span>
      </FooterOctopy>
    </MainContainer>
  );
};

export default LoginView;
