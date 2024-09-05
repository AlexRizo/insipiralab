import { OpenLinkIcon } from "../icons"

export const ProcessCard = ({ children, img = '', url = '/#' }) => {
    return (
        <div className="flex items-center bg-[#E71567] relative py-7 pl-2 pr-10 2xl:px-14 2xl:py-3 gap-6 2xl:gap-10 min-h-24 2xl:h-44 3xl:h-52 rounded-xl 2xl:rounded-3xl w-max 2xl:w-[unset]">
            <div className="w-7 2xl:w-6 3xl:w-[55px]"></div>
            <div className="absolute left-10 2xl:left-20 3xl:left-24 bottom-1 rotate-[25deg]">
                <img src={ img } className="w-7 2xl:w-[50px] 3xl:w-[55px]" />
            </div>
            <div className="w-64 2xl:w-80 3xl:w-96 text-base leading-4 2xl:text-xl 3xl:text-2xl text-center">
                { children }
            </div>
            <div className="h-full absolute right-3 top-2 2xl:block 2xl:top-[unset] 2xl:right-[unset]">
                <OpenLinkIcon className="2xl:mt-5 cursor-pointer" width={13} />
            </div>
        </div>
    )
}
