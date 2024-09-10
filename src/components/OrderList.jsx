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
        setItems([
            item,
            ...newItems
        ])
        setAnimation('opacity-100 mb-96');
    }
    
    return (
        <ul className="text-black font-light text-lg 2xl:text-[23.5px] 3xl:text-2xl px-6 2xl:p-0 w-full 2xl:w-max leading-8">
            {
                items.map(item => (
                    <li 
                        key={ item.id }
                        className={`2xl:w-[600px] w-full flex justify-between items-center relative gap-5 border-b 2xl:h-28 border-[#707070] ${ item.id === localIndex && 'bg-[#E71567] order-list rounded-2xl 2xl:rounded-[2rem] border-transparent font-bold mb-96' } p-5 2xl:p-10 cursor-pointer ${ item.id === localIndex && animation ? animation : '' }`}
                        onClick={ () => handleNewIndex(item) }
                    >
                        <p className="w-[230px] 2xl:w-auto">{ item.text }</p>
                        <div className="w-[42px] 2xl:w-[49px] flex items-center justify-center">
                            <OpenIcon className={`absolute ${ item.id === localIndex && 'animate-button' }`} width="40" />
                            <OpenedIcon className={`absolute opacity-0 ${ item.id === localIndex && '!opacity-100 display-transition' }`} width="40" />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
