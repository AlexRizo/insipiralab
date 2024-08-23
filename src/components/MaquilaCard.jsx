export const MaquilaCard = ({ text = '', img = '' }) => {
    return (
        <div 
            className={ `hover:scale-110 hover:z-10 transition-all relative rounded-3xl w-[225px] h-[574px] bg-no-repeat bg-cover flex items-end px-6 py-2 text-[25px] font-light ${ img }` }
        >
            <p className="-rotate-90 origin-left absolute w-max">{ text }</p>
        </div>
    )
}