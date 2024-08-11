import React, { useContext } from "react";
import { Button, Text, View } from 'react-native';

import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const { signOut, user } = useContext(AuthContext);
  return (
    <View>
      <Text>TELA HOME</Text>
      <Text>{user && user.name}</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}