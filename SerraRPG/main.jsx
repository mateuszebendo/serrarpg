import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './src/utils/router'
import AuthProvider from './src/contexts/auth';

ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
