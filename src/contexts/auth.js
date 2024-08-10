import { useNavigation } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(nome, email, password) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/users", {
        name: nome,
        email: email,
        password: password,
      });
      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      console.error(error);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
