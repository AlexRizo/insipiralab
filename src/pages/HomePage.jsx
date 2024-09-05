import { Button, EnvasesSlider, NewsCarrousel } from "../components"
import { WeInspireBeauty } from "../lottie"
import { BubbleIcon, ByGardeniaNaturalsIcon } from "../icons"
import { ProcessCard } from "../components/ProcessCard"
import { InspiraLabArt, WeInspireBeautyCircle } from "../art"

export const HomePage = () => {
    return (
        <section>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="w-full h-full overflow-hidden">
                    <video autoPlay muted loop playsInline className="object-cover object-center w-full h-full hidden 2xl:block">
                        <source src="/videos/home-cosmetic.mp4" />
                    </video>
                    <video autoPlay muted loop playsInline className="object-cover object-center w-full h-full 2xl:block">
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
                <h1 className="text-center py-5 text-[#E0A5FF] 3xl:text-5xl text-4xl font-thin">Proceso de maquila</h1>
            </div>

            <div className="w-full flex justify-center gap-5 3xl:py-48 py-36 relative">
                <div className="w-full h-full overflow-hidden absolute top-0">
                    <video autoPlay muted loop playsInline className="object-cover min-w-full max-h-full">
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

            <div className="w-full h-10 overflow-hidden whitespace-nowrap box-border relative">
                <div className="marquee-animation h-full flex items-center gap-14 relative">
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                    <InspiraLabArt />
                </div>
            </div>
            
            <div className="relative 3xl:h-[1000px] h-[900px] bg-white overflow-hidden">
                <div className="h-[500px] w-[500px] absolute -top-28 left-1 mask-image">
                    <div className="absolute w-1/2 h-full bg-gradient-to-r from-25% from-white to-transparent"></div>
                    <WeInspireBeauty />
                </div>
                <div className="relative m-auto w-3/4 h-full flex items-center justify-center">
                    <img src="img/home/labios.png" alt="" className="absolute 3xl:w-auto w-[420px]"/>
                    <img src="img/home/labial-rojo.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute 3xl:-translate-y-[272px] -translate-y-56 3xl:-translate-x-64 -translate-x-56 cursor-pointer"/>
                    <img src="img/home/labial-cafe.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute 3xl:-translate-y-[300px] -translate-y-64 translate-x-32 cursor-pointer"/>
                    <img src="img/home/labial-magenta.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute -translate-y-36 3xl:translate-x-[450px] translate-x-96 cursor-pointer"/>
                    <img src="img/home/labial-cafe-claro.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute 3xl:translate-y-36 translate-y-28 3xl:translate-x-[480px] translate-x-[410px] cursor-pointer"/>
                    <img src="img/home/labial-violeta.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute 3xl:translate-y-72 translate-y-60 translate-x-16 cursor-pointer"/>
                    <img src="img/home/labial-morado.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute 3xl:translate-y-60 translate-y-48 3xl:-translate-x-80 -translate-x-72 cursor-pointer"/>
                    <img src="img/home/labial-naranja.png" alt="" className="hover:scale-125 transition 3xl:w-[250px] w-[235px] absolute -translate-y-5 3xl:translate-x-[-510px] translate-x-[-470px] cursor-pointer"/>
                </div>
            </div>

            <div className="w-full h-10 bg-[#E0A5FF] py-6 overflow-hidden whitespace-nowrap box-border">
                <div className="marquee-animation h-full flex items-center gap-14 relative">
                    <p className="3xl:text-2xl text-xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="3xl:text-2xl text-xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="3xl:text-2xl text-xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="3xl:text-2xl text-xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                    <p className="3xl:text-2xl text-xl font-light text-[#E71567]">WE INSPIRE BEAUTY</p>
                </div>
            </div>

            <div className="3xl:py-40 py-36">
                <div className="m-auto max-w-[800px] relative">
                    <WeInspireBeautyCircle className="absolute animation-spin -left-24 -top-24" />
                    <video autoPlay muted loop playsInline className="object-contain min-w-full">
                        <source src="/videos/home-cosmetic.mp4" />
                    </video>
                </div>
            </div>

            <div className="w-full bg-[#E0A5FF] 3xl:py-16 py-14 3xl:px-40 px-28 flex items-center justify-center">
                <EnvasesSlider />
            </div>

            <div className="w-full m-auto 3xl:pt-20 pt-16 3xl:pb-56 pb-48 bg-white relative flex flex-col items-center justify-center overflow-hidden">
                <BubbleIcon size="size-28" x="right-16" y="top-9" />
                <BubbleIcon size="size-20" x="left-[29rem]" y="top-[9rem]" />
                <h1 className="text-[#D80196] text-5xl font-thin text-center mb-36">Prensa y reconocimiento</h1>
                <NewsCarrousel />
                <BubbleIcon size="size-36" x="left-52" y="bottom-32" backdrop="backdrop-blur-md" />
            </div>
        </section>
    )
}
