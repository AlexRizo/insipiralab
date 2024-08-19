import { OpenLinkIcon } from "../icons"

export const ProcessCard = ({children, img = '', text = '', url = '/#' }) => {
    return (
        <div className="flex items-center bg-[#E71567] relative px-14 py-3 gap-10 h-52 rounded-3xl">
            <div className="w-[55px]"></div>
            <div className="absolute left-24 bottom-1 rotate-[25deg]">
                <img src={ img } alt="" width="55px" />
            </div>
            <div className="w-96 text-2xl text-center">
                { children }
            </div>
            <div className="h-full">
                <OpenLinkIcon className="mt-5 cursor-pointer" />
            </div>
        </div>
    )
}
