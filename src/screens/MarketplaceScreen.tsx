import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MarketplaceScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Marketplace</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.itemTitle}>AI Code Packages</Text>
        <Text style={styles.price}>Starting at $9.99</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.itemTitle}>Trading Signals</Text>
        <Text style={styles.price}>$19.99/month</Text>
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
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: '#00d9ff',
  },
});
