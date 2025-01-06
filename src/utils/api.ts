import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_ROUTES } from '../types/api';
import type { ApiResponse, LoginRequest, LoginResponse } from '../types/api';

const api = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_API_BASE_URL as string) || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {  // AxiosRequestConfig를 InternalAxiosRequestConfig로 변경
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error) as Promise<never>;  // 명시적 타입 캐스팅 추가
  }
);

export const apiClient = {
  auth: {
    login: async (credentials: LoginRequest) => {
      const response = await api.post<ApiResponse<LoginResponse>>(
        API_ROUTES.auth.login, 
        credentials
      );
      return response.data;
    },
  },
};