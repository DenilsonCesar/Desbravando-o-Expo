import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App(props) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text style={ styles.bemvindo }>Bem-Vindo!</Text>
      <TextInput placeholder="Digite seu email" style={ styles.input }/>
      <TextInput placeholder="Digite sua senha" style={ styles.input }/>
      <TouchableOpacity style={ styles.button }
        onPress={()=>props.navigation.navigate('Dashboard')}>
        <Text style={ styles.textButton }>ENTRAR</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={()=>props.navigation.navigate('Register')}>
          <Text style={ styles.register }>Ainda não tem uma conta? crie.</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bemvindo: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff',
    marginBottom: 20
  },
  input: {
    width: '90%',
    height: 46,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 4,
    fontSize: 16,
    paddingLeft: 10
  },
  button: {
    backgroundColor: 'blue',
    width: '90%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
      marginTop: 20,
      color: '#fff',
      fontWeight: 'bold'
  }
});
