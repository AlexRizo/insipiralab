import { OpenLinkIcon, OpenLinkShortIcon } from "../icons"

export const Button = ({ text = '', className = '', button = 1, iconClass = '', iconColor = '#fff', WIcon = '', HIcon = '' }) => {
    return (
        <button 
            className={ `py-2.5 2xl:py-4 px-6 2xl:px-12 w-max border rounded-full text-xs 2xl:text-[22px] font-light flex items-center gap-6 ${ className }` }>
            <span>{ text }</span> 
            { button ?
                <>
                    <OpenLinkIcon className={ `${ iconClass } hidden 2xl:block` } color={ iconColor } width={WIcon} height={HIcon} />
                    <OpenLinkIcon className={ `${ iconClass } 2xl:hidden` } color={ iconColor } width={10} height={10} />
                </>
                     :
                <>
                    <OpenLinkShortIcon className={ `${ iconClass } hidden 2xl:block` } color={ iconColor } width={WIcon} height={HIcon} />
                    <OpenLinkShortIcon className={ `${ iconClass } 2xl:hidden` } color={ iconColor } width={10} height={10} /> 
                </>
            }
        </button>
    )
}
