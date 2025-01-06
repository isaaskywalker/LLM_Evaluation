import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

export const RegisterForm = () => {
 const router = useRouter();
 const register = useAuthStore(state => state.register);
 
 const [formData, setFormData] = useState({
   email: '',
   password: '',
   confirmPassword: '',
   name: ''
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

 const validateForm = () => {
   if (formData.password !== formData.confirmPassword) {
     setError('비밀번호가 일치하지 않습니다.');
     return false;
   }
   return true;
 };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   setError('');
   
   if (!validateForm()) return;
   
   setLoading(true);

   try {
     await register({
       email: formData.email,
       password: formData.password,
       name: formData.name
     });
     router.push('/auth/login');
   } catch (err) {
     setError(err instanceof Error ? err.message : '회원가입에 실패했습니다.');
   } finally {
     setLoading(false);
   }
 };

 return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
     <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
       <div>
         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
           회원가입
         </h2>
       </div>
       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
         <div className="rounded-md shadow-sm space-y-4">
           <div>
             <label htmlFor="name" className="sr-only">이름</label>
             <input
               id="name"
               name="name"
               type="text"
               required
               className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
               placeholder="이름"
               value={formData.name}
               onChange={handleChange}
             />
           </div>
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
           <div>
             <label htmlFor="confirmPassword" className="sr-only">비밀번호 확인</label>
             <input
               id="confirmPassword"
               name="confirmPassword"
               type="password"
               required
               className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
               placeholder="비밀번호 확인"
               value={formData.confirmPassword}
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
           {loading ? '회원가입 중...' : '회원가입'}
         </button>
       </form>
     </div>
   </div>
 );
};
