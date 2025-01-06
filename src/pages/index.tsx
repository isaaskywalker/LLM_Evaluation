import type { NextPage } from 'next';
import { Layout } from '@/components/shared/Layout';
import { useAuthStore } from '@/store/authStore';

const Home: NextPage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          LLM Evaluation Platform
        </h1>
        {!isAuthenticated ? (
          <div className="space-y-4">
            <p className="text-gray-600">
              프롬프트를 평가하기 위해 로그인해주세요.
            </p>
            <div className="space-x-4">
              
                href="/auth/login"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium"
              >
                로그인하기
              </a>
              
                href="/auth/register"
                className="inline-block border border-primary text-primary px-6 py-3 rounded-lg font-medium"
              >
                회원가입하기
              </a>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {/* 로그인 후 보여줄 프롬프트 입력 폼 등을 여기에 추가 */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
