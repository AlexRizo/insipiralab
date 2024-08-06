import { InspiralabApp } from "../InspiralabApp";
import { ContactoPage, HomePage, MaquilaPage, NosotrosPage } from "../pages";

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
            }
        ]
    }
];