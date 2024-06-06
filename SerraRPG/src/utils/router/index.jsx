import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import Home from '../../pages/Home';
import Cadastro from '../../pages/Cadastro';
import ErrorPage from '../../pages/ErrorPage';
import Fichas from '../../pages/Fichas';
import Monstros from '../../pages/Monstros';
import Itens from '../../pages/Itens';
import Habilidades from '../../pages/Habilidades';
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "cadastro",
          element: <Cadastro />
        },
        {
          path: "fichas",
          element: <Fichas />
        },
        {
          path: "monstros",
          element: <Monstros />
        },
        {
          path: "itens",
          element: <Itens />
        },
        {
          path: "habilidades",
          element: <Habilidades />
        },
      ]
    }
  ])