import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserProfileScreen = () => {
  const [fullName, setFullName] = useState('Fulano Deltrano');
  const [email, setEmail] = useState('Fulano@email.com');
  const [birthDate, setBirthDate] = useState('01/01/0001');
  const [phone, setPhone] = useState('(27) 99999-9999');

  return (
    <View style={styles.container}>


      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
      </View>

      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Fulano Deltrano"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Fulano@email.com"
        placeholderTextColor="#A9A9A9"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={birthDate}
        onChangeText={setBirthDate}
        placeholder="01/01/0001"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="(27) 99999-9999"
        placeholderTextColor="#A9A9A9"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Alterar Endereço</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#800000',
  },
  input: {
    backgroundColor: '#FFF0F0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#800000',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
