import { OpenLinkIcon, OpenLinkShortIcon } from "../icons"

export const Button = ({ text = '', className = '', button = 1, buttonClass = '' }) => {
    return (
        <button 
            className={ `py-4 px-12 w-max border rounded-full text-[22px] font-light ${ className } flex items-center gap-6` }>
            <span>{ text }</span> 
            { button ? <OpenLinkIcon className={ buttonClass } /> : <OpenLinkShortIcon className={ buttonClass } /> }
        </button>
    )
}
