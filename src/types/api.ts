// src/types/api.ts
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
    };
  }
  
  export const API_ROUTES = {
    auth: {
      login: '/api/auth/login',
    },
    prompt: {
      submit: '/api/prompt/submit',
    },
    settings: {
      updateApiKeys: '/api/settings/api-keys',
    },
  } as const;