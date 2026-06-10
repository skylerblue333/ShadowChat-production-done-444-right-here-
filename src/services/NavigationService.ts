/**
 * SKYCOIN4444 Mobile Navigation Service
 * Manages all routing and screen transitions with 404 error prevention
 */

export interface NavigationRoute {
  name: string;
  component: any;
  title: string;
  icon?: string;
  category?: string;
}

export interface NavigationState {
  currentScreen: string;
  previousScreen: string;
  history: string[];
  params?: Record<string, any>;
}

class NavigationService {
  private routes: Map<string, NavigationRoute> = new Map();
  private state: NavigationState = {
    currentScreen: 'Home',
    previousScreen: '',
    history: ['Home'],
    params: {},
  };

  private listeners: Set<(state: NavigationState) => void> = new Set();

  /**
   * Register all available routes
   */
  registerRoutes(routes: NavigationRoute[]) {
    routes.forEach((route) => {
      this.routes.set(route.name, route);
    });
  }

  /**
   * Navigate to a screen with optional parameters
   */
  navigate(screenName: string, params?: Record<string, any>) {
    if (!this.routes.has(screenName)) {
      console.warn(`⚠️ Screen "${screenName}" not found. Navigating to Home instead.`);
      this.navigateToHome();
      return;
    }

    this.state.previousScreen = this.state.currentScreen;
    this.state.currentScreen = screenName;
    this.state.params = params || {};
    this.state.history.push(screenName);

    // Keep history manageable (max 50 entries)
    if (this.state.history.length > 50) {
      this.state.history.shift();
    }

    this.notifyListeners();
  }

  /**
   * Go back to previous screen
   */
  goBack() {
    if (this.state.history.length > 1) {
      this.state.history.pop();
      this.state.currentScreen = this.state.history[this.state.history.length - 1];
      this.notifyListeners();
    }
  }

  /**
   * Navigate to home screen
   */
  navigateToHome() {
    this.state.history = ['Home'];
    this.state.currentScreen = 'Home';
    this.state.previousScreen = '';
    this.state.params = {};
    this.notifyListeners();
  }

  /**
   * Get current navigation state
   */
  getState(): NavigationState {
    return { ...this.state };
  }

  /**
   * Get a specific route
   */
  getRoute(screenName: string): NavigationRoute | undefined {
    return this.routes.get(screenName);
  }

  /**
   * Get all available routes
   */
  getAllRoutes(): NavigationRoute[] {
    return Array.from(this.routes.values());
  }

  /**
   * Check if a route exists
   */
  routeExists(screenName: string): boolean {
    return this.routes.has(screenName);
  }

  /**
   * Subscribe to navigation changes
   */
  subscribe(listener: (state: NavigationState) => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Notify all listeners of state change
   */
  private notifyListeners() {
    this.listeners.forEach((listener) => {
      listener(this.getState());
    });
  }

  /**
   * Get navigation history
   */
  getHistory(): string[] {
    return [...this.state.history];
  }

  /**
   * Clear history
   */
  clearHistory() {
    this.state.history = ['Home'];
    this.state.currentScreen = 'Home';
    this.state.previousScreen = '';
    this.notifyListeners();
  }

  /**
   * Get routes by category
   */
  getRoutesByCategory(category: string): NavigationRoute[] {
    return Array.from(this.routes.values()).filter((route) => route.category === category);
  }

  /**
   * Get all categories
   */
  getCategories(): string[] {
    const categories = new Set<string>();
    this.routes.forEach((route) => {
      if (route.category) {
        categories.add(route.category);
      }
    });
    return Array.from(categories);
  }
}

// Export singleton instance
export const navigationService = new NavigationService();
