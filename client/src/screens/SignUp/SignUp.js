import React from 'react';
import {Container} from './styles';
import Logo from '../../assets/logo.svg';
import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useState} from 'react';

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Logo width="100%" height="160" />
      <TextInput
        style={[styles.input, styles.nome]}
        onChangeText={setNome}
        value={nome}
        placeholder="Insira seu nome"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.input]}
        onChangeText={setEmail}
        value={email}
        placeholder="Insira seu email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.input]}
        onChangeText={setCEP}
        value={cep}
        placeholder="Insira seu CEP"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.input]}
        onChangeText={setCidade}
        value={cidade}
        placeholder="Insira sua cidade"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.input]}
        onChangeText={setBairro}
        value={bairro}
        placeholder="Insira seu bairro"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.input]}
        onChangeText={setTelefone}
        value={telefone}
        placeholder="Insira seu telefone"
        placeholderTextColor="gray"
      />
      <TextInput
        style={[styles.input]}
        onChangeText={setSenha}
        value={senha}
        placeholder="Insira sua senha"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        <Text>Cadastrar</Text>
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
    borderWidth: 1,
  },
  nome: {
    marginTop: 64,
  },
});

export default SignUp;
