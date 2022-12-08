import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from './NavConfig';

import firebaseApp from '../../firebase';
import { getAuth, signOut } from 'firebase/auth'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import Perfil from './Perfil';


const auth = getAuth(firebaseApp)

type Props = NativeStackScreenProps<RootStackParam, 'Menu'>;
const Menu = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <SafeAreaProvider >
        <HeaderRNE
          leftComponent={
            <View style={styles.headerRight}>

              <Pressable onPress={() => {
                navigation.goBack();
              }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9126/9126121.png' }} style={styles.Imagen} ></Image>
              </Pressable>
            </View>
          }
          centerComponent={{ text: 'Menu', style: styles.heading }}
          rightComponent={
            <View style={styles.headerRight}>

              <Pressable onPress={() => {
                signOut(auth)
                navigation.navigate('InicioSesion');
              }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2997/2997925.png' }} style={styles.Imagen} ></Image>
              </Pressable>
            </View>
          }
        />
      </SafeAreaProvider>
      <View style={{ flex: 7, alignItems: 'center' }}>
        <View style={[styles.Boton, { justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
          <Pressable onPress={() => {
            navigation.navigate('Perfil')
          }}>
            <Text style={styles.Texto}>Mi Perfil</Text>
            {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/570/570170.png' }} style={styles.Icon} ></Image> */}
          </Pressable>
        </View>
        <View style={[styles.Boton, { justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
          <Pressable onPress={() => {
            navigation.navigate('Perfil')
          }}>
            <Text style={styles.Texto}>Mis Articulos</Text>
            {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/570/570170.png' }} style={styles.Icon} ></Image> */}
          </Pressable>
        </View>
        <View style={[styles.Boton, { justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
          <Pressable onPress={() => {
            navigation.navigate('Perfil')
          }}>
            <Text style={styles.Texto}>Comprar</Text>
            {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/570/570170.png' }} style={styles.Icon} ></Image> */}
          </Pressable>
        </View>
        <View style={[styles.Boton, { justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
          <Pressable onPress={() => {
            navigation.navigate('Perfil')
          }}>
            <Text style={styles.Texto}>Tratos agendados</Text>
            {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/570/570170.png' }} style={styles.Icon} ></Image> */}
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  Boton: {
    marginTop: '8%',
    borderRadius: 10,
    width: 300,
    height: 80,
    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1A8BB0"
  },
  SignOut: {
    marginTop: '8%',
    borderRadius: 10,
    width: 300,
    height: 80,
    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1A8BB0"
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  Imagen: {
    width: 20,
    height: 20,
    marginEnd: 10,
  },
  Texto: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    color: 'while',
  },
})