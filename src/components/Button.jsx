import { useNavigate } from "react-router-dom";
import { OpenLinkIcon, OpenLinkShortIcon } from "../icons"

export const Button = ({ text = '', className = '', button = 1, iconClass = '', iconColor = '#fff', WIcon = '', HIcon = '', path = '' }) => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        if (path) return navigate(path);
    };
    
    return (
        <button 
            className={ `py-2.5 xl:py-4 px-6 xl:px-12 w-max border rounded-full text-xs xl:text-[22px] font-light flex items-center gap-6 ${ className }` }
            onClick={ handleNavigate }    
        >
            <span>{ text }</span>
            { button ?
                <>
                    <OpenLinkIcon className={ `${ iconClass } hidden xl:block` } color={ iconColor } width={WIcon} height={HIcon} />
                    <OpenLinkIcon className={ `${ iconClass } xl:hidden` } color={ iconColor } width={10} height={10} />
                </>
                     :
                <>
                    <OpenLinkShortIcon className={ `${ iconClass } hidden xl:block` } color={ iconColor } width={WIcon} height={HIcon} />
                    <OpenLinkShortIcon className={ `${ iconClass } xl:hidden` } color={ iconColor } width={10} height={10} /> 
                </>
            }
        </button>
    )
}
