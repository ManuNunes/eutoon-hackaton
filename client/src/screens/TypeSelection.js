import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../assets/logo.svg';
import Comprar from '../assets/comprar.svg';
import Vender from '../assets/vender.svg';
import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const TypeSelection = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Quem é você?</Text>
      <View style={[styles.whitebg, styles.icon]}>
        <Comprar width="100%" height="100" />
      </View>

      <TouchableOpacity
        style={[styles.button, styles.comprar]}
        onPress={() => navigation.navigate('ListaProdutos')}>
        <Text>Cliente</Text>
      </TouchableOpacity>

      <View style={[styles.bluebg, styles.icon]}>
        <Vender width="100%" height="80" />
      </View>

      <TouchableOpacity
        style={[styles.button, styles.signup]}
        onPress={() => navigation.navigate('Prelogin')}>
        <Text>Trabalhador Informal</Text>
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
  text: {
    textAlign: 'center',
    marginVertical: 32,
    backgroundColor: '#EBC642',
    width: '100%',
    padding: 8,
    borderRadius: 64,
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 64,
    marginTop: 8,
    marginBottom: 64,
    width: '50%',
    padding: 8,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  comprar: {},
  signup: {
    marginVertical: 8,
    backgroundColor: '#82E6F4',
  },
  logo: {
    marginBottom: 50,
  },
  icon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  whitebg: {
    backgroundColor: 'white',
  },
  bluebg: {
    backgroundColor: '#82E6F4',
  },
});

export default TypeSelection;
