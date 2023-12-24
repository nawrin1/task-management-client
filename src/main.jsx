import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
      <Toaster/>
     <RouterProvider router={router} />
     </QueryClientProvider>
     </AuthProvider>
     
  </React.StrictMode>,
)
