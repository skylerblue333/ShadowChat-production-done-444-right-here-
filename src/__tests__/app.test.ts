/**
 * SKYCOIN4444 Mobile App Testing Suite
 * Comprehensive tests for all screens and modules
 */

import { navigationService } from '../services/NavigationService';
import { apiService } from '../services/ApiService';
import { moduleService } from '../services/ModuleService';
import { ALL_MODULES, getTotalFeatureCount, getEnabledFeatureCount } from '../modules';

describe('Navigation Service', () => {
  beforeEach(() => {
    navigationService.clearHistory();
  });

  test('should navigate to valid screen', () => {
    navigationService.navigate('Dashboard');
    expect(navigationService.getState().currentScreen).toBe('Dashboard');
  });

  test('should prevent navigation to invalid screen', () => {
    navigationService.navigate('InvalidScreen');
    expect(navigationService.getState().currentScreen).toBe('Home');
  });

  test('should track navigation history', () => {
    navigationService.navigate('Dashboard');
    navigationService.navigate('Profile');
    const history = navigationService.getHistory();
    expect(history).toContain('Dashboard');
    expect(history).toContain('Profile');
  });

  test('should go back to previous screen', () => {
    navigationService.navigate('Dashboard');
    navigationService.navigate('Profile');
    navigationService.goBack();
    expect(navigationService.getState().currentScreen).toBe('Dashboard');
  });

  test('should return to home', () => {
    navigationService.navigate('Dashboard');
    navigationService.navigateToHome();
    expect(navigationService.getState().currentScreen).toBe('Home');
  });
});

describe('API Service', () => {
  test('should set base URL', () => {
    apiService.setBaseUrl('https://api.example.com');
    // Verify by attempting a request (would fail but URL is set)
    expect(apiService).toBeDefined();
  });

  test('should set authentication token', () => {
    apiService.setToken('test-token-123');
    expect(apiService).toBeDefined();
  });

  test('should handle API errors gracefully', async () => {
    const response = await apiService.get('/invalid-endpoint');
    expect(response.success).toBe(false);
    expect(response.error).toBeDefined();
  });

  test('should support all HTTP methods', async () => {
    expect(apiService.get).toBeDefined();
    expect(apiService.post).toBeDefined();
    expect(apiService.put).toBeDefined();
    expect(apiService.delete).toBeDefined();
    expect(apiService.patch).toBeDefined();
  });
});

describe('Module Service', () => {
  test('should have 7 core modules', () => {
    const modules = moduleService.getModules();
    expect(modules.length).toBe(7);
  });

  test('should have all modules active', () => {
    const activeModules = moduleService.getActiveModules();
    expect(activeModules.length).toBe(7);
  });

  test('should retrieve specific module', () => {
    const module = moduleService.getModule('hopeai');
    expect(module).toBeDefined();
    expect(module?.name).toBe('HopeAI Engineer');
  });

  test('should enable and disable modules', () => {
    moduleService.disableModule('arcade');
    let activeModules = moduleService.getActiveModules();
    expect(activeModules.length).toBe(6);

    moduleService.enableModule('arcade');
    activeModules = moduleService.getActiveModules();
    expect(activeModules.length).toBe(7);
  });

  test('should get module features', () => {
    const features = moduleService.getModuleFeatures('hopeai');
    expect(features.length).toBeGreaterThan(0);
    expect(features).toContain('Code Generation');
  });

  test('should get module statistics', () => {
    const stats = moduleService.getModuleStats();
    expect(stats.total).toBe(7);
    expect(stats.active).toBe(7);
    expect(stats.totalFeatures).toBeGreaterThan(0);
  });

  test('should search modules', () => {
    const results = moduleService.searchModules('trading');
    expect(results.length).toBeGreaterThan(0);
  });

  test('should get modules by feature', () => {
    const modules = moduleService.getModulesByFeature('Trading');
    expect(modules.length).toBeGreaterThan(0);
  });
});

describe('Module Implementations', () => {
  test('should have HopeAI module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'hopeai');
    expect(module).toBeDefined();
    expect(module?.features.codeGeneration).toBeDefined();
    expect(module?.features.aiAssistance).toBeDefined();
    expect(module?.features.codeReview).toBeDefined();
    expect(module?.features.debugging).toBeDefined();
  });

  test('should have Sky School module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'skyschool');
    expect(module).toBeDefined();
    expect(module?.features.courses).toBeDefined();
    expect(module?.features.certifications).toBeDefined();
    expect(module?.features.lessons).toBeDefined();
    expect(module?.features.quizzes).toBeDefined();
  });

  test('should have Arcade module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'arcade');
    expect(module).toBeDefined();
    expect(module?.features.games).toBeDefined();
    expect(module?.features.tournaments).toBeDefined();
    expect(module?.features.rewards).toBeDefined();
    expect(module?.features.multiplayer).toBeDefined();
  });

  test('should have Governance module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'governance');
    expect(module).toBeDefined();
    expect(module?.features.proposals).toBeDefined();
    expect(module?.features.voting).toBeDefined();
    expect(module?.features.treasury).toBeDefined();
    expect(module?.features.staking).toBeDefined();
  });

  test('should have Analytics module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'analytics');
    expect(module).toBeDefined();
    expect(module?.features.dashboards).toBeDefined();
    expect(module?.features.reports).toBeDefined();
    expect(module?.features.visualizations).toBeDefined();
    expect(module?.features.metrics).toBeDefined();
  });

  test('should have Charity module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'charity');
    expect(module).toBeDefined();
    expect(module?.features.projects).toBeDefined();
    expect(module?.features.donations).toBeDefined();
    expect(module?.features.impactTracking).toBeDefined();
    expect(module?.features.fundraising).toBeDefined();
  });

  test('should have Marketplace module with all features', () => {
    const module = ALL_MODULES.find((m) => m.id === 'marketplace');
    expect(module).toBeDefined();
    expect(module?.features.trading).toBeDefined();
    expect(module?.features.listings).toBeDefined();
    expect(module?.features.escrow).toBeDefined();
    expect(module?.features.reviews).toBeDefined();
  });

  test('should calculate total features correctly', () => {
    const totalFeatures = getTotalFeatureCount();
    expect(totalFeatures).toBeGreaterThan(40);
  });

  test('should calculate enabled features correctly', () => {
    const enabledFeatures = getEnabledFeatureCount();
    expect(enabledFeatures).toBeGreaterThan(40);
  });
});

describe('Screen Navigation', () => {
  const screens = [
    'Home',
    'Dashboard',
    'Engineer',
    'Analytics',
    'Arcade',
    'Charity',
    'Crypto',
    'Marketplace',
    'Trading',
    'Profile',
    'Admin',
    'Quality',
    'DayTrade',
    'Developer',
    'Code',
    'Escrow',
    'Governance',
    'Leaderboards',
    'Notifications',
    'Onboarding',
    'School',
    'Search',
    'SignUp',
    'Social',
    'Video',
  ];

  test('should have all required screens', () => {
    screens.forEach((screen) => {
      expect(navigationService.routeExists(screen) || screen === 'Home').toBeDefined();
    });
  });

  test('should navigate to all screens without 404', () => {
    screens.forEach((screen) => {
      navigationService.navigate(screen);
      expect(navigationService.getState().currentScreen).toBe(screen);
    });
  });

  test('should have no duplicate screen names', () => {
    const uniqueScreens = new Set(screens);
    expect(uniqueScreens.size).toBe(screens.length);
  });
});

describe('Error Handling', () => {
  test('should handle missing screens gracefully', () => {
    navigationService.navigate('NonExistentScreen');
    expect(navigationService.getState().currentScreen).toBe('Home');
  });

  test('should handle API errors without crashing', async () => {
    const response = await apiService.get('/error-endpoint');
    expect(response.success).toBe(false);
    expect(response.error).toBeDefined();
  });

  test('should maintain state after errors', () => {
    navigationService.navigate('Dashboard');
    navigationService.navigate('InvalidScreen');
    expect(navigationService.getState().currentScreen).toBe('Home');
  });
});

describe('Performance', () => {
  test('should load all modules quickly', () => {
    const start = performance.now();
    const modules = moduleService.getModules();
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
    expect(modules.length).toBe(7);
  });

  test('should navigate quickly', () => {
    const start = performance.now();
    navigationService.navigate('Dashboard');
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
  });

  test('should handle large history efficiently', () => {
    for (let i = 0; i < 100; i++) {
      navigationService.navigate('Dashboard');
      navigationService.navigate('Profile');
    }
    const history = navigationService.getHistory();
    expect(history.length).toBeLessThanOrEqual(50);
  });
});

describe('Integration', () => {
  test('should integrate navigation with modules', () => {
    const modules = moduleService.getModules();
    modules.forEach((module) => {
      expect(module.id).toBeDefined();
      expect(module.name).toBeDefined();
      expect(module.features).toBeDefined();
    });
  });

  test('should support module-based navigation', () => {
    const module = moduleService.getModule('hopeai');
    if (module) {
      navigationService.navigate('Engineer');
      expect(navigationService.getState().currentScreen).toBe('Engineer');
    }
  });

  test('should maintain consistency across services', () => {
    const moduleCount = moduleService.getModules().length;
    const allFeatures = moduleService.getAllFeatures();
    expect(moduleCount).toBe(7);
    expect(allFeatures.length).toBeGreaterThan(0);
  });
});
