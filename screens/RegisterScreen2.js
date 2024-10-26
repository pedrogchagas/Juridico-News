import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen2({ navigation }) {
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#800000" />
      </TouchableOpacity>
      <Text style={styles.title}>CADASTRE-SE</Text>
      
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.cepInput]}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.numberInput]}
          placeholder="NÚMERO"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="ENDEREÇO"
        value={address}
        onChangeText={setAddress}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.cityInput]}
          placeholder="CIDADE"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={[styles.input, styles.stateInput]}
          placeholder="ESTADO"
          value={state}
          onChangeText={setState}
        />
      </View>
      
      <TouchableOpacity
        style={styles.finalizeButton}
        onPress={() => {
          navigation.navigate('Login', { registrationComplete: true });
        }}
      >
        <Text style={styles.buttonText}>FINALIZAR</Text>
      </TouchableOpacity>
      
      <View style={styles.paginationDots}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    marginTop: 60,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#FFF0F0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  cepInput: {
    flex: 2,
    marginRight: 10,
  },
  numberInput: {
    flex: 1,
  },
  cityInput: {
    flex: 2,
    marginRight: 10,
  },
  stateInput: {
    flex: 1,
  },
  finalizeButton: {
    backgroundColor: '#800000',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#800000',
  },
});