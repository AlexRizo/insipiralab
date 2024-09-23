import { Art1 } from "../art"
import { Button, ExplosionVideo, ExplosionVideoMobile, GridCol, InspiralabVideoGraphic, InspiralabVideoGraphicMobile, Spam, ValuesListComponent } from "../components"
import { GridData } from "../data/data"
import { ArrowIcon, BubbleIcon, InspiralabHeaderIcon } from "../icons"
import { useScreen } from "../hooks/useScreen"
import { WeInspireBeautyAnim, WeInspireBlockMobile } from "../lottie"

export const NosotrosPage = () => {
    const { screen } = useScreen();
    
    return (
        <section className="overflow-hidden">
            <div className="container relative m-auto flex flex-col items-center justify-center h-screen gap-16 xl:gap-36">
                {
                    screen === 1 ? (<ExplosionVideoMobile />) : (<ExplosionVideo />)
                }
                <article className="flex flex-col items-center font-thin gap-4 z-20">
                    <h1 className="text-3xl xl:text-5xl">Manifiesto</h1>
                    <p className="text-lg xl:text-xl leading-5 xl:leading-10 w-[280px] xl:w-auto text-center xl:text-start">
                        <span className="font-medium">INSPIRA LAB</span> es un universo donde 
                        la belleza, creatividad y la ciencia 
                        se<br/> encuentran en perfecta armonía. 
                        Somos una marca que se dedica con 
                        pasión y<br/> entusiasmo a la creación de 
                        cosméticos innovadores en donde 
                        ofrecemos una<br className="hidden xl:block"/> gama excepcional de 
                        envases únicos y exclusivos en México.
                    </p>
                </article>

                <article className="flex flex-col items-center font-thin gap-4 z-20">
                    <InspiralabHeaderIcon className="hidden xl:block" />
                    <InspiralabHeaderIcon className="xl:hidden" width="205" />
                    <p className="text-lg xl:text-xl leading-5 xl:leading-10 w-[200px] xl:w-auto text-center xl:text-start">
                        Donde la ciencia cosmética y la 
                        innovación se unen para inspirar 
                        la belleza. 
                    </p>
                </article>

                <ArrowIcon className="absolute bottom-24 hidden xl:block" />
            </div>

            <div className="w-full h-[500px] relative flex items-center justify-center bg-[#E0A5FF] overflow-hidden py-40 xl:py-36">
                {
                    screen === 1 ? <WeInspireBlockMobile/> : <WeInspireBeautyAnim />
                }
            </div>

            <div className="relative overflow-hidden flex flex-col xl:flex-row justify-center gap-8 xl:gap-16 font-light w-full bg-[#F5F5F5] text-black px-8 xl:px-0 py-16 xl:py-32">
                <BubbleIcon x="right-7 xl:right-[10%] 2xl:right-[20%]" y="top-32 xl:top-20" size="size-8 xl:size-14" size2="xl:size-20" delay="floating-animation-2" blur="blur" />
                <BubbleIcon x="right-24" y=" top-10" size="size-14 xl:hidden" size2="" delay="float-animation-mobile-2" blur="blur" />
                <div className="relative">
                    <h1 className="w-min text-[#E71567] text-3xl xl:text-[42px] leading-[1]">
                        By
                        Gardenia
                        Naturals
                    </h1>
                    <BubbleIcon x="left-10" y=" bottom-10" size="size-32 hidden xl:block" />
                </div>
                <div className="leading-5 xl:leading-8 text-[15px] xl:text-base pr-2.5 xl:p-0 z-20 relative">
                    <p>
                        En 2020, un grupo de científicos 
                        visionarios se unieron con un sueño<br className="hidden xl:block"/> en 
                        común: crear cosméticos naturales de alta 
                        calidad que inspiren belleza y<br className="hidden xl:block"/> creatividad. 
                        Así nació Gardenia Naturals, un 
                        emprendimiento lleno de pasión y<br className="hidden xl:block"/> dedicación. 
                        Con el tiempo, nuestro expertise y 
                        compromiso nos han llevado a<br className="hidden xl:block"/> ser reconocidos 
                        como los mejores formuladores de México.
                    </p>
                    <br />
                    <p>
                        Hoy, en alianza con empresarias líderes, 
                        hemos ampliado nuestras fronteras<br className="hidden xl:block"/> para 
                        ofrecer servicios de fabricación de 
                        cosméticos a marcas extranjeras que<br className="hidden xl:block"/> buscan 
                        abrir mercado en México, bajo el nombre de 
                        INSPIRA LAB. Nuestro<br className="hidden xl:block"/> viaje ha sido una mezcla 
                        de ciencia, naturaleza y creatividad, y nos 
                        sentimos<br className="hidden xl:block"/> orgullosos de cada paso que hemos 
                        dado para llegar hasta aquí.
                    </p>
                </div>
                <BubbleIcon x="left-10" y="bottom-1" size="size-8 xl:hidden" size2="" delay="floating-animation-2" blur="blur z-20" />
            </div>

            <div className="w-full flex flex-col items-center justify-center relative bg-white">
                <div className="w-full h-auto xl:max-h-[600px] overflow-hidden relative">
                    {
                        screen === 1 ? <InspiralabVideoGraphicMobile/> : <InspiralabVideoGraphic />
                    }
                </div>
                <div className="flex flex-col items-center gap-8 absolute">
                    <h1 className="text-3xl xl:text-5xl font-light xl:font-thin text-center w-[300px] xl:w-auto leading-7 " >
                        Conoce más sobre nuestros <br className="hidden xl:block"/>
                        productos y proceso de maquila
                    </h1>
                    <Button text="MÁS INFORMACIÓN" className="text-sm gap-11 pr-8" button={ 0 } path="/maquila" />
                </div>
            </div>

            <div className="w-full bg-white flex flex-col items-center pt-14 xl:pb-28 relative">
                <BubbleIcon x="right-5 2xl:right-14" y="top-16" size="size-28 2xl:size-32 hidden xl:block" />
                <BubbleIcon x="left-10 2xl:left-28" y="bottom-40" size="size-13" size2="size-20 hidden xl:block" delay="floating-delay-1000" />
                <BubbleIcon x="right-28 2xl:right-52" y="bottom-44" size="size-13" size2="size-20 hidden xl:block" delay="floating-animation-2" />
                <h1 className="text-3xl xl:text-5xl text-[#E71567] font-light mb-5 xl:mb-20">Nuestros Valores</h1>
                {
                    screen === 1 ? <ValuesListComponent /> : <GridCol data={ GridData } />
                }
            </div>

            <div className="w-full bg-[#E71567] flex justify-center relative py-40 xl:py-16 3xl:py-20 overflow-hidden">
                <img src="/img/home/formulacion-y-maquila-2.png" className="absolute rotate-[30deg] left-0 xl:-left-10 3xl:left-5 top-8 xl:top-[unset] xl:-bottom-16 3xl:-bottom-24 w-[200px] xl:w-[400px] 3xl:w-auto"/>
                <p className="text-center text-black text-[25px] xl:text-[34px] 3xl:text-[38px] leading-6 xl:leading-[3rem] font-thin w-[300px] xl:w-auto">
                    ¡Gracias por ser parte de<br className="hidden xl:block"/> nuestra historia <br />
                    y permitirnos <span className="font-bold">inspirar<br className="hidden xl:block"/> belleza!</span>
                </p>
                {
                    screen === 1 ? <Art1 className="absolute right-4 -bottom-7" color="#000" width="180" height="180" /> :
                    screen === 2 ? <Art1 className="absolute right-10 -bottom-52" color="#000" width="550" /> :
                                   <Art1 className="absolute right-10 -bottom-52" color="#000" />
                }
            </div>
        </section>
    )
}
