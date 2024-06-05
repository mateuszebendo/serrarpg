import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';

import {
  createBrowserRouter
} from 'react-router-dom'; 

import Home from './src/pages/Home'; 
import ErrorPage from './src/pages/ErrorPage'; 
import Fichas from './src/pages/Fichas'; 

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        path: "fichas", 
        element: <Fichas />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
