import { useContext } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ActionButton } from '../components/ActionButton.js';
import { FormContainer } from '../components/forms/FormContainer.js';
import { InputText } from '../components/forms/InputText.js';
import MainContainer from '../components/MainContainer.js';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

import { MainContent } from '../components/MainContent.js';
import { MainLegend } from '../components/MainLegend.js';
import { AuthContext } from '../contexts/authContext.js';

const LoginFormContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const LinkContainer = styled.div`
  text-align: center;
  padding: 1rem 2rem;

  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #2aa4d5;
  }
`;

const LoginView = () => {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const onSubmit = (data) => {
    console.log('onSubmit', data);

    auth.logIn(data, () => {
      navigate(from, {replace: true});
    });
  };

  return (
    <MainContainer>
      <MainContent>
        <MainLegend>
          <h2>
            Ingrese sus datos para acceder y gestionar las acciones del robot.
          </h2>
        </MainLegend>

        <LoginFormContainer>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                label={'Usuario'}
                name={'userName'}
                register={register}
                required
              />
              <InputText
                label={'Contraseña'}
                name={'password'}
                type={'password'}
                register={register}
              />
              <ActionButton>Comenzar</ActionButton>
            </form>
          </FormContainer>

          <LinkContainer>
            <Link to={'/reset-password'}>Olvidé mi contraseña</Link>
          </LinkContainer>
        </LoginFormContainer>
      </MainContent>
    </MainContainer>
  );
};

export default LoginView;
