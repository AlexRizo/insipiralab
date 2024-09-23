import { Button, EnvasesSlider, InspiralabVideoCosmetic, InspiralabVideoCosmeticMobile, LabialComponent, NewsCarrousel } from "../components"
import { BubbleIcon, ByGardeniaNaturalsIcon, WeInspireBeautyIcon } from "../icons"
import { ProcessCard } from "../components/ProcessCard"
import { WeInspiraLabNegro, WeInspiraLabRosa, WeInspireBlackBarMobile, WeInspireCircle, WeInspirePinkBarMobile } from "../lottie"
import { useScreen } from "../hooks/useScreen"
import { NewsCarrouselMobile } from "../components/NewsCarrouselMobile"

export const HomePage = () => {
    const { screen } = useScreen()

    return (
        <section>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="w-full h-full overflow-hidden">
                    {
                        screen === 1 ? (<InspiralabVideoCosmeticMobile /> ) : ( <InspiralabVideoCosmetic/> )
                    }
                </div>
                <div className="absolute flex flex-col items-center text-center">
                    <h1 className="text-3xl xl:text-6xl leading-7 font-medium">Eleva tu <br className="hidden xl:block"/>marca cosmética</h1>
                    <p className="text-xl xl:text-4xl font-light leading-5 xl:leading-9 mt-1">
                        con nuestras fórmulas<br/> innovadoras 
                        y envases<br/> sin igual
                    </p>
                    <Button text="MÁS INFORMACIÓN" className="mt-6 xl:mt-9 xl:gap-9" button={ 0 } HIcon="16" WIcon="16" path="/contacto" />
                </div>
                <div className="absolute bottom-10 hidden xl:block">
                    <ByGardeniaNaturalsIcon />
                </div>
            </div>

            <div className="w-screen bg-[#E0A5FF] 3xl:py-36 py-32 relative overflow-hidden" >
                <img src="/img/home/formulacion-y-maquila-2.png" className="absolute rotate-[120deg] xl:rotate-[-24deg] -left-16 xl:left-32 2xl:left-[250px] 3xl:left-[335px] top-4 xl:top-[unset] xl:-bottom-[6px] 3xl:bottom-[28px] w-[175px] xl:w-[453px] 3xl:w-auto" />
                <img src="/img/home/formulacion-y-maquila-1.png" className="hidden xl:block absolute xl:-left-44 2xl:-left-32 -left-28 rotate-6 3xl:-bottom-44 -bottom-28 xl:w-[400px] 2xl:w-[450px] 3xl:w-[600px] w-[450px]" />
                <p className="m-auto xl:w-[585px] text-base xl:text-xl 3xl:text-2xl text-black text-center">
                    Ofrecemos la formulación<br className="xl:hidden"/> y/o maquila de<br className="hidden xl:block"/> productos 
                    de<br className="xl:hidden"/> <span className="text-[#D80196] font-bold">alta calidad</span> y cumplimos<br/> con todas 
                    las regulaciones.<br/> Ayudamos a las marcas a<br className="xl:hidden"/> ofrecer <br className="hidden xl:block"/>
                    productos que<br className="xl:hidden"/> complementan su<br/>
                    <span className="text-[#D80196] font-bold">propuesta de valor.</span>
                </p>
                <img src="/img/home/formulacion-y-maquila-1.png" className="absolute rotate-[60deg] xl:rotate-[30deg] -right-3 xl:right-28 2xl:right-40 xl:bottom-10 3xl:bottom-1 w-[175px] xl:w-[520px] 3xl:w-[600px]" />
            </div>

            <div className="w-screen bg-[#E71567]">
                <h1 className="text-center py-2 xl:py-5 text-[#E0A5FF] text-lg xl:text-4xl 3xl:text-5xl xl:font-thin">Proceso de maquila</h1>
            </div>

            <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-28 xl:gap-5 py-28 xl:py-36 3xl:py-48 relative">
                <div className="w-full h-full overflow-hidden absolute top-0">
                    <video autoPlay muted loop playsInline className="object-cover w-full h-full">
                        <source src="/videos/home-textura.mp4" />
                    </video>
                </div>
                <ProcessCard img="/img/home/proceso-empaque-1.png" url="/maquila#desarrollo" >
                    <span>Desarrollo de<br/> producto desde cero</span>
                </ProcessCard>
                <ProcessCard img="/img/home/proceso-empaque-2.png" url="/maquila#cosmeticos" >
                    <span>Cosméticos terminados listos para envasar en el envase que selecciones</span>
                </ProcessCard>
            </div>

            <div className="w-full relative">
                {
                    screen === 1 ? <WeInspireBlackBarMobile /> : <WeInspiraLabNegro />
                }
            </div>
            
            <div className="relative h-[910px] xl:h-[900px] 3xl:h-[1000px] bg-white flex flex-col overflow-hidden">
                {
                    screen === 1 ? <WeInspireBeautyIcon className="absolute right-[35%] -top-5" width="154" />
                    : screen === 2 ? <WeInspireBeautyIcon className="absolute left-20 top-10" width="250" />
                    : <WeInspireBeautyIcon className="absolute left-20 top-10"/>
                }

                <LabialComponent />
            </div>

            <div className="w-full bg-[#E0A5FF] overflow-hidden whitespace-nowrap box-border">
                {
                    screen === 1 ? <WeInspirePinkBarMobile /> : <WeInspiraLabRosa/>
                }
            </div>

            <div className="py-16 px-7 xl:py-36 3xl:py-40">
                <div className="m-auto xl:max-w-[800px] relative custom-class">
                    <WeInspireCircle className="absolute size-40 -left-20 -top-14 hidden xl:block" />
                    <video controls playsInline preload="none" poster="/img/home/poster.JPG" className="xl:h-[500px] w-full" >
                        <source type="video/mp4" src="https://res.cloudinary.com/dzcassy7b/video/upload/v1726261288/Inspiralab/movil-INSP-REEL-HOR_b3spgu.mp4" />
                    </video>
                </div>
            </div>

            <div className="w-full bg-[#E0A5FF] py-14 3xl:py-16 xl:px-28 2xl:px-28 3xl:px-40 flex items-center justify-center">
                <EnvasesSlider />
            </div>

            <div className="w-full m-auto 3xl:pt-20 pt-16 3xl:pb-56 pb-48 bg-white relative flex flex-col items-center justify-center">
                <BubbleIcon x="xl:left-52 2xl:left-[20%]" y="top-40" size="size-13" size2="size-20" delay="floating-delay-1000" />
                <BubbleIcon x="right-16" y="top-5" size="size-32" />
                <h1 className="text-[#D80196] text-5xl font-thin text-center mb-36 hidden xl:block">Prensa y reconocimiento</h1>
                {
                    screen === 1 ? ( <div className="pl-4 w-full"> <NewsCarrouselMobile /> </div> ) : ( <NewsCarrousel /> )
                }
                <BubbleIcon x="left-[10%]" y="bottom-32" delay='floating-animation-2' />
            </div>
        </section>
    )
}
