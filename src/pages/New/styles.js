import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 4px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;    
`;