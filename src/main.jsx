import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AuthProvider from './contexts/Authcontext'
import { RouterProvider } from 'react-router';
import router from './router';

import "./styles/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
