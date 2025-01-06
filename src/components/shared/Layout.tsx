import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ✅ 네비게이션 바 */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <Link href="/" className="text-2xl font-bold text-gray-800">
              MyApp
            </Link>
            
            {/* 데스크톱 네비게이션 */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              {isAuthenticated && (
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
              )}
              <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            </div>
            
            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-800"
            >
              ☰
            </button>
          </div>
          
          {/* 모바일 메뉴 */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-md">
              <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
              {isAuthenticated && (
                <Link href="/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Dashboard</Link>
              )}
              <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</Link>
            </div>
          )}
        </div>
      </nav>

      {/* ✅ 메인 콘텐츠 */}
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            LLM Evaluation Platform
          </h1>
          <p className="text-gray-600 mb-6">
            AI 프롬프트의 품질을 평가하고 개선하여 더 나은 결과를 얻으세요.
          </p>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 sm:h-48 sm:w-48 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 12.5l3 3 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </main>

      {/* ✅ 푸터 */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
