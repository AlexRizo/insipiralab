import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'
import './index.css'
import './fonts.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ createBrowserRouter(AppRouter) } />
    </Provider>
  </React.StrictMode>,
)
