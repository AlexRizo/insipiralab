import { Button } from './Button'

export const NewsSlide = ({ isActive = false, title = '', author = '', img = '', children }) => {
    return (
        <>
            <div className={`top-0 left-0 w-full h-full absolute ${ img } bg-no-repeat bg-cover bg-center bg-fixed bg-clip-content`}></div>
            <div className='relative z-10 bg-black/60 flex flex-col justify-between text-white w-full h-full text-left p-8 font-thin'>
                <div className='flex flex-col gap-10 w-[310px]'>
                    <h1 className="text-2xl">{ title }</h1>
                    <h2 className="uppercase text-xl">{ author }</h2>
                </div>
                <div className='w-full'>
                    { children }
                    <Button 
                        className={`ml-auto opacity-0 text-[13px] ${ isActive && 'animate-button_fade' } animation-delay-2000 relative px-[4.5rem]`}
                        text="LEER MÁS"
                        button={ 0 }
                        iconClass='absolute right-4'
                    />
                </div>
            </div>
        </>
    )
}
