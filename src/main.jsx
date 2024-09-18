import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'
import './index.css'
import './fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ createBrowserRouter(AppRouter) } />
  </React.StrictMode>,
)
