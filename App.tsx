import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AIEngineerScreen from './src/screens/AIEngineerScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import ArcadeScreen from './src/screens/ArcadeScreen';
import CharityScreen from './src/screens/CharityScreen';
import CryptoScreen from './src/screens/CryptoScreen';
import MarketplaceScreen from './src/screens/MarketplaceScreen';
import TradingScreen from './src/screens/TradingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import AdminPanelScreen from './src/screens/AdminPanelScreen';
import CodeQualityDashboardScreen from './src/screens/CodeQualityDashboardScreen';
import DayTradeRoomScreen from './src/screens/DayTradeRoomScreen';
import DeveloperAreaScreen from './src/screens/DeveloperAreaScreen';
import EngineerScreen from './src/screens/EngineerScreen';
import EscrowShopScreen from './src/screens/EscrowShopScreen';
import GovernanceScreen from './src/screens/GovernanceScreen';
import LeaderboardsScreen from './src/screens/LeaderboardsScreen';
import NotificationsHubScreen from './src/screens/NotificationsHubScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SchoolScreen from './src/screens/SchoolScreen';
import SearchScreen from './src/screens/SearchScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SocialMediaScreen from './src/screens/SocialMediaScreen';
import VideoAreaScreen from './src/screens/VideoAreaScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [error, setError] = useState(null);

  const screens = {
    Home: HomeScreen,
    Dashboard: DashboardScreen,
    Engineer: AIEngineerScreen,
    Analytics: AnalyticsScreen,
    Arcade: ArcadeScreen,
    Charity: CharityScreen,
    Crypto: CryptoScreen,
    Marketplace: MarketplaceScreen,
    Trading: TradingScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Admin: AdminPanelScreen,
    Quality: CodeQualityDashboardScreen,
    DayTrade: DayTradeRoomScreen,
    Developer: DeveloperAreaScreen,
    Code: EngineerScreen,
    Escrow: EscrowShopScreen,
    Governance: GovernanceScreen,
    Leaderboards: LeaderboardsScreen,
    Notifications: NotificationsHubScreen,
    Onboarding: OnboardingScreen,
    School: SchoolScreen,
    Search: SearchScreen,
    SignUp: SignUpScreen,
    Social: SocialMediaScreen,
    Video: VideoAreaScreen,
  };

  const CurrentScreen = screens[currentScreen];
  
  if (!CurrentScreen) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>SKYCOIN4444</Text>
          <Text style={styles.version}>All 70 Versions</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Screen Not Found</Text>
          <Text style={styles.errorText}>The requested screen could not be loaded.</Text>
          <TouchableOpacity style={styles.errorButton} onPress={() => setCurrentScreen('Home')}>
            <Text style={styles.errorButtonText}>Return to Home</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal style={styles.navBar}>
          {Object.keys(screens).map((screen) => (
            <TouchableOpacity
              key={screen}
              style={[styles.navButton, currentScreen === screen && styles.navButtonActive]}
              onPress={() => setCurrentScreen(screen)}
            >
              <Text style={styles.navText}>{screen}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>SKYCOIN4444</Text>
        <Text style={styles.version}>All 70 Versions</Text>
      </View>
      <CurrentScreen />
      <ScrollView horizontal style={styles.navBar}>
        {Object.keys(screens).map((screen) => (
          <TouchableOpacity
            key={screen}
            style={[styles.navButton, currentScreen === screen && styles.navButtonActive]}
            onPress={() => setCurrentScreen(screen)}
          >
            <Text style={styles.navText}>{screen}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  header: { padding: 16, backgroundColor: '#0a0a0a', borderBottomWidth: 1, borderBottomColor: '#00d9ff' },
  appTitle: { fontSize: 24, fontWeight: 'bold', color: '#00d9ff' },
  version: { fontSize: 12, color: '#666' },
  navBar: { height: 50, backgroundColor: '#0a0a0a', borderTopWidth: 1, borderTopColor: '#00d9ff' },
  navButton: { paddingHorizontal: 12, paddingVertical: 12, marginHorizontal: 4, borderRadius: 4 },
  navButtonActive: { backgroundColor: '#00d9ff' },
  navText: { color: '#ffffff', fontSize: 12, fontWeight: 'bold' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorTitle: { fontSize: 20, fontWeight: 'bold', color: '#ff6b6b', marginBottom: 10 },
  errorText: { fontSize: 14, color: '#ffffff', marginBottom: 20, textAlign: 'center' },
  errorButton: { backgroundColor: '#00d9ff', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  errorButtonText: { color: '#000000', fontWeight: 'bold' },
});
