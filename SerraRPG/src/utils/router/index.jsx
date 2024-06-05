import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from '../../pages/ErrorPage'
import { Home } from '../../pages/Home';
import { Cadastro } from '../../pages/Cadastro';
import { Fichas } from '../../pages/Fichas';
import { Habilidades } from '../../pages/Habilidades';
import { Itens } from '../../pages/Itens';
import { Monstros } from '../../pages/Monstros';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
        errorElement: <ErrorPage />
    },
    {
        path: "/fichas",
        element: <Fichas />,
        errorElement: <ErrorPage />
    },
    {
        path: "/habilidades",
        element: <Habilidades />,
        errorElement: <ErrorPage />
    },
    {
        path: "/itens",
        element: <Itens />,
        errorElement: <ErrorPage />
    },
    {
        path: "/monstros",
        element: <Monstros />,
        errorElement: <ErrorPage />
    }
]);
