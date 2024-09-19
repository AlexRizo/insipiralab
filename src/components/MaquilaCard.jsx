import { useEffect, useState } from "react"

export const MaquilaCard = ({ text = '', bgColor = 'bg-gray-500', img = '', preload, classImage = 'xl:top-0 xl:left-0' }) => {
    const [selected, setSelected] = useState(false)
    const [preloading, setPreloading] = useState(true)
    
    const hoverEffect = () => {
        setSelected(!selected)
    }

    useEffect(() => {
        setTimeout(() => {
            setPreloading(false)
        }, 10)
    }, []);
    
    return (
        <div 
            className={ `hover:scale-110 hover:z-10 transition-all bg-no-repeat relative rounded-2xl xl:rounded-3xl w-[155px] h-[244px] xl:w-[200px] xl:h-[498px] 3xl:w-[235px] 3xl:h-[587px] flex items-center justify-center px-8 py-2 xl:p-0 text-xl xl:text-[23px] 3xl:text-[25px] font-light ${ bgColor } overflow-hidden ${ preloading && preload }` }
            onMouseEnter={ hoverEffect }
            onMouseLeave={ hoverEffect }
        >
            <img src={ img } className={`absolute ${ classImage }`} hidden={selected} />
            <p className="-rotate-90 origin-left absolute w-max left-5 bottom-0">{ text }</p>
        </div>
    )
}