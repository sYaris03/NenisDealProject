import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from './NavConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import firebaseApp from '../../firebase';
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(firebaseApp)

type Props = NativeStackScreenProps<RootStackParam, 'Perfil'>;
const Perfil = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider >
        <HeaderRNE
          leftComponent={
            <View style={styles.headerRight}>

              <Pressable onPress={() => {
                navigation.navigate('Menu')
              }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2976/2976215.png' }} style={styles.Imagen} ></Image>
              </Pressable>
            </View>
          }
          centerComponent={{ text: 'My Perfil', style: styles.heading }}
          rightComponent={
            <View style={styles.headerRight}>

              <Pressable onPress={() => {
                signOut(auth)
                navigation.goBack();
              }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2997/2997925.png' }} style={styles.Imagen} ></Image>
              </Pressable>
            </View>
          }
        />
      </SafeAreaProvider>
      <Text>Perfil</Text>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
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
})