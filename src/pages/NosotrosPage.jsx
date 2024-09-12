import { Art1, Art2 } from "../art"
import { Button, GridCol, Spam, ValuesListComponent } from "../components"
import { GridData } from "../data/data"
import { ArrowIcon, BubbleIcon, InspiralabHeaderIcon } from "../icons"
import { useScreen } from "../hooks/useScreen"

export const NosotrosPage = () => {
    const { screen } = useScreen();
    
    return (
        <section>
            <div className="container relative m-auto flex flex-col items-center justify-center h-screen gap-16 xl:gap-36">
                <article className="flex flex-col items-center font-thin gap-4">
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

                <article className="flex flex-col items-center font-thin gap-4">
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

            <div className="w-full relative flex items-center justify-center bg-[#E0A5FF] overflow-hidden py-40 xl:py-36">

                { 
                    screen === 1 ? <Art1 className="absolute -left-20 -bottom-8" color="#e71567" width={283} height={283} /> :
                    screen === 2 ? <Art1 className="absolute -left-24 -top-13" color="#e71567" width={550} /> :
                                   <Art1 className="absolute -left-28 -top-1" color="#e71567" />
                }
                <Spam text='We inspire beauty' />
                {
                    screen === 1 ? <Art2 className="absolute -right-6 top-0 -rotate-[25deg]" width={169} height={169} /> :
                    screen === 2 ? <Art2 className="absolute -right-24 top-8" width={400} /> :
                                   <Art2 className="absolute -right-28 top-8" />
                }
            </div>

            <div className="relative overflow-hidden flex flex-col xl:flex-row justify-center gap-8 xl:gap-16 font-light w-full bg-[#F5F5F5] text-black px-8 xl:px-0 py-16 xl:py-32">
                <BubbleIcon size="size-14" backdrop="backdrop-blur" x="right-[25%]" y="top-9" />
                <BubbleIcon size="size-7" backdrop="backdrop-blur" x="right-[10%]" y="top-28" />
                <h1 className="w-min text-[#E71567] text-3xl xl:text-[42px] leading-[1]">
                    By
                    Gardenia
                    Naturals
                </h1>
                <div className="leading-5 xl:leading-8 text-[15px] xl:text-base pr-2.5 xl:p-0 z-20 relative">
                    <p>
                        Hace cuatro años, un grupo de científicos 
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
                <BubbleIcon size="size-9" backdrop="backdrop-blur" custom="" x="left-10" y="bottom-3" />
            </div>

            <div className="w-full flex flex-col items-center justify-center relative">
                <div className="w-full h-auto xl:max-h-[600px] overflow-hidden relative">
                    {
                        screen === 1 
                            ? 
                            <video autoPlay muted loop playsInline preload="none" className="object-cover w-full h-full">
                                <source src="/videos/nosotros-animacion-movil.mp4" />
                            </video>
                            :
                            <video autoPlay muted loop playsInline preload="none" className="object-cover w-full h-full">
                                <source src="/videos/nosotros-animacion.mp4" />
                            </video>
                    }
                </div>
                <div className="flex flex-col items-center gap-8 absolute">
                    <h1 className="text-3xl xl:text-5xl font-light xl:font-thin text-center w-[300px] xl:w-auto leading-7 xl:leading-normal" >
                        Conoce más sobre nuestros <br className="hidden xl:block"/>
                        productos y proceso de maquila
                    </h1>
                    <Button text="MÁS INFORMACIÓN" className="text-sm gap-11 pr-8" button={ 0 } />
                </div>
            </div>

            <div className="w-full bg-white flex flex-col items-center pt-14 xl:pb-28">
                <h1 className="text-3xl xl:text-5xl text-[#E71567] font-light mb-5 xl:mb-20">Nuestros Valores</h1>
                {
                    screen ? <ValuesListComponent /> : <GridCol data={ GridData } />
                }
            </div>

            <div className="w-full bg-[#E71567] flex justify-center relative py-40 xl:py-16 3xl:py-20 overflow-hidden">
                <img src="/img/home/formulacion-y-maquila-2.png" className="absolute rotate-[30deg] left-0 xl:left-10 3xl:left-5 top-8 xl:top-[unset] xl:-bottom-16 3xl:-bottom-24 w-[200px] xl:w-[400px] 3xl:w-auto"/>
                <p className="text-center text-black text-[25px] xl:text-[46px] 3xl:text-5xl leading-6 xl:leading-[3rem] font-thin w-[300px]">
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
