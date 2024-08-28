import { Button } from './Button'

export const NewsSlide = ({ isActive = false, title = '', author = '', img = '', children }) => {
    return (
        <>
            <div className={`top-0 left-0 w-full h-full absolute ${ img } bg-no-repeat bg-cover bg-center bg-fixed bg-clip-content`}></div>
            <div className='relative z-10 bg-black/60 flex flex-col justify-between text-white w-full h-full text-left p-6 font-thin'>
                <div className='flex flex-col gap-10'>
                    <h1 className="3xl:text-2xl text-xl">{ title }</h1>
                    <h2 className="uppercase 3xl:text-xl text-lg">{ author }</h2>
                </div>
                <div className='w-full'>
                    { children }
                    <Button 
                        className={`ml-auto opacity-0 3xl:text-[13px] text-[11px] ${ isActive && 'animate-button_fade' } animation-delay-2000 relative 3xl:px-[4.5rem] px-16`}
                        text="LEER MÁS"
                        button={ 0 }
                        iconClass='absolute right-4'
                    />
                </div>
            </div>
        </>
    )
}
