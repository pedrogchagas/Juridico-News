import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>
      <View style={styles.content}>
        <Image
          source={require('../assets/white-scale.png')}
          style={styles.image}
        />
        <Text style={styles.appName}>Jurídico News</Text>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});