import { OpenLinkIcon } from "../icons"

export const ProcessCard = () => {
    return (
        <div className="flex bg-[#E71567] relative py-2 w-">
            <div></div>
            <div className="absolute">
                <img src="/img/home/proceso-empaque-1.png" alt="" width="55px" />
            </div>
            <div>
                <span>Desarrollo de producto desde cero</span>
            </div>
            <div>
                <OpenLinkIcon />
            </div>
        </div>
    )
}
