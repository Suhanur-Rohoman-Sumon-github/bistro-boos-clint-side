import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider >
    <React.StrictMode>
      {/* provide clint to app */}
      <QueryClientProvider client={queryClient}>
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 via-pink-500" animate-gradient'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </React.StrictMode>,
  </AuthProvider>
)
