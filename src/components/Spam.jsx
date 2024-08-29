export const Spam = ({ text }) => {
    return (
        <div className="flex flex-col uppercase 3xl:text-5xl text-[40px] 3xl:leading-10 leading-9 font-thin">
            <span className="text-[#E71567]">
                { text }
            </span>
            <span className="text-[#E71567]/70">
                { text }
            </span>
            <span className="text-[#E71567]/40">
                { text }
            </span>
            <span className="text-[#E71567]/30">
                { text }
            </span>
        </div>
    )
}
