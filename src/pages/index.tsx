import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div>대시보드 내용</div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
