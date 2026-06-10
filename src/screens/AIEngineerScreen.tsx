import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function AIEngineerScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HopeAI Engineer</Text>
        <Text style={styles.subtitle}>AI-Powered Code Generation</Text>
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Describe your code..." placeholderTextColor="#666" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Generate Code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Generated Code:</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>// Your AI-generated code appears here</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  header: { padding: 20, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#00d9ff' },
  card: { backgroundColor: '#0a0a0a', margin: 16, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#00d9ff' },
  input: { backgroundColor: '#1a1a1a', color: '#ffffff', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#00d9ff' },
  button: { backgroundColor: '#00d9ff', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#000000', fontWeight: 'bold' },
  label: { color: '#ffffff', marginBottom: 8, fontWeight: 'bold' },
  codeBlock: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#666' },
  code: { color: '#00ff00', fontFamily: 'monospace', fontSize: 12 },
});
