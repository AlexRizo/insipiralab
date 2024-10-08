import { useNavigate } from "react-router-dom";
import { useScreen } from "../hooks/useScreen"
import { OpenLinkIcon } from "../icons"

export const ProcessCard = ({ children, img = '', url = '/#' }) => {
    const { screen } = useScreen();

    const navigate = useNavigate();

    const handleNavigate = () => {
        if (url) return navigate(url);
    };
    
    return (
        <div 
            onClick={ handleNavigate }
            className="group flex items-center bg-[#E71567] relative py-7 pl-2 pr-10 xl:px-14 xl:py-3 gap-6 xl:gap-10 min-h-24 xl:h-44 3xl:h-52 rounded-xl xl:rounded-3xl w-max xl:w-[unset] cursor-none">
            <div className="w-7 xl:w-6 3xl:w-[55px]"></div>
            <div className="absolute left-10 xl:left-20 3xl:left-24 bottom-1 rotate-[25deg]">
                <img src={ img } className="w-7 xl:w-[50px] 3xl:w-[55px] group-hover:scale-110 group-hover:-rotate-6 transition" />
            </div>
            <div className="w-64 xl:w-80 3xl:w-96 text-base leading-4 xl:text-xl 3xl:text-2xl text-center">
                { children }
            </div>
            <div className="h-full absolute right-3 top-2 xl:static xl:top-[unset] xl:right-[unset]">
                {
                    screen  === 1 ? <OpenLinkIcon className="xl:mt-5 cursor-none" width="12" /> : <OpenLinkIcon className="xl:mt-5 cursor-none"  />
                }
            </div>
        </div>
    )
}