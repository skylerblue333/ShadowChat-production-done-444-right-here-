import { useState, useCallback, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { apiService } from '../services/ApiService';

export function useUserProfile() {
  const { user, updateUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!user?.id) return;

    setIsLoading(true);
    setError(null);

    const response = await apiService.getUser(user.id);

    if (response.success && response.data) {
      updateUser(response.data);
    } else {
      setError(response.error || 'Failed to fetch profile');
    }

    setIsLoading(false);
  }, [user?.id, updateUser]);

  const updateProfile = useCallback(
    async (updates: any) => {
      if (!user?.id) return;

      setIsLoading(true);
      setError(null);

      const response = await apiService.updateUser(user.id, updates);

      if (response.success && response.data) {
        updateUser(response.data);
      } else {
        setError(response.error || 'Failed to update profile');
      }

      setIsLoading(false);
    },
    [user?.id, updateUser]
  );

  return { isLoading, error, fetchProfile, updateProfile };
}

export function useBalance() {
  const { user, updateUser } = useAppContext();
  const [balance, setBalance] = useState(user?.balance || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!user?.id) return;

    setIsLoading(true);
    setError(null);

    const response = await apiService.getUserBalance(user.id);

    if (response.success && response.data) {
      setBalance(response.data.balance);
      updateUser({ balance: response.data.balance });
    } else {
      setError(response.error || 'Failed to fetch balance');
    }

    setIsLoading(false);
  }, [user?.id, updateUser]);

  return { balance, isLoading, error, fetchBalance };
}

export function useTradingData() {
  const [trades, setTrades] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrades = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await apiService.getTradingData();

    if (response.success && response.data) {
      setTrades(response.data);
    } else {
      setError(response.error || 'Failed to fetch trading data');
    }

    setIsLoading(false);
  }, []);

  const executeTrade = useCallback(
    async (symbol: string, amount: number, type: 'buy' | 'sell') => {
      setIsLoading(true);
      setError(null);

      const response = await apiService.executeTrade(symbol, amount, type);

      if (response.success && response.data) {
        await fetchTrades();
      } else {
        setError(response.error || 'Trade execution failed');
      }

      setIsLoading(false);
      return response;
    },
    [fetchTrades]
  );

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  return { trades, isLoading, error, executeTrade, refetch: fetchTrades };
}

export function useMarketplaceItems() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await apiService.getMarketplaceItems();

    if (response.success && response.data) {
      setItems(response.data);
    } else {
      setError(response.error || 'Failed to fetch marketplace items');
    }

    setIsLoading(false);
  }, []);

  const purchaseItem = useCallback(
    async (itemId: string) => {
      setIsLoading(true);
      setError(null);

      const response = await apiService.purchaseItem(itemId);

      if (response.success) {
        await fetchItems();
      } else {
        setError(response.error || 'Purchase failed');
      }

      setIsLoading(false);
      return response;
    },
    [fetchItems]
  );

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { items, isLoading, error, purchaseItem, refetch: fetchItems };
}

export function useArcadeGames() {
  const [games, setGames] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGames = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await apiService.getArcadeGames();

    if (response.success && response.data) {
      setGames(response.data);
    } else {
      setError(response.error || 'Failed to fetch arcade games');
    }

    setIsLoading(false);
  }, []);

  const playGame = useCallback(
    async (gameId: string) => {
      setIsLoading(true);
      setError(null);

      const response = await apiService.playGame(gameId);

      if (response.success) {
        await fetchGames();
      } else {
        setError(response.error || 'Failed to play game');
      }

      setIsLoading(false);
      return response;
    },
    [fetchGames]
  );

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return { games, isLoading, error, playGame, refetch: fetchGames };
}

export function useNotifications() {
  const { addNotification } = useAppContext();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await apiService.getNotifications();

    if (response.success && response.data) {
      setNotifications(response.data);
    } else {
      setError(response.error || 'Failed to fetch notifications');
    }

    setIsLoading(false);
  }, []);

  const markAsRead = useCallback(
    async (notificationId: string) => {
      const response = await apiService.markNotificationAsRead(notificationId);

      if (response.success) {
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === notificationId ? { ...n, read: true } : n
          )
        );
      } else {
        addNotification('Failed to mark notification as read', 'error');
      }

      return response;
    },
    [addNotification]
  );

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return { notifications, isLoading, error, markAsRead, refetch: fetchNotifications };
}

export function useSearch(query: string) {
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    const response = await apiService.search(searchQuery);

    if (response.success && response.data) {
      setResults(response.data);
    } else {
      setError(response.error || 'Search failed');
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  return { results, isLoading, error };
}
