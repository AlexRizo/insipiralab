import { OpenLinkIcon, OpenLinkShortIcon } from "../icons"

export const Button = ({ text = '', className = '', button = 1, iconClass = '', iconColor = '#fff', WIcon = '', HIcon = '' }) => {
    return (
        <button 
            className={ `py-4 px-12 w-max border rounded-full text-[22px] font-light flex items-center gap-6 ${ className }` }>
            <span>{ text }</span> 
            { button ? <OpenLinkIcon className={ iconClass } color={ iconColor } width={WIcon} height={HIcon} /> : <OpenLinkShortIcon className={ iconClass } color={ iconColor } width={WIcon} height={HIcon} /> }
        </button>
    )
}
