import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Charity() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Charity</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Content loading...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  header: { padding: 20, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff' },
  card: { backgroundColor: '#0a0a0a', margin: 16, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#00d9ff' },
  text: { color: '#ffffff' },
});
