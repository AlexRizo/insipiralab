import { Button } from './Button'

export const NewsSlide = ({ isActive = false, title = '', author = '', img = '', url = '', children }) => {
    return (
        <>
            <div className={`top-0 left-0 !w-full !h-full absolute ${ img } bg-no-repeat bg-cover bg-center bg-fixed bg-clip-content`}></div>
            <div className='relative z-10 bg-black/60 flex flex-col justify-between text-white w-full h-full text-left p-6 font-thin'>
                <div className='flex flex-col gap-10'>
                    <h1 className="3xl:text-2xl xl:text-xl text-[22]">{ title }</h1>
                    <h2 className="uppercase 3xl:text-xl xl:text-lg text-sm">{ author }</h2>
                </div>
                <div className='w-full'>
                    { children }
                    <div onClick={ () => window.open(url, '_BLANK') } className='w-min ml-auto'>
                        <Button 
                            className={`xl:opacity-0 3xl:text-[13px] xl:!text-[11px] text-xs ${ isActive && 'xl:animate-button_fade' } animation-delay-2000 relative py-4 px-[3.75rem] xl:px-16 3xl:px-[4.5rem]`}
                            text="LEER MÁS"
                            button={ 0 }
                            iconClass='absolute right-4'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}