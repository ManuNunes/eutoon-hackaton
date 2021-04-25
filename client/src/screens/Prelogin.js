import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../assets/logo.svg';

import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Prelogin = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToke = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // validação
      }
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Logo width="100%" height="160" />
      <TouchableOpacity
        style={[styles.button, styles.signin]}
        onPress={() => navigation.navigate('SignIn')}>
        <Text>Entre com sua conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.signup]}
        onPress={() => navigation.navigate('SignUp')}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 64,
    backgroundColor: '#F9E087',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 64,
  },
  signin: {
    marginTop: 32,
    marginBottom: 8,
  },
  signup: {
    marginVertical: 8,
    backgroundColor: '#82E6F4',
  },
  logo: {
    marginBottom: 50,
  },
});

export default Prelogin;
