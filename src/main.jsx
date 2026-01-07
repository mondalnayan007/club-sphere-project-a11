import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'

import { Toaster } from 'react-hot-toast'
import { router } from './Routes/Route'
import AuthProvider from './providers/AuthProvider'



createRoot(document.getElementById('root')).render(
  <div>

    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right' reverseOrder={false} />
    </AuthProvider>




  </div>
)