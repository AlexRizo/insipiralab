export const Column = ({ title = '', text = '', img = '', reverse = false, customWidth = 'w-[230px]' }) => {
    return (
        <div className={`flex ${ reverse ? 'flex-col-reverse' : 'flex-col' } gap-4 w-full 3xl:max-w-[327px] 2xl:max-w-[300px] xl:max-w-[260px]`}>
            <span className="rounded-2xl overflow-hidden 3xl:h-[329px] 2xl:h-[290px] h-[250px]">
                <img src={ img } className="w-full" />
            </span>
            <span className="text-center font-light bg-[#E0E0E0] 3xl:h-[527px] 2xl:h-[490px] h-[470px] rounded-2xl flex flex-col justify-center gap-3">
                <h1 className="text-[#E71567] text-xl 2xl:text-2xl">{ title }</h1>
                <p className={`text-black text-lg leading-5 2xl:text-xl ${ customWidth } mx-auto`}>
                    { text }
                </p>
            </span>
        </div>
    )
}
