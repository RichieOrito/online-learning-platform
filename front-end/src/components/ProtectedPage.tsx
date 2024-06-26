'use client'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const ProtectedPage = () => {
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMessage(response.data);
      } catch (error) {
        setMessage('Failed to fetch protected data');
      }
    };

    if (token) {
      fetchProtectedData();
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center">Protected Page</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ProtectedPage;
