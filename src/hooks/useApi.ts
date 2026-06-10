import { useState, useCallback, useEffect } from 'react';
import { apiService, ApiResponse } from '../services/ApiService';

export interface UseApiOptions {
  autoFetch?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useApi<T>(
  endpoint: string,
  options: UseApiOptions = {}
) {
  const { autoFetch = true, onSuccess, onError } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const response = await apiService.get<T>(endpoint);

    if (response.success && response.data) {
      setData(response.data);
      onSuccess?.(response.data);
    } else {
      const errorMsg = response.error || 'Failed to fetch data';
      setError(errorMsg);
      onError?.(errorMsg);
    }

    setIsLoading(false);
  }, [endpoint, onSuccess, onError]);

  useEffect(() => {
    if (autoFetch) {
      fetch();
    }
  }, [autoFetch, fetch]);

  const refetch = useCallback(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch };
}

export function useApiMutation<T>(
  endpoint: string,
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'POST',
  options: UseApiOptions = {}
) {
  const { onSuccess, onError } = options;
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async (body?: any): Promise<ApiResponse<T>> => {
      setIsLoading(true);
      setError(null);

      let response: ApiResponse<T>;

      switch (method) {
        case 'POST':
          response = await apiService.post<T>(endpoint, body);
          break;
        case 'PUT':
          response = await apiService.put<T>(endpoint, body);
          break;
        case 'DELETE':
          response = await apiService.delete<T>(endpoint);
          break;
        case 'PATCH':
          response = await apiService.patch<T>(endpoint, body);
          break;
        default:
          response = { success: false, error: 'Invalid method' };
      }

      if (response.success && response.data) {
        setData(response.data);
        onSuccess?.(response.data);
      } else {
        const errorMsg = response.error || 'Operation failed';
        setError(errorMsg);
        onError?.(errorMsg);
      }

      setIsLoading(false);
      return response;
    },
    [endpoint, method, onSuccess, onError]
  );

  return { data, isLoading, error, mutate };
}

export function useApiPagination<T>(
  baseEndpoint: string,
  pageSize: number = 10
) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading, error, refetch } = useApi<T[]>(
    `${baseEndpoint}?page=${page}&pageSize=${pageSize}`,
    {
      autoFetch: true,
      onSuccess: (newData) => {
        if (page === 1) {
          setItems(newData);
        } else {
          setItems((prev) => [...prev, ...newData]);
        }
        setHasMore(newData.length === pageSize);
      },
    }
  );

  const loadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setPage(1);
    setItems([]);
    setHasMore(true);
  }, []);

  return { items, isLoading, error, hasMore, loadMore, reset, refetch };
}

export function useApiCache<T>(
  endpoint: string,
  cacheTime: number = 5 * 60 * 1000 // 5 minutes
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<number>(0);

  const fetch = useCallback(async (force = false) => {
    const now = Date.now();
    if (!force && lastFetch && now - lastFetch < cacheTime) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const response = await apiService.get<T>(endpoint);

    if (response.success && response.data) {
      setData(response.data);
      setLastFetch(now);
    } else {
      setError(response.error || 'Failed to fetch data');
    }

    setIsLoading(false);
  }, [endpoint, cacheTime, lastFetch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const refetch = useCallback(() => {
    fetch(true);
  }, [fetch]);

  return { data, isLoading, error, refetch };
}
