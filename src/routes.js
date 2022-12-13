// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import ListConteudo from './pages/ListConteudo'
import DetailConteudo from './pages/DetailConteudos';
import Calculadora from './pages/calculadoras';

function Rotas() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListConteudo" component={ListConteudo} />
        <Stack.Screen name="DetailConteudo" component={DetailConteudo} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

export default Rotas;