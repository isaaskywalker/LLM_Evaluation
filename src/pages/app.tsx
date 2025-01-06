import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// src/pages/index.tsx (ProtectedRoute 제거)
import type { NextPage } from 'next';
import { AuthProvider } from '@/components/auth/AuthProvider';

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-center py-8">
          LLM Evaluation Platform
        </h1>
      </div>
    </AuthProvider>
  );
};

export default Home;
