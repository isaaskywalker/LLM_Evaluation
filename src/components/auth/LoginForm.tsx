import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

export const LoginForm = () => {
 const router = useRouter();
 const login = useAuthStore(state => state.login);
 
 const [formData, setFormData] = useState({
   email: '',
   password: ''
 });
 const [error, setError] = useState<string>('');
 const [loading, setLoading] = useState(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [name]: value
   }));
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   setError('');
   setLoading(true);

   try {
     await login(formData);
     router.push('/dashboard');
   } catch (err) {
     setError(err instanceof Error ? err.message : '로그인에 실패했습니다.');
   } finally {
     setLoading(false);
   }
 };

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
     <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
       <div>
         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
           로그인
         </h2>
       </div>
       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
         <div className="rounded-md shadow-sm space-y-4">
           <div>
             <label htmlFor="email" className="sr-only">이메일</label>
             <input
               id="email"
               name="email"
               type="email"
               required
               className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
               placeholder="이메일"
               value={formData.email}
               onChange={handleChange}
             />
           </div>
           <div>
             <label htmlFor="password" className="sr-only">비밀번호</label>
             <input
               id="password"
               name="password"
               type="password"
               required
               className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
               placeholder="비밀번호"
               value={formData.password}
               onChange={handleChange}
             />
           </div>
         </div>

         {error && (
           <div className="text-red-500 text-sm text-center">
             {error}
           </div>
         )}

         <button
           type="submit"
           disabled={loading}
           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
         >
           {loading ? '로그인 중...' : '로그인'}
         </button>
       </form>
     </div>
   </div>
 );
};
