import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Portfolio</Text>
        <Text style={styles.value}>$106,500</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Holdings</Text>
        <Text style={styles.value}>45 Assets</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#0a0a0a',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00d9ff',
  },
  cardTitle: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d9ff',
  },
});
