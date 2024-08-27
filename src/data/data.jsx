import { ClientIcon, DesarrolloIcon, EnvaseIcon, IdeaIcon, LegalIcon, ManufacturaIcon, SeleccionIcon } from "../icons"

export const desarrolloData = [
    { 
        id: 1,
        text: 'CLIENTE',
        icon: <ClientIcon />,
    },
    {
        id: 2,
        text: 'Idea',
        icon: <IdeaIcon />,
    },
    {
        id: 3,
        text: 'Legal',
        icon: <LegalIcon />,
    },
    {
        id: 4,
        text: 'Desarrollo personalizado',
        icon: <DesarrolloIcon />,
    },
    {
        id: 5,
        text: 'Selección de empaque',
        icon: <SeleccionIcon />,
    },
    {
        id: 6,
        text: 'Manufactura',
        icon: <ManufacturaIcon />,
    },
];

export const envasesListosData = [
    { 
        id: 1,
        text: 'CLIENTE',
        icon: <ClientIcon />,
    },
    {
        id: 2,
        text: 'Selección de productos a envasar',
        icon: <SeleccionIcon />,
    },
    {
        id: 3,
        text: 'Selección de envase',
        icon: <EnvaseIcon />,
    },
    {
        id: 4,
        text: 'Manufactura',
        icon: <ManufacturaIcon />,
    },
];

export const GridData = [
    {
        id: 1,
        title: 'Integridad Personal',
        text: 'En INSPIRA LAB, la integridad es el pilar de todo lo que hacemos. Nos comprometemos a actuar con honestidad y ética, asegurándonos de que cada producto que creamos cumpla con los más altos estándares de calidad y transparencia.',
        img: './img/nosotros/nosotros-grid-1.jpg',
    },
    {
        id: 2,
        title: (<>Creatividad<br/> e innovación</>),
        text: 'Creemos en el poder de la creatividad y la innovación para transformar el mundo de la cosmética. Cada formulación es una obra de arte, cada producto es una expresión de nuestra pasión por la belleza y la ciencia.',
        customWidth: 'w-[235px]',
        img: './img/nosotros/nosotros-grid-2.jpg',
        reverse: true
    },
    {
        id: 3,
        title: 'Productividad',
        text: 'La eficiencia y la eficacia son claves en nuestro proceso de producción. Nos esforzamos por ser altamente productivos, optimizando recursos y tiempos para ofrecer productos de excelencia sin comprometer la calidad.',
        img: './img/nosotros/nosotros-grid-3.jpg',
    },
    {
        id: 4,
        title: 'Conciencia',
        text: 'Somos conscientes del impacto de nuestras acciones y decisiones. Nos dedicamos a crear cosméticos que no solo realzan la belleza, sino que también respeten y protejan el medio ambiente. Cada ingrediente es cuidadosamente seleccionado, y nuestras prácticas de producción son sostenibles y responsables.',
        customWidth: 'w-[255px] leading-6',
        img: './img/nosotros/nosotros-grid-4.jpg',
        reverse: true
    }
];