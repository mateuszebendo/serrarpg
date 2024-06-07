import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './src/utils/router'
import AuthProvider from './src/contexts/auth';
import SheetInfoProvider from './src/contexts/SheetContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).
  render(
    <React.StrictMode>
      <SheetInfoProvider>
        <AuthProvider>
          <BrowserRouter>
            <RoutesApp />
          </BrowserRouter>
        </AuthProvider>
      </SheetInfoProvider>
    </React.StrictMode>
  )
