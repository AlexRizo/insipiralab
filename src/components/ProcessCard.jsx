import { OpenLinkIcon } from "../icons"

export const ProcessCard = ({ children, img = '', url = '/#' }) => {
    return (
        <div className="flex items-center bg-[#E71567] relative py-7 pl-2 pr-10 xl:px-14 xl:py-3 gap-6 xl:gap-10 min-h-24 xl:h-44 3xl:h-52 rounded-xl xl:rounded-3xl w-max xl:w-[unset]">
            <div className="w-7 xl:w-6 3xl:w-[55px]"></div>
            <div className="absolute left-10 xl:left-20 3xl:left-24 bottom-1 rotate-[25deg]">
                <img src={ img } className="w-7 xl:w-[50px] 3xl:w-[55px]" />
            </div>
            <div className="w-64 xl:w-80 3xl:w-96 text-base leading-4 xl:text-xl 3xl:text-2xl text-center">
                { children }
            </div>
            <div className="h-full absolute right-3 top-2 xl:static xl:top-[unset] xl:right-[unset]">
                <OpenLinkIcon className="xl:mt-5 cursor-pointer"  /> 
            </div>
        </div>
    )
}

// width={13}