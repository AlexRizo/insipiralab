import { OpenLinkIcon } from "../icons"

export const ProcessCard = ({ children, img = '', text = '', url = '/#' }) => {
    return (
        <div className="flex items-center bg-[#E71567] relative px-14 py-3 gap-10 3xl:h-52 h-44 rounded-3xl">
            <div className="3xl:w-[55px] w-6"></div>
            <div className="absolute 3xl:left-24 left-20 bottom-1 rotate-[25deg]">
                <img src={ img } className="3xl:w-[55px] w-[50px]" />
            </div>
            <div className="3xl:w-96 w-80 3xl:text-2xl text-xl text-center">
                { children }
            </div>
            <div className="h-full">
                <OpenLinkIcon className="mt-5 cursor-pointer" />
            </div>
        </div>
    )
}
