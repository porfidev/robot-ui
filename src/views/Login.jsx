import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import LogoOctopy from '../components/LogoOctopy.js';
import MainContainer from '../components/MainContainer.js';

import styled from 'styled-components';

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
      <LogoOctopy />
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
    </MainContainer>
  );
};

export default LoginView;
