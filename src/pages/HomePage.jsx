import { Button, EnvasesSlider, NewsCarrousel, Video } from "../components"
import { BubbleIcon, ByGardeniaNaturalsIcon, WeInspireBeautyIcon } from "../icons"
import { ProcessCard } from "../components/ProcessCard"
import { InspiraLabArt, WeInspireBeautyCircle } from "../art"
import { WeInspiraLabNegro, WeInspireCircle } from "../lottie"

export const HomePage = () => {
    return (
        <section>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="w-full h-full overflow-hidden">
                    <video autoPlay muted loop playsInline className="object-cover object-center w-full h-full hidden 2xl:block">
                        <source src="/videos/home-cosmetic.mp4" />
                    </video>
                    <video autoPlay muted loop playsInline className="object-cover object-center w-full h-full 2xl:hidden">
                        <source src="/videos/home-cosmetic-movil.mp4" />
                    </video>
                </div>
                <div className="absolute flex flex-col items-center text-center">
                    <h1 className="text-3xl 2xl:text-6xl leading-7 font-medium">Eleva tu <br className="hidden xl:block"/>marca cosmética</h1>
                    <p className="text-xl 2xl:text-4xl font-light leading-5 2xl:leading-9 mt-1">
                        con nuestras fórmulas<br/> innovadoras 
                        y envases<br/> sin igual
                    </p>
                    <Button text="MÁS INFORMACIÓN" className="mt-6 2xl:mt-9 2xl:gap-9" button={ 0 } HIcon="16" WIcon="16" />
                </div>
                <div className="absolute bottom-10 hidden 2xl:block">
                    <ByGardeniaNaturalsIcon />
                </div>
            </div>

            <div className="w-screen bg-[#E0A5FF] 3xl:py-36 py-32 relative overflow-hidden" >
                <img src="/img/home/formulacion-y-maquila-2.png" className="absolute rotate-[120deg] 2xl:rotate-[-24deg] -left-16 2xl:left-[250px] 3xl:left-[335px] top-4 2xl:top-[unset] 2xl:-bottom-[6px] 3xl:bottom-[28px] w-[175px] 2xl:w-[453px] 3xl:w-auto" />
                <img src="/img/home/formulacion-y-maquila-1.png" className="hidden 2xl:block absolute 3xl:-left-32 -left-28 rotate-6 3xl:-bottom-44 -bottom-28 3xl:w-[600px] w-[450px]" />
                <p className="m-auto 2xl:w-[585px] text-base 2xl:text-xl 3xl:text-2xl text-black text-center">
                    Ofrecemos la formulación<br className="2xl:hidden"/> y/o maquila de<br className="hidden 2xl:block"/> productos 
                    de<br className="2xl:hidden"/> <span className="text-[#D80196] font-bold">alta calidad</span> y cumplimos<br/> con todas 
                    las regulaciones.<br/> Ayudamos a las marcas a<br className="2xl:hidden"/> ofrecer <br className="hidden 2xl:block"/>
                    productos que<br className="2xl:hidden"/> complementan su<br/>
                    <span className="text-[#D80196] font-bold">propuesta de valor.</span>
                </p>
                <img src="/img/home/formulacion-y-maquila-1.png" className="absolute rotate-[60deg] 2xl:rotate-[30deg] -right-3 2xl:right-40 2xl:bottom-10 3xl:bottom-1 w-[175px] 2xl:w-[520px] 3xl:w-[600px]" />
            </div>

            <div className="w-screen bg-[#E71567]">
                <h1 className="text-center py-2 2xl:py-5 text-[#E0A5FF] text-lg 2xl:text-4xl 3xl:text-5xl 2xl:font-thin">Proceso de maquila</h1>
            </div>

            <div className="w-full flex flex-col 2xl:flex-row justify-center items-center gap-28 2xl:gap-5 py-28 2xl:py-36 3xl:py-48 relative">
                <div className="w-full h-full overflow-hidden absolute top-0">
                    <video autoPlay muted loop playsInline className="object-cover w-full h-full">
                        <source src="/videos/home-textura.mp4" />
                    </video>
                </div>
                <ProcessCard img="/img/home/proceso-empaque-1.png" >
                    <span>Desarrollo de<br/> producto desde cero</span>
                </ProcessCard>
                <ProcessCard img="/img/home/proceso-empaque-2.png" >
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
            
            <div className="relative h-[910px] 2xl:h-[900px] 3xl:h-[1000px] bg-white flex flex-col overflow-hidden">
                <WeInspireBeautyIcon className=" hidden 2xl:block absolute left-20 top-10"/>
                <WeInspireBeautyIcon className="absolute right-[35%] -top-5 2xl:hidden" width="154" />

                <div className="relative mt-auto 2xl:m-auto 2xl:w-3/4 h-[90%] 2xl:h-full flex items-center justify-center">
                    <img 
                        src="img/home/labios.png"
                        className="absolute w-72 2xl:w-[420px] 3xl:w-auto translate-y-5"
                    />
                    <img 
                        src="img/home/labial-rojo.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-250px] -translate-x-24 2xl:-translate-y-56 3xl:-translate-y-[272px] 2xl:-translate-x-56 3xl:-translate-x-64 cursor-pointer"
                    />
                    <img 
                        src="img/home/labial-cafe.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-130px] -translate-x-24 2xl:-translate-y-64 3xl:-translate-y-[300px] 2xl:translate-x-32 cursor-pointer"
                    />
                    <img 
                        src="img/home/labial-magenta.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-250px] translate-x-24 2xl:-translate-y-36 2xl:translate-x-96 3xl:translate-x-[450px] cursor-pointer"
                    />
                    <img 
                        src="img/home/labial-cafe-claro.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-130px] translate-x-24 2xl:translate-y-28 3xl:translate-y-36 2xl:translate-x-[410px] 3xl:translate-x-[480px] cursor-pointer"
                    />
                    <img 
                        src="img/home/labial-violeta.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-52 -translate-x-24 2xl:translate-y-60 3xl:translate-y-72 2xl:translate-x-16 cursor-pointer"
                    />
                    <img 
                        src="img/home/labial-morado.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-80 2xl:translate-y-48 3xl:translate-y-60 2xl:-translate-x-72 3xl:-translate-x-80 cursor-pointer"
                    />
                    <img 
                        src="img/home/labial-naranja.png"
                        className="hover:scale-125 transition w-[155px] 2xl:w-[235px] 3xl:w-[250px] absolute translate-y-52 translate-x-24 2xl:-translate-y-5 2xl:translate-x-[-470px] 3xl:translate-x-[-510px] cursor-pointer"
                    />
                </div>
            </div>

            <div className="w-full h-10 bg-[#E0A5FF] py-6 overflow-hidden whitespace-nowrap box-border">
                <div className="marquee-animation h-full flex items-center gap-14 relative">
                    <p className="text-xs 2xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs 2xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs 2xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs 2xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="text-xs 2xl:text-xl 3xl:text-2xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                </div>
            </div>

            <div className="py-16 px-7 2xl:py-36 3xl:py-40">
                <div className="m-auto 2xl:max-w-[800px] relative">
                    {/* <WeInspireBeautyCircle className="absolute hidden 2xl:block animation-spin -left-24 -top-24" /> */}
                    <WeInspireCircle className="absolute size-40 -left-20 -top-20" />
                    {/* <video autoPlay muted loop playsInline className="object-cover min-w-full">
                        <source src="https://youtu.be/cR3RraFyEes" />
                    </video> */}
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/cR3RraFyEes"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="w-full bg-[#E0A5FF] py-14 3xl:py-16 2xl:px-28 3xl:px-40 flex items-center justify-center">
                <EnvasesSlider />
            </div>

            <div className="w-full m-auto 3xl:pt-20 pt-16 3xl:pb-56 pb-48 bg-white relative flex flex-col items-center justify-center overflow-hidden">
                <BubbleIcon size="2xl:size-28 size-12" backdrop="backdrop-blur-md" x="2xl:right-16 right-24" y="2xl:top-9 top-12"/>
                <BubbleIcon size="size-20" x="left-[29rem]" y="top-[9rem]" hidden={ true } />
                <h1 className="text-[#D80196] text-5xl font-thin text-center mb-36 hidden 2xl:block">Prensa y reconocimiento</h1>
                <NewsCarrousel />
                <BubbleIcon size="2xl:size-36 size-28" x="2xl:left-52 left-10" y="2xl:bottom-32 bottom-24" backdrop="backdrop-blur-md" />
            </div>
        </section>
    )
}
