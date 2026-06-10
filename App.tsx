import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import MarketplaceScreen from './src/screens/MarketplaceScreen';
import TradingScreen from './src/screens/TradingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#000000' },
    }}
  >
    <Stack.Screen name="HomeTab" component={HomeScreen} />
  </Stack.Navigator>
);

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#000000' },
    }}
  >
    <Stack.Screen name="DashboardTab" component={DashboardScreen} />
  </Stack.Navigator>
);

const MarketplaceStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#000000' },
    }}
  >
    <Stack.Screen name="MarketplaceTab" component={MarketplaceScreen} />
  </Stack.Navigator>
);

const TradingStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#000000' },
    }}
  >
    <Stack.Screen name="TradingTab" component={TradingScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#000000' },
    }}
  >
    <Stack.Screen name="ProfileTab" component={ProfileScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#0a0a0a',
        borderTopColor: '#00d9ff',
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: '#00d9ff',
      tabBarInactiveTintColor: '#666666',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="Dashboard"
      component={DashboardStack}
      options={{
        tabBarLabel: 'Dashboard',
      }}
    />
    <Tab.Screen
      name="Marketplace"
      component={MarketplaceStack}
      options={{
        tabBarLabel: 'Market',
      }}
    />
    <Tab.Screen
      name="Trading"
      component={TradingStack}
      options={{
        tabBarLabel: 'Trade',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    checkAuth();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ExpoStatusBar barStyle="light-content" />
      <NavigationContainer>
        {isLoggedIn ? <TabNavigator /> : <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#000000' },
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
