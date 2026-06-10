import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TradingScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trading</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>BTC/USD</Text>
        <Text style={styles.price}>$45,230.50</Text>
        <Text style={styles.change}>+2.5%</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>SKY444/USD</Text>
        <Text style={styles.price}>$12.75</Text>
        <Text style={styles.change}>+5.2%</Text>
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
  label: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  change: {
    fontSize: 14,
    color: '#00ff00',
  },
});
