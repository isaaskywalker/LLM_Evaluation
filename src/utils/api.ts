import axios, { AxiosRequestConfig } from 'axios';
import { 
  API_ROUTES, 
  ApiResponse, 
  LoginRequest, 
  LoginResponse, 
  PromptRequest, 
  PromptResponse 
} from '../types/api';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_BASE_URL: string;
    }
  }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 인터셉터 설정
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API 메서드 정의
export const apiClient = {
  auth: {
    login: async (credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
      const response = await api.post(API_ROUTES.auth.login, credentials);
      return response.data;
    },
  },
  prompt: {
    submit: async (promptData: PromptRequest): Promise<ApiResponse<PromptResponse>> => {
      const response = await api.post(API_ROUTES.prompt.submit, promptData);
      return response.data;
    },
  },
  settings: {
    updateApiKeys: async (apiKeys: Record<string, string>): Promise<ApiResponse<void>> => {
      const response = await api.put(API_ROUTES.settings.updateApiKeys, apiKeys);
      return response.data;
    },
  },
};