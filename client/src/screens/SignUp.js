import React from 'react';
import {Container} from './SignUp/styles';
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
import {useState} from 'react';
import {criarUsuario} from '../services/requests';

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rua, setRua] = useState('');
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
        onChangeText={setSenha}
        value={senha}
        placeholder="Insira sua senha"
        placeholderTextColor="gray"
      />
      <View style={styles.row}>
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
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input]}
          onChangeText={setBairro}
          value={bairro}
          placeholder="Insira seu bairro"
          placeholderTextColor="gray"
        />
        <TextInput
          style={[styles.input]}
          onChangeText={setRua}
          value={rua}
          placeholder="Insira sua rua"
          placeholderTextColor="gray"
        />
      </View>
      <TextInput
        style={[styles.input]}
        onChangeText={setTelefone}
        value={telefone}
        placeholder="Insira seu telefone"
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          criarUsuario({
            nome: nome,
            rua: rua,
            email: email,
            password: senha,
            phone: telefone,
            cidade: cidade,
            CEP: cep,
          })
        }>
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
    minWidth: '45%',
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default SignUp;
