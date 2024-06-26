'use client'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { login as loginService, register as registerService } from '../services/authService';

const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const decodeJWT = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      const decoded = decodeJWT(token);
      setUser(decoded);
    }
  }, []);

  const login = async (credentials: any, redirectCallback: () => void) => {
    const response = await loginService(credentials.username, credentials.password);
    const token = response.data.jwt;
    localStorage.setItem('token', token);
    setToken(token);
    const decoded = decodeJWT(token);
    setUser(decoded);
    redirectCallback();
  };

  const logout = (redirectCallback: () => void) => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    redirectCallback();
  };

  const register = async (username: string, password: string, redirectCallback: () => void) => {
    await registerService(username, password);
    redirectCallback();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
