// src/pages/_app.tsx
import { AuthProvider } from '../components/AuthContext';
import '../globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
