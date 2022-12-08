import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InicioSesionComponent from './src/components/InicioSesion'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParam } from './src/components/NavConfig';
import CrearCuentaComponent from './src/components/CrearCuenta';
import PrincipalComponent from './src/components/Principal';
import MenuComponent from './src/components/Menu';
import PerfilComponent from './src/components/Perfil';

const Stack = createNativeStackNavigator<RootStackParam>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InicioSesion'>

        <Stack.Screen name='InicioSesion' component={InicioSesionComponent}
          options={(nav) => ({
            headerShown: false})}></Stack.Screen>
          <Stack.Screen name='CrearCuenta' component={CrearCuentaComponent} options={(nav) => ({headerShown: false})}></Stack.Screen>
         <Stack.Screen name='Principal' component={PrincipalComponent} options={(nav) => ({headerShown: false})}></Stack.Screen>
         <Stack.Screen name='Menu' component={MenuComponent} options={(nav) => ({headerShown: false})}></Stack.Screen>
         <Stack.Screen name='Perfil' component={PerfilComponent} options={(nav) => ({headerShown: false})}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})