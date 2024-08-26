import { useEffect, useState } from "react";

const indexes = [
    { 
        id: 0,
        text: 'Introducimos en México las más avanzadas innovaciones y tendencias globales, respaldadas por nuestra continua investigación y desarrollo.',
        img: './img/maquila/orderlist-image-content-1.jpg'
    },
    { 
        id: 1,
        text: 'Somos pioneros en ofrecer a los mexicanos envases con los diseños más destacados del mundo, disponibles de inmediato.',
        img: './img/maquila/orderlist-image-content-2.jpg'
    },
    { 
        id: 2,
        text: 'Garantizamos los tiempos de entrega más rápidos en el sector maquilador, con la posibilidad de recibir tu producto en tan solo una semana.',
        img: './img/maquila/orderlist-image-content-3.jpg'
    },
    { 
        id: 3,
        text: 'Ofrecemos mínimos de compra a partir de 100 o 500 piezas, según el envase que elijas.',
        img: './img/maquila/orderlist-image-content-4.jpg'
    },
    { 
        id: 4,
        text: 'Nuestro equipo de científicos, altamente capacitados, desarrolla tu cosmético personalizado desde cero, siendo reconocidos como los mejores formuladores del país.',
        img: './img/maquila/orderlist-image-content-5.jpg'
    },
    { 
        id: 5,
        text: 'Introducimos en México las más avanzadas innovaciones y tendencias globales, respaldadas por nuestra continua investigación y desarrollo.',
        img: './img/maquila/orderlist-image-content-6.jpg'
    }
]


export const ListContent = ({ index }) => {
    const [currentIndex, setCurrentIndex] = useState({ id: 0, text: '', img: '' });
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        const item = indexes.find(i => i.id === index);
        setAnimation('opacity-0');
        
        setTimeout(() => {
            setCurrentIndex(item);
            setAnimation('');
        }, 500);
    }, [index]);

    return (
        <ul className={`flex flex-col gap-10 list-content ${ animation }`}>
            <li className="flex overflow-hidden relative h-[324px] w-[600px] rounded-3xl">
                <img src={ currentIndex.img } alt="image" className="absolute" />
            </li>
            <li className="relative pl-12 before:-translate-x-3.5 before:-translate-y-1.5 before:content-['•'] before:text-3xl before:absolute before:text-black">
                <p className="text-xl font-light text-black w-[445px]">{ currentIndex.text }</p>
            </li>
        </ul>
    )
}
