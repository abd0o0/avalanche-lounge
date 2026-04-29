import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/userContext.jsx';
import { I18nProvider } from './i18n/useTranslation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </I18nProvider>
  </React.StrictMode>
);
