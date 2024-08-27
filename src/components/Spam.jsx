export const Spam = ({ text }) => {
    return (
        <div className="flex flex-col uppercase font-thin">
            <span className="text-[#E71567] text-[46px] leading-10">
                { text }
            </span>
            <span className="text-[#E71567]/70 text-[46px] leading-10">
                { text }
            </span>
            <span className="text-[#E71567]/40 text-[46px] leading-10">
                { text }
            </span>
            <span className="text-[#E71567]/30 text-[46px] leading-10">
                { text }
            </span>
        </div>
    )
}
