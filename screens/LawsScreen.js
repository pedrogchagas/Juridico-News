import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const lawsData = [
  {
    id: '1',
    norma: 'Lei Complementar nº 207 de 16/05/2024',
    materia: 'PLP 233/2023, Câmara dos Deputados',
    ementa: 'Dispõe sobre o Seguro Obrigatório para Proteção de Vítimas de Acidentes de Trânsito (SPVAT).',
    prazoSancao: '17/05/2024',
    recebimentoPresidencia: '08/05/2024',
  },
  {
    id: '2',
    norma: 'Lei Complementar nº 207 de 16/05/2024',
    materia: 'PLP 233/2023, Câmara dos Deputados',
    ementa: 'Dispõe sobre o Seguro Obrigatório para Proteção de Vítimas de Acidentes de Trânsito (SPVAT).',
    prazoSancao: '17/05/2024',
    recebimentoPresidencia: '08/05/2024',
  },
  {
    id: '3',
    norma: 'Lei Complementar nº 207 de 16/05/2024',
    materia: 'PLP 233/2023, Câmara dos Deputados',
    ementa: 'Dispõe sobre o Seguro Obrigatório para Proteção de Vítimas de Acidentes de Trânsito (SPVAT).',
    prazoSancao: '17/05/2024',
    recebimentoPresidencia: '08/05/2024',
  },
];

export default function LawsScreen() {
  const renderLawItem = ({ item }) => (
    <View style={styles.lawItem}>
      <Text style={styles.lawText}><Text style={styles.boldText}>Norma:</Text> {item.norma}</Text>
      <Text style={styles.lawText}><Text style={styles.boldText}>Matéria:</Text> {item.materia}</Text>
      <Text style={styles.lawText}><Text style={styles.boldText}>Ementa:</Text> {item.ementa}</Text>
      <Text style={styles.lawText}><Text style={styles.boldText}>Prazo para sanção:</Text> {item.prazoSancao}</Text>
      <Text style={styles.lawText}><Text style={styles.boldText}>Recebimento pela Presidência:</Text> {item.recebimentoPresidencia}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Últimas Leis Publicadas</Text>
      <FlatList
        data={lawsData}
        renderItem={renderLawItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  lawItem: {
    backgroundColor: '#FFF0F0',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  lawText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
});