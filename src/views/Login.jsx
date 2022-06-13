import { useContext } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ActionButton } from '../components/ActionButton.js';
import { FormContainer } from '../components/forms/FormContainer.js';
import { InputText } from '../components/forms/InputText.js';
import MainContainer from '../components/MainContainer.js';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { MainContent } from '../components/MainContent.js';
import { MainLegend } from '../components/MainLegend.js';
import { AuthContext } from '../contexts/authContext.js';

const LoginView = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    console.log('onSubmit', data);

    auth.logIn(data, () => {
      navigate(from, {replace: true})
    });
  };

  return (
    <MainContainer>
      <MainContent>
        <MainLegend>
          <h2>Ingrese sus datos para acceder y gestionar las acciones del robot.</h2>
        </MainLegend>

        <div style={{ width: '50%', margin: '0 auto' }}>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputText label={'Usuario'} required/>
              <InputText label={'Pin'} type={'password'} />
              <ActionButton>Comenzar</ActionButton>
            </form>
          </FormContainer>
        </div>

      </MainContent>
    </MainContainer>
  );
};

export default LoginView;
