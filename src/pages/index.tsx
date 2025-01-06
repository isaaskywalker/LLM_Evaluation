import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/shared/Layout';
import { useAuthStore } from '@/store/authStore';

const Home: NextPage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              LLM Evaluation Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI 프롬프트의 품질을 평가하고 개선하여 더 나은 결과를 얻으세요.
            </p>
          </div>

          {!isAuthenticated ? (
            <div className="space-y-8">
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">정확한 평가</h3>
                  <p className="text-gray-600">AI 모델의 응답을 다각도로 분석하여 정확한 평가를 제공합니다.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">실시간 분석</h3>
                  <p className="text-gray-600">즉각적인 피드백으로 프롬프트를 빠르게 개선할 수 있습니다.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">상세 통계</h3>
                  <p className="text-gray-600">프롬프트 성능에 대한 상세한 통계와 인사이트를 제공합니다.</p>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/auth/login"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    시작하기
                  </Link>
                  <Link
                    href="/auth/register"
                    className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-sm border border-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
              {/* 로그인 후 프롬프트 입력 폼 */}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
