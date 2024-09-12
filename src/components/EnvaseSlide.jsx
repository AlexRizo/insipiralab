export const EnvaseSlide = ({ img = '/img/home/envase-1.png', name='slide' }) => {
    return (
        <div className='relative flex items center justify-center '>
            <img 
                src="/img/home/labial.png"
                className="absolute top-12 3xl:translate-x-7 translate-x-5 max-w-none h-56 xl:h-[180px] 3xl:h-[221px]"
            />
            <img src={ img } alt={ name } className="relative xl:h-[290px] 3xl:h-[330px]"/>
        </div>
    )
}
