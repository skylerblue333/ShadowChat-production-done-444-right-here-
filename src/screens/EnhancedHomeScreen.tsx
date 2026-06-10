import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { ALL_MODULES, getTotalFeatureCount, getEnabledFeatureCount } from '../modules';

interface ModuleCardProps {
  module: any;
  onPress: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onPress }) => {
  return (
    <TouchableOpacity style={[styles.moduleCard, { borderLeftColor: module.color }]} onPress={onPress}>
      <View style={styles.moduleCardHeader}>
        <Text style={styles.moduleIcon}>{module.icon}</Text>
        <View style={styles.moduleInfo}>
          <Text style={styles.moduleName}>{module.name}</Text>
          <Text style={styles.moduleVersion}>v{module.version}</Text>
        </View>
      </View>
      <Text style={styles.moduleDescription}>{module.description}</Text>
      <View style={styles.featureList}>
        {module.features.slice(0, 3).map((feature: string, index: number) => (
          <Text key={index} style={styles.featureTag}>
            {feature}
          </Text>
        ))}
        {module.features.length > 3 && (
          <Text style={styles.featureTag}>+{module.features.length - 3}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function EnhancedHomeScreen({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalModules: 0,
    totalFeatures: 0,
    enabledFeatures: 0,
    versions: 70,
  });

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setStats({
        totalModules: ALL_MODULES.length,
        totalFeatures: getTotalFeatureCount(),
        enabledFeatures: getEnabledFeatureCount(),
        versions: 70,
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleModulePress = (moduleName: string) => {
    // Navigate to module screen
    console.log(`Navigating to ${moduleName}`);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingTitle}>SKYCOIN4444</Text>
          <ActivityIndicator size="large" color="#00d9ff" style={{ marginTop: 20 }} />
          <Text style={styles.loadingText}>Loading All 70 Versions...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SKYCOIN4444</Text>
          <Text style={styles.subtitle}>Ultimate Enterprise Platform</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalModules}</Text>
            <Text style={styles.statLabel}>Core Modules</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalFeatures}</Text>
            <Text style={styles.statLabel}>Total Features</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.versions}</Text>
            <Text style={styles.statLabel}>Versions</Text>
          </View>
        </View>

        {/* Modules Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7 Core Modules</Text>
          <FlatList
            data={ALL_MODULES}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <ModuleCard
                module={item}
                onPress={() => handleModulePress(item.name)}
              />
            )}
          />
        </View>

        {/* Features Highlight */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <View style={styles.featureHighlights}>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>🚀</Text>
              <Text style={styles.highlightText}>AI-Powered Engineering</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>📚</Text>
              <Text style={styles.highlightText}>Comprehensive Learning</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>🎮</Text>
              <Text style={styles.highlightText}>Gaming & Tournaments</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>🏛️</Text>
              <Text style={styles.highlightText}>Decentralized Governance</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>📊</Text>
              <Text style={styles.highlightText}>Advanced Analytics</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>❤️</Text>
              <Text style={styles.highlightText}>Charitable Impact</Text>
            </View>
            <View style={styles.highlightItem}>
              <Text style={styles.highlightIcon}>🛍️</Text>
              <Text style={styles.highlightText}>Marketplace Trading</Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ctaButton, styles.ctaButtonSecondary]}>
            <Text style={[styles.ctaButtonText, styles.ctaButtonSecondaryText]}>Learn More</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Developed with precision engineering</Text>
          <Text style={styles.footerVersion}>Mobile v1.0.0 • All 70 Versions Enabled</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  scrollView: { flex: 1 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingTitle: { fontSize: 32, fontWeight: 'bold', color: '#00d9ff', marginBottom: 10 },
  loadingText: { fontSize: 14, color: '#ffffff', marginTop: 20 },

  header: { paddingHorizontal: 20, paddingVertical: 30, alignItems: 'center' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#00d9ff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#888', marginBottom: 20 },

  statsContainer: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 30, gap: 10 },
  statCard: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#00d9ff',
    alignItems: 'center',
  },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#00d9ff', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#888' },

  section: { paddingHorizontal: 20, marginBottom: 30 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#ffffff', marginBottom: 16 },

  moduleCard: {
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  moduleCardHeader: { flexDirection: 'row', marginBottom: 12 },
  moduleIcon: { fontSize: 32, marginRight: 12 },
  moduleInfo: { flex: 1, justifyContent: 'center' },
  moduleName: { fontSize: 16, fontWeight: 'bold', color: '#ffffff' },
  moduleVersion: { fontSize: 12, color: '#888' },
  moduleDescription: { fontSize: 13, color: '#aaa', marginBottom: 12, lineHeight: 18 },
  featureList: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  featureTag: {
    backgroundColor: '#1a1a1a',
    color: '#00d9ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 11,
    fontWeight: '500',
  },

  featureHighlights: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  highlightItem: {
    width: '48%',
    backgroundColor: '#0a0a0a',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a1a1a',
  },
  highlightIcon: { fontSize: 32, marginBottom: 8 },
  highlightText: { fontSize: 12, color: '#ffffff', textAlign: 'center', fontWeight: '500' },

  ctaSection: { paddingHorizontal: 20, marginBottom: 30, gap: 12 },
  ctaButton: {
    backgroundColor: '#00d9ff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaButtonText: { fontSize: 16, fontWeight: 'bold', color: '#000000' },
  ctaButtonSecondary: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#00d9ff' },
  ctaButtonSecondaryText: { color: '#00d9ff' },

  footer: { paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#1a1a1a' },
  footerText: { fontSize: 12, color: '#888', marginBottom: 4 },
  footerVersion: { fontSize: 11, color: '#666' },
});
