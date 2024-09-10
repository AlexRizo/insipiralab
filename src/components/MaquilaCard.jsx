export const MaquilaCard = ({ text = '', bgColor = 'bg-gray-500', img = '', classImage = '2xl:top-0 2xl:left-0' }) => {
    return (
        <div 
            className={ `hover:scale-110 hover:z-10 transition-all relative rounded-2xl 2xl:rounded-3xl w-[155px] h-[244px] 2xl:w-[200px] 2xl:h-[498px] 3xl:w-[235px] 3xl:h-[587px] flex items-center 2xl:items-end justify-center px-8 py-2 2xl:p-0 text-xl 2xl:text-[23px] 3xl:text-[25px] font-light ${ bgColor } overflow-hidden` }
        >
            <img src={ img } className={`absolute ${ classImage }`} />
            <p className="-rotate-90 origin-left absolute w-max left-5 bottom-0">{ text }</p>
        </div>
    )
}