export const TimeObject = ({ children, index = '', text, isLast = false }) => {
    return (
        <div className="flex flex-col items-center gap-5 w-[180px] xl:w-auto my-2">
            <div className="rounded-full size-40 xl:size-48 flex items-center justify-center bg-[#E0A5FF] order-2 xl:order-[unset] z-10">
                { children }
            </div>
            <div className="relative flex items-center justify-center order-1 xl:order-[unset]">
                <p className="rounded-full bg-white z-10 size-16 xl:size-12 border-2 border-[#E71567] text-[#E71567] flex items-center justify-center font-medium text-[27px]">{ index }</p>
                <div className={`border-2 absolute border-[#E71567] w-[50px] xl:w-[230px] top-16 xl:top-[unset] xl:left-0 rotate-90 xl:rotate-0 ${ isLast && 'xl:hidden' }`}></div>
            </div>
            <div className="xl:mt-10 xl:-rotate-90 xl:w-[192px] h-[40px] xl:h-[56px] flex items-center justify-center order-3 xl:order-[unset]">
                <p className="text-[#E71567] font-light text-center text-lg leading-5 xl:leading-normal xl:text-xl xl:w-[145px] flex justify-end">{ text }</p>
            </div>
        </div>
    )
}
