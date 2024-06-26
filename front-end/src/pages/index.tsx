// src/pages/index.tsx
import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import Link from 'next/link';

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to the Online Learning Platform</h1>
        {user ? (
          <>
            <p className="text-center text-gray-600">Hello, {user.username}!</p>
            <button onClick={() => logout(() => {})} className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700">Logout</button>
            <Link href="/instructor/create-course">
              <div className="block mt-4 text-center text-blue-600 cursor-pointer">Create a new course</div>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <div className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 text-center cursor-pointer">Login</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
