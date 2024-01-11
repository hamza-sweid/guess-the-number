'use client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import store from '@/services/redux/store';
import App from './app';

export default function Home() {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}
