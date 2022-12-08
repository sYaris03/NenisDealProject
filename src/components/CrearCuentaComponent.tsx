import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParam } from './NavConfig'
import { IUser } from '../models/IUser';

import { createUserWithEmailAndPassword, getAuth, } from 'firebase/auth';
import firebaseApp from "../../firebase"
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const auth= getAuth(firebaseApp)
const firestore= getFirestore(firebaseApp)

type Props = NativeStackScreenProps<RootStackParam, 'CrearCuenta'>;

const CrearCuentaComponent = ({ navigation }: Props) => {
  const [contrasena, setContrasena] = useState('')
  const [correo, setCorreo] = useState('')

  const [user, setUser] = useState<IUser>({
    Nombre: "",
    ApePaterno: "",
    ApeMaterno: "",
    Direccion: "",
    Correo: "",
    Contrasena: "",
  })

  async function BuscarOAgregar(){
      addDoc(collection(firestore,'User'), user)
  }

  const handlerCreateCount = () => {
    createUserWithEmailAndPassword(auth, correo, contrasena )
      .then((userCredential) => {
        console.log('Se creo cuenta')
        const user = userCredential.user;
        console.log(user)
        //BuscarOAgregar();
      })
      .catch((error) => {
        console.log('Error')
      });
  }

  return (
    <ScrollView>
      <View style={styles.contenerdor}>
        <View>
          <Text style={styles.Texto}>Nombre</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => setUser({...user, Nombre:(text)})}
            placeholder="Nombre"></TextInput> 
        </View>
        <View>
          <Text style={styles.Texto}>Apellido Paterno</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => setUser({...user, ApePaterno:(text)})}
            placeholder="Apellido Paterno"></TextInput>
        </View>
        <View>
          <Text style={styles.Texto}>Apellido Materno</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => setUser({...user, ApeMaterno:(text)})}
            placeholder="Apellido Materno"></TextInput>
        </View>
        <View>
          <Text style={styles.Texto}>Dirección</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => setUser({...user, Direccion:(text)})}
            placeholder="Calle ..."></TextInput>
        </View>
        <View>
          <Text style={styles.Texto}>Correo electronico</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => {
              setCorreo(text)
              setUser({...user, Correo:(text)})
            }}
            //onChangeText={(text) => setCorreo(text)}
            placeholder="correo123@outlook.es"></TextInput>
        </View>
        <View>
          <Text style={styles.Texto}>Contraseña</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => { 
              setContrasena(text)
              setUser({...user, Contrasena:(text)})
            }}
            //onChangeText={(text) => setContrasena(text)}
            placeholder="Contraseña"
            secureTextEntry={true}></TextInput>
        </View>
        {/* <View>
          <Text style={styles.Texto}>Confirmar contraseña</Text>
          <TextInput style={styles.Input}
            onChangeText={(text) => setConfiContrasena(text)}
            placeholder="Confirmar Contraseña"
            secureTextEntry={true}></TextInput>
        </View> */}
        <View style={[styles.Boton, { justifyContent: 'center', alignItems: 'center', }]}>

          <Pressable onPress={BuscarOAgregar}>
            <Text>Crear cuenta</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default CrearCuentaComponent

const styles = StyleSheet.create({
  Boton: {
    marginTop: 10,
    borderRadius: 10,
    width: 200,
    height: 40,
    color: "white",
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#1A8BB0"
  },
  contenerdor: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  Input: {

    width: 330,
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 10,
  },
  Texto: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: 'while',
  },
  Camara: {
    width: 80,
    height: 80,
    //marginBottom: 5, 
    //marginTop:15
  },
  Circulo: {
    backgroundColor: '#454545',
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
})