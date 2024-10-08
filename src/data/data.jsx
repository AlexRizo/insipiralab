import { ClientIcon, DesarrolloIcon, EnvaseIcon, IdeaIcon, LegalIcon, ManufacturaIcon, SeleccionIcon } from "../icons"

export const desarrolloData = [
    { 
        id: 1,
        text: 'Cliente',
        icon: <>
            <ClientIcon className="hidden 2xl:block" />
            <ClientIcon className="2xl:hidden" width="50" />
        </>,
    },
    {
        id: 2,
        text: 'Idea',
        icon: <>
            <IdeaIcon className="hidden 2xl:block" />
            <IdeaIcon className="2xl:hidden" width="58" />
        </>,
    },
    {
        id: 3,
        text: 'Legal',
        icon: <>
            <LegalIcon className="hidden 2xl:block" />
            <LegalIcon className="2xl:hidden" width="51" />
        </>,
    },
    {
        id: 4,
        text: 'Desarrollo personalizado',
        icon: <>
            <DesarrolloIcon className="hidden 2xl:block" />
            <DesarrolloIcon className="2xl:hidden" width="49" />
        </>,
    },
    {
        id: 5,
        text: 'Selección de empaque',
        icon: <>
            <SeleccionIcon className="hidden 2xl:block" />
            <SeleccionIcon className="2xl:hidden" width="62" />
        </>,
    },
    {
        id: 6,
        text: 'Manufactura',
        icon: <>
            <ManufacturaIcon className="hidden 2xl:block" />
            <ManufacturaIcon className="2xl:hidden" width="62" />
        </>,
    },
];

export const LabialesData = [
    {
        path: 'img/home/labios-1.png',
    },
    {
        path: 'img/home/labios-2.png',
    },
    {
        path: 'img/home/labios-3.png',
    },
    {
        path: 'img/home/labios-4.png',
    },
    {
        path: 'img/home/labios-5.png',
    },
    {
        path: 'img/home/labios-6.png',
    },
    {
        path: 'img/home/labios-7.png',
    }
]

export const envasesListosData = [
    { 
        id: 1,
        text: 'Cliente',
        icon: <>
            <ClientIcon className="hidden xl:block" />
            <ClientIcon className="xl:hidden" width="50" />
        </>,
    },
    {
        id: 2,
        text: 'Selección de productos a envasar',
        icon: <>
            <SeleccionIcon className="hidden xl:block" />
            <SeleccionIcon className="xl:hidden" width="49" />
        </>,
    },
    {
        id: 3,
        text: 'Selección de envase',
        icon: <>
            <EnvaseIcon className="hidden xl:block" />
            <EnvaseIcon className="xl:hidden" width="38" />
        </>,
    },
    {
        id: 4,
        text: 'Manufactura',
        icon: <>
            <ManufacturaIcon className="hidden xl:block" />
            <ManufacturaIcon className="xl:hidden" width="62" />
        </>,
    },
];

export const GridData = [
    {
        id: 1,
        title: 'Integridad Personal',
        text: 'En INSPIRA LAB, la integridad es el pilar de todo lo que hacemos. Nos comprometemos a actuar con honestidad y ética, asegurándonos de que cada producto que creamos cumpla con los más altos estándares de calidad y transparencia.',
        customWidth: 'w-[208px] 2xl:w-[230px]',
        img: '/img/nosotros/nosotros-grid-1.jpg',
    },
    {
        id: 2,
        title: (<>Creatividad<br/> e Innovación</>),
        text: 'Creemos en el poder de la creatividad y la innovación para transformar el mundo de la cosmética. Cada formulación es una obra de arte, cada producto es una expresión de nuestra pasión por la belleza y la ciencia.',
        customWidth: 'w-[215px] 2xl:w-[235px]',
        img: '/img/nosotros/nosotros-grid-2.jpg',
        reverse: true
    },
    {
        id: 3,
        title: 'Productividad',
        text: 'La eficiencia y la eficacia son claves en nuestro proceso de producción. Nos esforzamos por ser altamente productivos, optimizando recursos y tiempos para ofrecer productos de excelencia sin comprometer la calidad.',
        customWidth: 'w-[210px] 2xl:w-[230px]',
        img: '/img/nosotros/nosotros-grid-3.jpg',
    },
    {
        id: 4,
        title: 'Conciencia',
        text: 'Somos conscientes del impacto de nuestras acciones y decisiones. Nos dedicamos a crear cosméticos que no solo realzan la belleza, sino que también respeten y protejan el medio ambiente. Cada ingrediente es cuidadosamente seleccionado, y nuestras prácticas de producción son sostenibles y responsables.',
        customWidth: 'w-[226px] 2xl:w-[255px]',
        img: '/img/nosotros/nosotros-grid-4.jpg',
        reverse: true
    }
];

export const newsData = [
    {
        id: 1,
        title: <>Embellecen a la mujer <br/>con cosméticos <br/>sustentables</>,
        author: 'El Informador',
        content: (<>
            En medio de mucha<br className='hidden xl:block'/> necesidad <br className='hidden xl:block'/>
            económica y desesperación<br className='hidden xl:block'/> por 
            la pandemia del<br className='hidden xl:block'/> COVID-19, <br className='hidden xl:block'/>
            Denisse Reynoso comenzó<br className='hidden xl:block'/> a 
            elaborar pomadas y<br className='hidden xl:block'/> cremas en 
            el patio de la<br className='hidden xl:block'/> casa de sus 
            papás. Así<br className='hidden xl:block'/> nació Gardenia 
            Naturals.
        </>),
        img: 'bg-[url("/img/home/news-slider-imagen-1.jpg")]',
        url: 'https://inspiralab.devalowee.com/noticias'
    },
    {
        id: 2,
        title: <>Acné y pandemia<br/> la llevan al éxito</>,
        author: 'Mural',
        content: (<>
            La necesidad de aportar dinero <br className='hidden xl:block'/> 
            a la economía de su<br className='hidden xl:block'/> casa, combinada 
            con las<br className='hidden xl:block'/> ganas de tener una piel <br className='hidden xl:block'/> 
            bonita, hicieron que Denisse<br className='hidden xl:block'/> Reynoso 
            Barragán creara<br className='hidden xl:block'/> Laboratorio, 
            Formulación y<br className='hidden xl:block'/> Desarrollos Gardenia <br className='hidden xl:block'/> 
            Naturals, Cosmética Natural<br className='hidden xl:block'/> e Insumos.
        </>),
        img: 'bg-[url("/img/home/news-slider-imagen-2.jpg")]',
        url: 'https://www.mural.com.mx/acne-y-pandemia-la-llevan-al-exito/ar2760754'
    },
    {
        id: 3,
        title: <>Gana Premio<br/> Emprendedor<br/> Coparmex laboratorio<br/> de cosméticos</>,
        author: 'Mural',
        content: (<>
            La llegada a la luna fue el tema <br className='hidden xl:block'/> 
            en la edición 18 del Premio <br className='hidden xl:block'/> 
            Emprendedor Coparmex, <br className='hidden xl:block'/> 
            debido a los sueños que <br className='hidden xl:block'/> 
            representan.
        </>),
        img: 'bg-[url("/img/home/news-slider-imagen-3.jpg")]',
        url: 'https://www.mural.com.mx/gana-premio-emprendedor-coparmex-laboratorio-de-cosmeticos/ar2715180'
    },
    {
        id: 4,
        title: <>Denisse Reynoso,<br/> triunfadora por decreto</>,
        author: 'PLAYERS',
        content: (<>
            Denisse Reynoso, fundadora y <br className='hidden xl:block'/> directora de Gardenia Naturals,<br className='hidden xl:block'/> ha tomado impulso y 
            no se ha<br className='hidden xl:block'/> detenido en hacer crecer su<br className='hidden xl:block'/> empresa.
        </>),
        img: 'bg-[url("/img/home/news-slider-imagen-4.jpg")]',
        url: 'https://playersoflife.com/guadalajara/denisse-reynoso-triunfadora-por-decreto/'
    },
    {
        id: 5,
        title: <>Celebran a finalistas<br/> del Premio Emprendedor<br/> Coparmex</>,
        author: <>UNIVERSIDAD<br/> PANAMERICANA</>,
        content: (<>
            Con el objetivo de conocer de<br className='hidden xl:block'/> cerca sus proyectos, el rector<br className='hidden xl:block'/> de la Universidad <br className='hidden xl:block'/> 
            Panamericana, el Dr. José<br className='hidden xl:block'/> Antonio Esquivias Romero,<br className='hidden xl:block'/> sostuvo una reunión con 
            los<br className='hidden xl:block'/> Alumnos finalistas
        </>),
        img: 'bg-[url("/img/home/news-slider-imagen-5.jpg")]',
        url: 'https://www.up.edu.mx/noticias/innovacion-y-emprendimiento/celebran-a-finalistas-del-premio-emprendedor-coparmex/'
    },
];

export const orderListData = [
    { id: 0, text: 'Invitación y expertise' },
    { id: 1, text: 'Los mejores envases en México' },
    { id: 2, text: 'Tiempos de entrega' },
    { id: 3, text: 'Minimos de compra' },
    { id: 4, text: 'Desarrollo desde cero' },
    { id: 5, text: 'Calidad, excelencia y transparencia' }
];

export const listContentData = [
    { 
        id: 0,
        text: 'Introducimos en México las más avanzadas innovaciones y tendencias globales, respaldadas por nuestra continua investigación y desarrollo.',
        img: '/img/maquila/orderlist-image-content-1.jpg'
    },
    { 
        id: 1,
        text: 'Somos pioneros en ofrecer a los mexicanos envases con los diseños más destacados del mundo, disponibles de inmediato.',
        img: '/img/maquila/orderlist-image-content-2.jpg'
    },
    { 
        id: 2,
        text: 'Garantizamos los tiempos de entrega más rápidos en el sector maquilador, con la posibilidad de recibir tu producto en tan solo una semana.',
        img: '/img/maquila/orderlist-image-content-3.jpg'
    },
    { 
        id: 3,
        text: 'Ofrecemos mínimos de compra a partir de 100 o 500 piezas, según el envase que elijas.',
        img: '/img/maquila/orderlist-image-content-4.jpg'
    },
    { 
        id: 4,
        text: 'Nuestro equipo de científicos, altamente capacitados, desarrolla tu cosmético personalizado desde cero, siendo reconocidos como los mejores formuladores del país.',
        img: '/img/maquila/orderlist-image-content-5.jpg'
    },
    { 
        id: 5,
        text: 'Introducimos en México las más avanzadas innovaciones y tendencias globales, respaldadas por nuestra continua investigación y desarrollo.',
        img: '/img/maquila/orderlist-image-content-6.jpg'
    }
];