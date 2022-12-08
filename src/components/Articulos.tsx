import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParam } from './NavConfig';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

type Props = NativeStackScreenProps<RootStackParam, 'MisArticulos'>;
const Articulos = ({ navigation }: Props) => {
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
          centerComponent={{ text: 'Mis Articulos', style: styles.heading }}
        />
      </SafeAreaProvider>
      <Text>Articulos</Text>
    </View>
  )
}

export default Articulos

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