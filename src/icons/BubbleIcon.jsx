import { Player } from "@lottiefiles/react-lottie-player"

export const BubbleIcon = ({ size = 'size-16', x = 'left-0', y = 'top-0', backdrop = 'backdrop-blur-lg', custom = '', hidden = false }) => {
    return (
        <div className={`absolute flex items-center justify-center ${ x } ${ y } ${ hidden && 'hidden' } animate-bounce`}>
            <span 
                className={`${ size } bg-[#E71567] rounded-full`}
            ></span>
            <span className={`absolute ${ backdrop } z-10 rounded-full ${ custom ? custom : 'w-[calc(100%+50px)] h-[calc(100%+70px)]' }`}></span>
        </div>
    )
}
