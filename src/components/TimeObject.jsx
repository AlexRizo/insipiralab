export const TimeObject = ({ children, index = '', text, isLast = false }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="rounded-full size-48 flex items-center justify-center bg-[#E0A5FF]">
                { children }
            </div>
            <div className="relative flex items-center justify-center">
                <p className="rounded-full bg-white z-10 size-12 border-2 border-[#E71567] text-[#E71567] flex items-center justify-center font-medium text-[27px]">{ index }</p>
                <div hidden={ isLast } className="border-2 absolute border-[#E71567] w-[230px] left-0"></div>
            </div>
            <div className="mt-10 -rotate-90 w-[192px] h-[56px] flex items-center justify-center">
                <p className="text-[#E71567] font-light text-xl w-[140px] flex justify-end">{ text }</p>
            </div>
        </div>
    )
}
