import { create } from 'zustand';
import { apiClient } from '../utils/api';
import type { LoginRequest, LoginResponse } from '../types/api';

interface AuthState {
  user: LoginResponse['user'] | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  login: async (credentials) => {
    try {
      const response = await apiClient.auth.login(credentials);
      if (response.data) {
        set({
          user: response.data.user,
          token: response.data.token,
          isAuthenticated: true,
        });
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    set({ user: null, token: null, isAuthenticated: false });
    localStorage.removeItem('token');
  },
}));