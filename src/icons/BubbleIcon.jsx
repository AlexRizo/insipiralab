export const BubbleIcon = ( { x, y, delay, size = 'size-36', size2 = 'size-24', hidden = false, blur = 'blur-lg' }) => {
    return (
        <div className={`absolute ${ size } bg-[#E71567] rounded-full floating-animation ${ blur } ${x} ${y} ${ delay } `} hidden={!!hidden}>
            <div className={`absolute inset-0 m-auto ${ size2 } bg-[#E71567] rounded-full blur-sm`}></div>
        </div>
    )
}
