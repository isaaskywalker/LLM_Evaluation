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
