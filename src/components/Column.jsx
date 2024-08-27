export const Column = ({ title = '', text = '', img = '', reverse = false, customWidth = 'w-[230px]' }) => {
    return (
        <div className={`flex ${ reverse ? 'flex-col-reverse' : 'flex-col' } gap-4 w-full max-w-[327px]`}>
            <span className="rounded-2xl overflow-hidden h-[329px]">
                <img src={ img } className="w-full" />
            </span>
            <span className="text-center font-light bg-[#E0E0E0] h-[527px] rounded-2xl flex flex-col justify-center gap-3">
                <h1 className="text-[#E71567] text-2xl">{ title }</h1>
                <p className={`text-black text-xl ${ customWidth } mx-auto`}>
                    { text }
                </p>
            </span>
        </div>
    )
}
