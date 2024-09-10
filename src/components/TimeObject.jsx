export const TimeObject = ({ children, index = '', text, isLast = false }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="rounded-full size-36 2xl:size-48 flex items-center justify-center bg-[#E0A5FF] order-2 2xl:order-[unset] z-10">
                { children }
            </div>
            <div className="relative flex items-center justify-center order-1 2xl:order-[unset]">
                <p className="rounded-full bg-white z-10 size-12 border-2 border-[#E71567] text-[#E71567] flex items-center justify-center font-medium text-[27px]">{ index }</p>
                <div hidden={ isLast } className="border-2 absolute border-[#E71567] w-[50px] 2xl:w-[230px] top-12 2xl:top-[unset] 2xl:left-0 rotate-90 2xl:rotate-0"></div>
            </div>
            <div className="2xl:mt-10 2xl:-rotate-90 w-[192px] h-[56px] flex items-center justify-center order-3 2xl:order-[unset]">
                <p className="text-[#E71567] font-light text-xl w-[145px] flex justify-end">{ text }</p>
            </div>
        </div>
    )
}
