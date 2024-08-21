import { Button } from './Button'

export const NewsSlide = ({ isActive = false }) => {
    return (
        <>
            <div className="top-0 left-0 w-full h-full absolute bg-[url('./img/home/news-slider-imagen-1.jpg')]"></div>
            <div className='relative z-10 bg-black/70 flex-col text-white w-full h-full text-left p-8'>
                <div className='flex flex-col gap-10'>
                    <h1 className="text-2xl">Embellecen a la mujer con<br/> cosméticos sustentables</h1>
                    <h2 className="uppercase text-xl">El Informador</h2>
                </div>
                <div className='w-full'>
                    <p className="text-lg">
                    En medio de mucha<br/> necesidad<br/>
                    económica y desesperación<br/> por 
                    la pandemia del<br/> COVID-19,<br/>
                    Denisse Reynoso comenzó<br/> a 
                    elaborar pomadas y<br/> cremas en 
                    el patio de la<br/> casa de sus 
                    papás. Así<br/> nació Gardenia 
                    Naturals.
                    </p>
                    <Button className={`ml-auto opacity-0 text-sm ${ isActive && 'animate-button_fade' } animation-delay-2000`} text="LEER MÁS" />
                </div>
            </div>
        </>
    )
}
