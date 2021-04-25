import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import Logo from '../assets/logo.svg';

import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const ListaProdutos = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const produtos = [
    'Artes e Artesanato',
    'Alimentação',
    'Vestuário',
    'Cosméticos',
    'Outros',
  ];
  const servicos = [
    'Técnicos',
    'Educacionais',
    'Limpeza',
    'Pet',
    'Marcenaria',
    'Pintura',
    'Corte e costura',
    'Beleza',
    'Reparos e construção',
    'Outros',
  ];

  const produtosItems = [
    {
      titulo: 'Pulseiras Personalizadas',
      preco: 'R$125, 00',
      descricao: 'Novas pulseiras',
      vendedor: 'Gabrielly',
      contato: '81231999999',
    },
    {
      titulo: 'Violão Novo',
      preco: 'R$125, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'José',
      contato: '81999291999',
    },
    {
      titulo: 'Produtos de Argila',
      preco: 'R$15, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'Amanda',
      contato: '8199999051',
    },
    {
      titulo: 'Violão Novo',
      preco: 'R$125, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'Gabrielly',
      contato: '81998599999',
    },
    {
      titulo: 'Violão Novo',
      preco: 'R$125, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'Gabi',
      contato: '81999234999',
    },
    {
      titulo: 'Violão Novo',
      preco: 'R$125, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'Jorge',
      contato: '81999999999',
    },
    {
      titulo: 'Violão Novo',
      preco: 'R$125, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'Ricardo',
      contato: '81999789999',
    },
    {
      titulo: 'Violão Novo',
      preco: 'R$125, 00',
      descricao: 'O violão é ótimo',
      vendedor: 'Márcia',
      contato: '81991928999',
    },
  ];
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
      <View style={styles.categorias}>
        <TouchableOpacity
          style={[styles.button, selected === 'produtos' && styles.active]}
          onPress={() => {
            setSelected('produtos');
          }}>
          <Text>Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selected === 'servicos' && styles.active]}
          onPress={() => {
            setSelected('servicos');
          }}>
          <Text>Serviços</Text>
        </TouchableOpacity>
      </View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        {selected === 'servicos' &&
          servicos.map(servico => (
            <Picker.Item label={servico} value={'servico-' + servico} />
          ))}
        {selected === 'produtos' &&
          produtos.map(produto => (
            <Picker.Item label={produto} value={'produto-' + produto} />
          ))}
      </Picker>
      <FlatList
        data={arte}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Preço: {item.preco}</Text>
            <Text>Vendedor: {item.vendedor}</Text>
            <Text>Telefone: {item.contato}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 32,
    paddingTop: 32,
    backgroundColor: '#F9E087',
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    minWidth: '45%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
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
  active: {
    backgroundColor: '#9C9C9C',
  },
  picker: {
    backgroundColor: 'white',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default ListaProdutos;
