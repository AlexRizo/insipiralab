export const MaquilaCard = ({ text = '', bgColor = 'bg-gray-500', img = '', classImage = 'top-0 left-0' }) => {
    return (
        <div 
            className={ `hover:scale-110 hover:z-10 transition-all relative rounded-3xl 3xl:w-[235px] 3xl:h-[587px] w-[200px] h-[498px] flex items-end px-8 py-2 3xl:text-[25px] text-[23px] font-light ${ bgColor } overflow-hidden` }
        >
            <img src={ img } className={`absolute ${ classImage }`} />
            <p className="-rotate-90 origin-left absolute w-max">{ text }</p>
        </div>
    )
}