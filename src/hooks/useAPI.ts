import { useState } from 'react';
import {apiClient} from '../utils/api';  // default import로 변경
import { ApiResponse } from '../types/api';

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async <T,>(
    // apiFunction의 타입을 한번만 선언
    apiFunction: () => Promise<ApiResponse<T>>
  ) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiFunction();
      if (!response.success) {
        throw new Error(response.error);
      }
      return response.data || null;
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 에러가 발생했습니다.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, callApi };
}