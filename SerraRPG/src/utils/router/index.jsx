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
      errorElement: <ErrorPage />
    },
    {
      path: "cadastro",
      element: <Cadastro />,
      errorElement: <ErrorPage />
    },
    {
      path: "fichas",
      element: <Fichas />,
      errorElement: <ErrorPage />
    },
    {
      path: "monstros",
      element: <Monstros />,
      errorElement: <ErrorPage />
    },
    {
      path: "itens",
      element: <Itens />,
      errorElement: <ErrorPage />
    },
    {
      path: "habilidades",
      element: <Habilidades />,
      errorElement: <ErrorPage />
    }
  ])