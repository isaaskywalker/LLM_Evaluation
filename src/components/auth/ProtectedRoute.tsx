import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated) {
    router.push('/auth/login');
    return null;
  }

  return <>{children}</>;
};
