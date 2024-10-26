import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen1({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#800000" />
      </TouchableOpacity>
      <Text style={styles.title}>CADASTRE-SE</Text>
      
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="SENHA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="NOME COMPLETO"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="DATA DE NASCIMENTO"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CELULAR"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('RegisterScreen2')}
      >
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
      
      <View style={styles.paginationDots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
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
  input: {
    backgroundColor: '#FFF0F0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  continueButton: {
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