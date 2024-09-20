export const BubbleIcon = ( { x, y, delay, size = 'size-36', size2 = 'size-24', hidden = false }) => {
    return (
        <div class={`absolute ${ size } bg-[#E71567] rounded-full blur-lg floating-animation ${x} ${y} ${ delay } `} hidden={!!hidden}>
            <div class={`absolute inset-0 m-auto ${ size2 } bg-[#E71567] rounded-full blur-sm`}></div>
        </div>
    )
}
