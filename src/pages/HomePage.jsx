import { Button, EnvasesSlider, LabialComponent, NewsCarrousel, Video, Video1 } from "../components"
import { BubbleIcon, ByGardeniaNaturalsIcon, WeInspireBeautyIcon } from "../icons"
import { ProcessCard } from "../components/ProcessCard"
import { WeInspiraLabNegro, WeInspireCircle } from "../lottie"
import { useScreen } from "../hooks/useScreen"

export const HomePage = () => {
    const { screen } = useScreen()

    console.log(screen);
    
    return (
        <section>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="w-full h-full overflow-hidden">
                    {
                        screen === 1 ? (<Video1 /> ) : ( <Video/> )
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
                <img src="/img/home/formulacion-y-maquila-2.png" className="absolute rotate-[120deg] xl:rotate-[-24deg] -left-16 xl:left-[250px] 3xl:left-[335px] top-4 xl:top-[unset] xl:-bottom-[6px] 3xl:bottom-[28px] w-[175px] xl:w-[453px] 3xl:w-auto" />
                <img src="/img/home/formulacion-y-maquila-1.png" className="hidden xl:block absolute 3xl:-left-32 -left-28 rotate-6 3xl:-bottom-44 -bottom-28 3xl:w-[600px] w-[450px]" />
                <p className="m-auto xl:w-[585px] text-base xl:text-xl 3xl:text-2xl text-black text-center">
                    Ofrecemos la formulación<br className="xl:hidden"/> y/o maquila de<br className="hidden xl:block"/> productos 
                    de<br className="xl:hidden"/> <span className="text-[#D80196] font-bold">alta calidad</span> y cumplimos<br/> con todas 
                    las regulaciones.<br/> Ayudamos a las marcas a<br className="xl:hidden"/> ofrecer <br className="hidden xl:block"/>
                    productos que<br className="xl:hidden"/> complementan su<br/>
                    <span className="text-[#D80196] font-bold">propuesta de valor.</span>
                </p>
                <img src="/img/home/formulacion-y-maquila-1.png" className="absolute rotate-[60deg] xl:rotate-[30deg] -right-3 xl:right-40 xl:bottom-10 3xl:bottom-1 w-[175px] xl:w-[520px] 3xl:w-[600px]" />
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

            <div className="w-full h-10 relative">
                {/* <div className="marquee-animation h-full flex items-center gap-14 relative">
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                </div> */}
                <WeInspiraLabNegro />
            </div>
            
            <div className="relative h-[910px] xl:h-[900px] 3xl:h-[1000px] bg-white flex flex-col overflow-hidden">
                <WeInspireBeautyIcon className=" hidden xl:block absolute left-20 top-10"/>
                <WeInspireBeautyIcon className="absolute right-[35%] -top-5 xl:hidden" width="154" />

                <LabialComponent />
            </div>

            <div className="w-full h-10 bg-[#E0A5FF] py-6 overflow-hidden whitespace-nowrap box-border">
                <div className="marquee-animation h-full flex items-center gap-14 relative">
                    <p className="text-xs xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                </div>
            </div>

            <div className="py-16 px-7 xl:py-36 3xl:py-40">
                <div className="m-auto xl:max-w-[800px] relative custom-class">
                    <WeInspireCircle className="absolute size-40 -left-20 -top-20 hidden xl:block" />
                    {/* <iframe
                        src="https://www.youtube.com/embed/cR3RraFyEes"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-[250px] xl:h-[400px]"
                    ></iframe> */}
                </div>
            </div>

            <div className="w-full bg-[#E0A5FF] py-14 3xl:py-16 xl:px-28 3xl:px-40 flex items-center justify-center">
                <EnvasesSlider />
            </div>

            <div className="w-full m-auto 3xl:pt-20 pt-16 3xl:pb-56 pb-48 bg-white relative flex flex-col items-center justify-center overflow-hidden">
                <BubbleIcon size="xl:size-28 size-12" backdrop="backdrop-blur-md" x="xl:right-16 right-24" y="xl:top-9 top-12"/>
                <BubbleIcon size="size-20" x="left-[29rem]" y="top-[9rem]" hidden={ true } />
                <h1 className="text-[#D80196] text-5xl font-thin text-center mb-36 hidden xl:block">Prensa y reconocimiento</h1>
                <NewsCarrousel />
                <BubbleIcon size="xl:size-36 size-28" x="xl:left-52 left-10" y="xl:bottom-32 bottom-24" backdrop="backdrop-blur-md" />
            </div>
        </section>
    )
}
