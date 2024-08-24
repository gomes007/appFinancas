import React, { useState } from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import Header from "../../components/Header";
import RegisterTypes from "../../components/RegisterTypes";
import api from "../../services/api";

export default function New() {

    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit() {
        Keyboard.dismiss();
        if (isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        );
    }

    async function handleAdd() {
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        }).then(() => {
            setLabelInput('');
            setValueInput('');
            setType('receita');
            Keyboard.dismiss();
            Alert.alert(
                'Confirmação',
                'Registrado com sucesso!',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Home')
                    }
                ]
            );
        }).catch(() => {
            alert('Erro ao registrar');
        });
    }



    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />
                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input
                        placeholder="Descricao desse registro"
                        autoCorrect={false}
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />
                    <Input
                        placeholder="Valor do registro"
                        autoCorrect={false}
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}