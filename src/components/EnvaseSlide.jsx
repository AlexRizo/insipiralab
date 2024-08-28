export const EnvaseSlide = ({ img = '/img/home/envase-1.png', name='slide' }) => {
    return (
        <div className='relative flex items center justify-center '>
            <img 
                src="/img/home/labial.png"
                alt="mancha rosa" 
                className="absolute top-12 3xl:translate-x-7 translate-x-5 max-w-none 3xl:h-[221px] h-[180px]"
            />
            <img src={ img } alt={ name } className="relative 3xl:h-[330px] h-[290px]"/>
        </div>
    )
}
