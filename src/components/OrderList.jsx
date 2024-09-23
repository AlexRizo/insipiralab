import { useEffect, useState } from "react";
import { OpenedIcon, OpenIcon } from "../icons"
import { orderListData, listContentData } from "../data/data";
import { useMediaQuery } from "react-responsive";

export const OrderList = ({ setIndex }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' });
    const [active, setActive] = useState(0);

    useEffect(() => setIndex(active), [active]);

    if (isMobile) {
        return (
            <ul>
                {
                    orderListData.map(item => (
                        <li 
                            key={ item.id }
                            className={`flex flex-col gap-5 px-6 cursor-pointer h-transition ${ active === item.id ? 'h-[510px]' : 'h-[100px]' }`}
                        >
                            <div className={`flex items-center justify-between w-full min-h-[100px] border-t border-[#707070] text-black ${ active === item.id && 'bg-[#E71567] border-none rounded-2xl font-bold px-3' }`} onClick={ () => setActive(item.id) }>
                                <p className="w-[230px] text-lg">{ item.text }</p>
                                <div className="w-[42px] flex items-center justify-center">
                                    <OpenIcon className={`absolute ${ item.id === active && 'animate-button' }`} width="40" />
                                    <OpenedIcon className={`absolute opacity-0 ${ item.id === active && '!opacity-100 display-transition' }`} width="40" />
                                </div>
                            </div>
                            <div className={`${ item.id === active ? 'opacity-100 scale-100 ' : 'opacity-0 scale-0 max-h-0 overflow-hidden' } append-child`}>
                                <ul className={`flex flex-col gap-6 list-content`}>
                                    <li className="flex overflow-hidden relative h-[170px] w-[full] rounded-3xl">
                                        <img src={ listContentData[item.id].img } alt="image" className="absolute" />
                                    </li>
                                    <li className="relative pl-5 pr-10 before:-translate-x-3.5 before:-translate-y-1.5 before:content-['•'] before:text-3xl before:absolute before:text-black">
                                        <p className="text-[15px] leading-7 font-light text-black w-full">{ listContentData[item.id].text }</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    } else {
        return (
            <ul className="text-black font-light text-lg xl:text-[22px] 3xl:text-2xl px-6 xl:p-0 w-full xl:w-max leading-8">
                {
                    orderListData.map((item, index) => (
                        <li 
                            key={ item.id }
                            className={`xl:w-[550px] 2xl:xl:w-[600px] w-full flex justify-between items-center relative gap-5 border-b xl:h-24 ${ index === active - 1 ? 'border-transparent' : 'border-[#707070]' } ${ item.id === active && 'bg-[#E71567] order-list xl:rounded-xl 2xl:rounded-2xl border-transparent font-bold' } p-5 xl:p-10 cursor-pointer`}
                            onClick={ () => setActive(item.id) }
                        >
                            <p className="w-[230px] xl:w-auto">{ item.text }</p>
                            <div className="w-[42px] xl:w-[49px] flex items-center justify-center">
                                <OpenIcon className={`absolute ${ item.id === active && 'animate-button' }`} width="40" />
                                <OpenedIcon className={`absolute opacity-0 ${ item.id === active && '!opacity-100 display-transition' }`} width="40" />
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
