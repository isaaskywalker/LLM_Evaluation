import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 네비게이션 바 */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyApp
            </Link>
            {/* 네비게이션 링크 */}
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              {isAuthenticated && (
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
                  Dashboard
                </Link>
              )}
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </div>
            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-800">
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
