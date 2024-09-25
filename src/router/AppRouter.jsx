import { Navigate } from "react-router-dom";
import { InspiralabApp } from "../InspiralabApp";
import { ContactoPage, HomePage, MaquilaPage, NosotrosPage, NoticiaPage } from "../pages";
import { Admin, Login } from "../admin";

export const AppRouter = [
    {
        path: '/',
        element: <InspiralabApp />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/maquila',
                element: <MaquilaPage />
            },
            {
                path: '/nosotros',
                element: <NosotrosPage />
            },
            {
                path: '/contacto',
                element: <ContactoPage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'Admin',
                element: <Admin />
            }
        ]
    },
    {
        path: '/noticias',
        element: <NoticiaPage />
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
];