import { useEffect, useState } from "react";
import { listContentData } from "../data/data";
export const ListContent = ({ index }) => {
    const [currentIndex, setCurrentIndex] = useState({ id: 0, text: '', img: '' });
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        const item = listContentData.find(i => i.id === index);
        setAnimation('opacity-0');
        
        setTimeout(() => {
            setCurrentIndex(item);
            setAnimation('');
        }, 500);
    }, [index]);

    return (
        <ul className={`flex flex-col gap-10 list-content ${ animation }`}>
            <li className="flex overflow-hidden relative h-[290px] w-[500px] rounded-3xl">
                <img src={ currentIndex.img } alt="image" className="absolute" />
            </li>
            <li className="relative pl-12 before:-translate-x-3.5 before:-translate-y-1.5 before:content-['•'] before:text-3xl before:absolute before:text-black">
                <p className="text-lg 2xl:text-xl font-light text-black w-[445px]">{ currentIndex.text }</p>
            </li>
        </ul>
    )
}
