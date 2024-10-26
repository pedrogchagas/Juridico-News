import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const newsData = [
  {
    id: '1',
    title: 'Ataque israelense a campo de refugiados de Gaza deixa 36 mortos, incluindo crianças',
    image: require('../assets/noticia.png'),
  },
  {
    id: '2',
    title: 'Ataque israelense a campo de refugiados de Gaza deixa 36 mortos, incluindo crianças',
    image: require('../assets/noticia.png'),
  },
  {
    id: '3',
    title: 'Ataque israelense a campo de refugiados de Gaza deixa 36 mortos, incluindo crianças',
    image: require('../assets/noticia.png'),
  },
];

export default function NewsScreen() {
  const renderNewsItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Image source={item.image} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  newsItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});