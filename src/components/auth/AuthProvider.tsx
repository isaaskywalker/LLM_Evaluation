import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const { user, isAuthenticated, checkAuth } = useAuthStore(state => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    checkAuth: state.checkAuth
  }));

  useEffect(() => {
    // 페이지 로드시 토큰 확인 및 사용자 인증 상태 체크
    const token = localStorage.getItem('token');
    if (token) {
      checkAuth();
    }
  }, [checkAuth]);

  // 인증이 필요한 페이지에 대한 리디렉션 처리
  useEffect(() => {
    const protectedRoutes = ['/dashboard', '/settings', '/evaluation'];
    const isProtectedRoute = protectedRoutes.some(route => 
      router.pathname.startsWith(route)
    );

    if (isProtectedRoute && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [router, isAuthenticated]);

  // 로그인 상태에서 접근하면 안 되는 페이지 처리
  useEffect(() => {
    const authRoutes = ['/auth/login', '/auth/register'];
    if (isAuthenticated && authRoutes.includes(router.pathname)) {
      router.push('/dashboard');
    }
  }, [router, isAuthenticated]);

  return (
    <>
      {children}
    </>
  );
};
