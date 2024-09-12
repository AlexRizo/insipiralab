import { useState } from "react";
import { ArrowListItemIcon } from "../icons"

const values = [
    {
        title: 'Integridad personal',
        description: 'En INSPIRA LAB, la integridad es el pilar de todo lo que hacemos. Nos comprometemos a actuar con honestidad y ética, asegurándonos de que cada producto que creamos cumpla con los más altos estándares de calidad y transparencia.',
        img: '/img/nosotros/nosotros-grid-1.jpg'
    },
    {
        title: 'Creatividad e innovación',
        description: 'Creemos en el poder de la creatividad y la innovación para transformar el mundo de la cosmética. Cada formulación es una obra de arte, cada producto es una expresión de nuestra pasión por la belleza y la ciencia.',
        img: '/img/nosotros/nosotros-grid-2.jpg'
    },
    {
        title: 'Productividad',
        description: 'La eficiencia y la eficacia son claves en nuestro proceso de producción. Nos esforzamos por ser altamente productivos, optimizando recursos y tiempos para ofrecer productos de excelencia sin comprometer la calidad.',
        img: '/img/nosotros/nosotros-grid-3.jpg'
    },
    {
        title: 'Conciencia',
        description: 'Somos conscientes del impacto de nuestras acciones y decisiones. Nos dedicamos a crear cosméticos que no solo realzan la belleza, sino que también respeten y protejan el medio ambiente. Cada ingrediente es cuidadosamente seleccionado, y nuestras prácticas de producción son sostenibles y responsables.',
        img: '/img/nosotros/nosotros-grid-4.jpg'
    }
];

export const ValuesListComponent = () => {
    const [active, setActive] = useState(0);
    
    return (
        <ul className="w-full max-w-[330px]">
            {
                values.map((value, index) => (
                    <li key={ index }>
                        <div 
                            className={`text-lg ${ active === index ? 'text-black font-bold bg-[#E71567]' : 'text-[#E71567] font-thin' } flex items-center justify-between w-full border border-[#E71567] rounded-full py-3 px-6 mb-7`}
                            onClick={ () => setActive(index) }
                        >
                            <p>{ value.title }</p>
                            <ArrowListItemIcon active={ active === index } />
                        </div>
                        <div className={`flex flex-col items-center gap-4 [transition:max-height_.5s_ease] ${ active === index ? 'max-h-[530px] mb-7' : 'max-h-0' } overflow-hidden`} >
                            <p className="text-black text-[15px] text-center px-[0.3rem] leading-5" >{ value.description }</p>
                            <img src={ value.img } className="rounded-2xl" />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
