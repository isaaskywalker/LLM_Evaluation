export const API_ROUTES = {
    auth: {
      login: '/api/auth/login',
      register: '/api/auth/register',
      logout: '/api/auth/logout'
    },
    prompt: {
      submit: '/api/prompt/submit',
      evaluate: '/api/prompt/evaluate',
      history: '/api/prompt/history'
    },
    settings: {
      updateApiKeys: '/api/settings/api-keys',
      getApiKeys: '/api/settings/api-keys'
    }
  } as const;
  
  // API Response 타입 정의
  export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  // API 엔드포인트별 요청/응답 타입 정의
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  }
  
  export interface PromptRequest {
    content: string;
    model: string;
    parameters: {
      temperature: number;
      maxTokens: number;
      [key: string]: any;
    };
  }
  
  export interface PromptResponse {
    id: string;
    result: string;
    evaluation: {
      accuracy: number;
      consistency: number;
      security: number;
    };
  }