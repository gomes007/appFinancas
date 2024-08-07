import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
    `;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    `;

export const Logo = styled.Image`
    margin-bottom: 25px;
    `;

export const AreaInput = styled.View`
    flex-direction: row;
    `;

export const Input = styled.TextInput`
    background: #FFF;
    color: #121212;
    font-size: 17px;
    border-radius: 8px;
    width: 90%;    
    padding: 10px;
    margin-bottom: 15px;
    `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #3b3dbf;
    height: 45px;
    width: 90%;
    border-radius: 8px;
    margin-top: 10px;
    `;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 18px;
    `;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
    `;

export const LinkText = styled.Text`
    color: #121212;
    `;

