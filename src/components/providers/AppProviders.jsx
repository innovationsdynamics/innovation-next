'use client';

import { Provider } from 'react-redux';
import store from '@/redux/store';
import { AuthProvider } from '@/context/AuthContext';
import { ShopProvider } from '@/context/ShopContext';

export default function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ShopProvider>{children}</ShopProvider>
      </AuthProvider>
    </Provider>
  );
}
