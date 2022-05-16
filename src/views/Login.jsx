import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ActionButton } from '../components/ActionButton.js';
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

            <ActionButton>Comenzar</ActionButton>
          </form>
        </FormContainer>
      </MainContent>
    </MainContainer>
  );
};

export default LoginView;
