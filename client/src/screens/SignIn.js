import {useNavigation} from '@react-navigation/core';
import React from 'react';
import Logo from '../assets/logo.svg';
import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {login} from '../services/auth';

const SignIn = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Logo width="100%" height="160" />
      <TextInput
        style={[styles.input, styles.email]}
        onChangeText={setUser}
        value={user}
        placeholder="Insira seu usuário"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Insira sua senha"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          login({email: 'manuelly@teste.com.br', senha: '123456'})
        }>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#F9E087',
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderRadius: 64,
    textDecorationColor: '#000000',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#82E6F4',
    padding: 12,
    marginVertical: 8,
    borderRadius: 64,
    width: '50%',
    alignSelf: 'center',
  },
  email: {
    marginTop: 64,
  },
});

export default SignIn;
