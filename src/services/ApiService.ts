/**
 * SKYCOIN4444 Mobile API Service
 * Handles all API communication with the backend
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

class ApiService {
  private baseUrl: string = 'https://api.skycoin4444.com';
  private timeout: number = 30000;
  private token: string | null = null;

  /**
   * Set the base URL for API calls
   */
  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  /**
   * Set authentication token
   */
  setToken(token: string | null) {
    this.token = token;
  }

  /**
   * Make an API request
   */
  async request<T>(
    endpoint: string,
    config: ApiRequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      timeout = this.timeout,
    } = config;

    const url = `${this.baseUrl}${endpoint}`;

    try {
      const fetchOptions: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...(this.token && { Authorization: `Bearer ${this.token}` }),
        },
      };

      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return { success: false, error: errorMessage };
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, body?: any, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, body?: any, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, body?: any, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  // ============ AUTH ENDPOINTS ============

  async login(email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> {
    return this.post('/auth/login', { email, password });
  }

  async signup(email: string, password: string, name: string): Promise<ApiResponse<{ token: string; user: any }>> {
    return this.post('/auth/signup', { email, password, name });
  }

  async logout(): Promise<ApiResponse<void>> {
    return this.post('/auth/logout');
  }

  async getMe(): Promise<ApiResponse<any>> {
    return this.get('/auth/me');
  }

  // ============ USER ENDPOINTS ============

  async getUser(userId: string): Promise<ApiResponse<any>> {
    return this.get(`/users/${userId}`);
  }

  async updateUser(userId: string, data: any): Promise<ApiResponse<any>> {
    return this.put(`/users/${userId}`, data);
  }

  async getUserBalance(userId: string): Promise<ApiResponse<{ balance: number }>> {
    return this.get(`/users/${userId}/balance`);
  }

  // ============ TRADING ENDPOINTS ============

  async getTradingData(): Promise<ApiResponse<any>> {
    return this.get('/trading/data');
  }

  async executeTrade(symbol: string, amount: number, type: 'buy' | 'sell'): Promise<ApiResponse<any>> {
    return this.post('/trading/execute', { symbol, amount, type });
  }

  async getTradeHistory(userId: string): Promise<ApiResponse<any[]>> {
    return this.get(`/trading/history/${userId}`);
  }

  // ============ MARKETPLACE ENDPOINTS ============

  async getMarketplaceItems(): Promise<ApiResponse<any[]>> {
    return this.get('/marketplace/items');
  }

  async getMarketplaceItem(itemId: string): Promise<ApiResponse<any>> {
    return this.get(`/marketplace/items/${itemId}`);
  }

  async purchaseItem(itemId: string): Promise<ApiResponse<any>> {
    return this.post(`/marketplace/items/${itemId}/purchase`);
  }

  // ============ ARCADE ENDPOINTS ============

  async getArcadeGames(): Promise<ApiResponse<any[]>> {
    return this.get('/arcade/games');
  }

  async playGame(gameId: string): Promise<ApiResponse<any>> {
    return this.post(`/arcade/games/${gameId}/play`);
  }

  async getGameScore(gameId: string, userId: string): Promise<ApiResponse<{ score: number }>> {
    return this.get(`/arcade/games/${gameId}/scores/${userId}`);
  }

  // ============ ANALYTICS ENDPOINTS ============

  async getAnalytics(): Promise<ApiResponse<any>> {
    return this.get('/analytics/dashboard');
  }

  async getMetrics(timeframe: string): Promise<ApiResponse<any>> {
    return this.get(`/analytics/metrics?timeframe=${timeframe}`);
  }

  // ============ NOTIFICATIONS ENDPOINTS ============

  async getNotifications(): Promise<ApiResponse<any[]>> {
    return this.get('/notifications');
  }

  async markNotificationAsRead(notificationId: string): Promise<ApiResponse<void>> {
    return this.patch(`/notifications/${notificationId}`, { read: true });
  }

  // ============ SEARCH ENDPOINTS ============

  async search(query: string): Promise<ApiResponse<any[]>> {
    return this.get(`/search?q=${encodeURIComponent(query)}`);
  }

  // ============ SCHOOL ENDPOINTS ============

  async getCourses(): Promise<ApiResponse<any[]>> {
    return this.get('/school/courses');
  }

  async getCourseDetails(courseId: string): Promise<ApiResponse<any>> {
    return this.get(`/school/courses/${courseId}`);
  }

  async enrollCourse(courseId: string): Promise<ApiResponse<any>> {
    return this.post(`/school/courses/${courseId}/enroll`);
  }

  // ============ GOVERNANCE ENDPOINTS ============

  async getProposals(): Promise<ApiResponse<any[]>> {
    return this.get('/governance/proposals');
  }

  async voteOnProposal(proposalId: string, vote: 'yes' | 'no'): Promise<ApiResponse<any>> {
    return this.post(`/governance/proposals/${proposalId}/vote`, { vote });
  }

  // ============ CHARITY ENDPOINTS ============

  async getCharityProjects(): Promise<ApiResponse<any[]>> {
    return this.get('/charity/projects');
  }

  async donateToProject(projectId: string, amount: number): Promise<ApiResponse<any>> {
    return this.post(`/charity/projects/${projectId}/donate`, { amount });
  }
}

// Export singleton instance
export const apiService = new ApiService();
