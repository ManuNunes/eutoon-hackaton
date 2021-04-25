import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../assets/logo.svg';
import {LoadingIcon} from './styles';
import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TypeSelection');
    }, 250);
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // validação
      }
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Logo width="100%" height="160" />
      <LoadingIcon size="large" color="white" />
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

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 16,
    marginVertical: 8,
    borderRadius: 64,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
