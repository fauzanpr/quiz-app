import React from 'react'
import ReactDOM from 'react-dom/client'
import "./entries/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { route } from './entries/route'

const router = createBrowserRouter([...route]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
