import { useState } from "react";
import { OpenedIcon, OpenIcon } from "../icons"

export const OrderList = ({ setIndex }) => {
    const [items, setItems] = useState([
        { id: 0, text: 'Invitación y expertise' },
        { id: 1, text: 'Los mejores envases en México' },
        { id: 2, text: 'Tiempos de entrega' },
        { id: 3, text: 'Minimos de compra' },
        { id: 4, text: 'Desarrollo desde cero' },
        { id: 5, text: 'Calidad, excelencia y transparencia' }
    ]);

    const [localIndex, setLocalIndex] = useState(0);
    const [animation, setAnimation] = useState('opacity-100');


    const handleNewIndex = (item) => {
        const newItems = items.filter(i => i.id !== item.id);
        if (item.id === localIndex) return;
        setLocalIndex(item.id);
        setIndex(item.id);
        setAnimation('opacity-0');

        setTimeout(() => {
            setItems([
                item,
                ...newItems
            ])
            setAnimation('opacity-100');
        }, 500);
    }
    
    return (
        <ul className="text-black font-light text-[25px] w-max">
            {
                items.map(item => (
                    <li 
                        key={ item.id }
                        className={`w-[617px] flex justify-between items-center relative gap-5 border-b h-32 border-[#707070] ${ item.id === localIndex && 'bg-[#E71567] order-list rounded-[2rem] border-transparent font-bold' } p-8 cursor-pointer ${ item.id === localIndex && animation ? animation : '' }`}
                        onClick={ () => handleNewIndex(item) }
                    >
                        <p>{item.text}</p>
                        <div className="w-[49px] flex items-center">
                            <OpenIcon className={`absolute ${ item.id === localIndex && 'animate-button' }`} />
                            <OpenedIcon className={`absolute opacity-0 ${ item.id === localIndex && '!opacity-100 display-transition' }`} />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
