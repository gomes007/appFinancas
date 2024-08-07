import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const loading = false;
  const signed = false;


  return (
    signed ? <View></View> : <AuthRoutes /> 
  );
}