import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import LogoOctopy from '../components/LogoOctopy.js';
import MainContainer from '../components/MainContainer.js';

import styled from 'styled-components';
import { MainContent } from '../components/MainContent.js';
import { MainLegend } from '../components/MainLegend.js';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const FormButton = styled.button`
  background: #FFFFFF;
  border: 2px solid #000000;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  color: #000;
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

      <MainContent>
        <MainLegend>
          <h2>Ingrese sus datos para acceder y gestionar las acciones del robot.</h2>
        </MainLegend>

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <FormButton>Comenzar</FormButton>
          </form>
        </FormContainer>
      </MainContent>
    </MainContainer>
  );
};

export default LoginView;
