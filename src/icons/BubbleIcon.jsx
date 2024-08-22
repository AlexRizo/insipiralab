export const BubbleIcon = ({ size = 'size-16', x = 'left-0', y = 'top-0', backdrop = 'backdrop-blur-lg' }) => {
    return (
        <div className={`absolute flex items-center justify-center ${ x } ${ y }`}>
            <span 
                className={`${ size } bg-[#E71567] rounded-full`}
            ></span>
            <span className={`absolute ${ backdrop } z-10 rounded-full w-[calc(100%+70px)] h-[calc(100%+70px)]`}></span>
        </div>
    )
}
