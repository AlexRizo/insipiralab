import { OpenLinkIcon } from "../icons"

export const Button = ({ text, className }) => {
    return (
        <button 
            className={ `py-4 px-12 w-max border rounded-full text-[22px] font-light ${ className } flex items-center gap-6` }>
            <span>{ text }</span> 
            <OpenLinkIcon />
        </button>
    )
}
