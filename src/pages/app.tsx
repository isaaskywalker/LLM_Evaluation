// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/components/auth/AuthProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App;
