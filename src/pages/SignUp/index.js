import React, { useContext } from 'react';
import { Platform } from 'react-native';

import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/style';

import { AuthContext } from '../../contexts/auth';



export default function SignUp() {
  const { user } = useContext(AuthContext);
  function handleSignUp() {
    console.log(user);
  }
  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}