import React, { useContext } from 'react';
import {
    Container,
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogoutText
} from './styles'

import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';


export default function Profile() {
    const navigation = useNavigation();
    const { user, signOut } = useContext(AuthContext);

    return (
        <Container>
            <Header title="Meu perfil" />
            <Message>Profile</Message>
            <Name>{user && user.name}</Name>

            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Registrar</NewText>
            </NewLink>

            <LogoutButton onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    );
}