import { useRef, useState } from "react";
import { OpenIcon } from "../icons"

export const OrderList = () => {
    const [items, setItems] = useState([
        { id: 0, text: 'Invitación y expertise' },
        { id: 1, text: 'Los mejores envases en México' },
        { id: 2, text: 'Tiempos de entrega' },
        { id: 3, text: 'Minimos de compra' },
        { id: 4, text: 'Desarrollo desde cero' },
        { id: 5, text: 'Calidad y transparencia' }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);


    const handleNewIndex = (item) => {
        const newItems = items.filter(i => i.id !== item.id);
        setCurrentIndex(item.id);

        setTimeout(() => {
            setItems([
                item,
                ...newItems
            ])
        }, 300);
    }
    
    return (
        <ul className="text-black font-light text-[25px]">
            {
                items.map(item => (
                    <li 
                        key={ item.id }
                        className={`flex gap-5 ${ item.id === currentIndex && 'bg-[#E71567] order-list' } p-5 cursor-pointer`}
                        onClick={ () => handleNewIndex(item) }
                    >
                        <p>{item.text}</p>
                        <OpenIcon />
                    </li>
                ))
            }
        </ul>
    )
}
