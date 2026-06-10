import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0a0a0a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.title}>SKYCOIN4444</Text>
        <Text style={styles.subtitle}>One Platform. One Identity. Unlimited Opportunity.</Text>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>22,680</Text>
          <Text style={styles.statLabel}>Platform Features</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>1.0M+</Text>
          <Text style={styles.statLabel}>Community Users</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>Production</Text>
          <Text style={styles.statLabel}>Ready</Text>
        </View>
      </View>

      <View style={styles.modulesContainer}>
        <Text style={styles.modulesTitle}>Core Modules</Text>
        <ModuleCard title="HopeAI Engineer" description="AI-powered code generation and optimization" />
        <ModuleCard title="Sky School" description="AI learning paths and certifications" />
        <ModuleCard title="Arcade" description="Gaming with crypto rewards" />
        <ModuleCard title="Governance" description="DODGE/TRUMP voting system" />
        <ModuleCard title="Analytics" description="Real-time metrics and insights" />
        <ModuleCard title="Charity" description="Community giving and campaigns" />
        <ModuleCard title="Marketplace" description="AI recommendations and trading" />
      </View>

      <TouchableOpacity style={styles.cta}>
        <Text style={styles.ctaText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ModuleCard({ title, description }: { title: string; description: string }) {
  return (
    <View style={styles.moduleCard}>
      <Text style={styles.moduleTitle}>{title}</Text>
      <Text style={styles.moduleDescription}>{description}</Text>
    </View>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#00d9ff',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#00d9ff',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00d9ff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#999999',
  },
  modulesContainer: {
    padding: 16,
  },
  modulesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  moduleCard: {
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#00d9ff',
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#999999',
  },
  cta: {
    backgroundColor: '#00d9ff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});
