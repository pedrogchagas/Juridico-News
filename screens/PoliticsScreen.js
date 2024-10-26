import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const newsData = [
  {
    id: '1',
    title: 'Governo do RS fará repasse de R$ 500 mil para cada município em calamidade sem exigir plano de trabalho, diz Leite.',
    image: require('../assets/politica.png'),
  },
  {
    id: '2',
    title: 'Governo do RS fará repasse de R$ 500 mil para cada município em calamidade sem exigir plano de trabalho, diz Leite.',
    image: require('../assets/politica.png'),
  },
  {
    id: '3',
    title: 'Governo do RS fará repasse de R$ 500 mil para cada município em calamidade sem exigir plano de trabalho, diz Leite.',
    image: require('../assets/politica.png'),
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