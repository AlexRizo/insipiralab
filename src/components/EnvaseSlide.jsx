export const EnvaseSlide = ({ img = '/img/home/envase-1.png', name='slide' }) => {
    return (
        <div className='relative flex items center justify-center '>
            <img src="/img/home/labial.png" alt="mancha rosa" className="absolute top-12 translate-x-7 max-w-none h-[221px]" />
            <img src={ img } alt={ name } className="relative h-[330px]"/>
        </div>
    )
}
