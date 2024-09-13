import { useState } from "react";
import { MaquilaCard } from "../components/MaquilaCard"
import { OrderList } from "../components/OrderList"
import { ArrowIcon, TriangleIcon } from "../icons"
import { ListContent, TimeLine } from "../components";
import { desarrolloData, envasesListosData } from "../data/data";
import { useMediaQuery } from "react-responsive";

export const MaquilaPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    
    return (
        <section className="bg-white">
            <div className="w-full h-screen bg-[url('/img/maquila/maquila-bg-mobile.jpg')] xl:bg-[url('/img/maquila/maquila-bg.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-[30px] xl:text-[50px] font-medium xl:font-thin leading-6 xl:leading-tight mb-2 xl:mb-0">Exclusividad<br className="xl:hidden"/> y calidad</h1>
                    <p className="text-lg xl:text-[28px] font-light leading-5 xl:leading-7">
                        que no encontrarás en ningún<br/> otro lugar de México.
                    </p>
                </div>
                <div className="flex flex-col items-center absolute bottom-20 gap-4">
                    <span className="text-lg xl:text-[22px] font-light">CONOCE MÁS</span>
                    <ArrowIcon width='29' />
                </div>
            </div>

            <div className="bg-[#E0A5FF] text-center font-light pt-10 pb-6">
                <h1 className="text-3xl xl:text-5xl 3xl:text-[50px] text-[#E71567] leading-none px-8 mb-4 xl:mb-8">
                    Redefinimos el proceso de maquila cosmética<br/>
                    en México, donde combinamos:
                </h1>
                <p className="xl:text-[26.5px] 3xl:text-[28px] hidden xl:block text-black">
                    Ciencia Avanzada + Envases Exclusivos + Disponibilidad Inmediata + Desde 100 Pzas.
                </p>
                <p className="flex flex-col text-black text-xl gap-2 xl:hidden">
                    <span>Ciencia Avanzada</span>
                    <span>Envases Exclusivos</span>
                    <span>Disponibilidad Inmediata</span>
                    <span>Desde 100 Pzas.</span>
                </p>
            </div>

            <div className="bg-[#F5F5F5] w-full 3xl:h-[890px] py-32 flex justify-center flex-wrap items-center gap-3 xl:gap-5 relative">
                <MaquilaCard 
                    text="Skin care"
                    bgColor="bg-[#FFE9BA]"
                    img={ isMobile ? '/img/maquila/maquila-card-1-mobile.png' : '/img/maquila/maquila-card-1.jpg' }
                    classImage="w-[50px] xl:w-full"/>
                <MaquilaCard 
                    text="Cuidado Capilar"
                    bgColor=" bg-[#FABADB]"
                    img={ isMobile ? '/img/maquila/maquila-card-2-mobile.png' : '/img/maquila/maquila-card-2.png' }
                    classImage="translate-x-2.5 xl:-translate-y-20 3xl:-translate-y-32 w-[124px] xl:w-auto" />
                <MaquilaCard 
                    text="Maquillaje"
                    bgColor="bg-[#E0A5FF]"
                    img="/img/maquila/maquila-card-3.png"
                    classImage="xl:-translate-y-20 3xl:-translate-y-32 w-[105px] xl:w-[180px]" />
                <MaquilaCard 
                    text="Protección Solar"
                    bgColor="bg-[#BDE7FF]"
                    img="/img/maquila/maquila-card-4.png"
                    classImage="3xl:-translate-y-32 xl:-translate-y-20 w-[70px] xl:w-auto" />
                <MaquilaCard 
                    text="Cuidado Corporal"
                    bgColor="bg-[#B9DBAA]"
                    img="/img/maquila/maquila-card-5.png"
                    classImage="3xl:-translate-y-28 xl:-translate-y-16 w-[60px] xl:w-auto" />
                <MaquilaCard 
                    text="Innovaciones"
                    bgColor="bg-[#CECECE]"
                    img="/img/maquila/maquila-card-6.png"
                    classImage="xl:-translate-y-36 3xl:-translate-y-44 w-[108px] xl:w-[170px] 3xl:w-[190px] opacity-95 xl:opacity-80" />
            </div>

            <div className="container m-auto py-4 xl:pt-14 xl:pb-20">
                <h1 className="text-5xl text-[#E71567] hidden xl:block text-center font-light mb-28">Servicios</h1>
                <div className="flex flex-col xl:flex-row justify-center gap-14">
                    <OrderList setIndex={ setCurrentIndex } />
                    <div className="hidden xl:block">
                        <ListContent index={ currentIndex } />
                    </div>
                </div>
            </div>

            <div className="w-full p-2 xl:p-6 text-center bg-[#E71567] text-[#E0A5FF] text-lg xl:text-5xl font-light">
                <h1>Proceso de maquila</h1>
            </div>

            <div className="container m-auto pb-20 pt-10 px-0 xl:px-10 flex items-center flex-col">
                <h1 className="text-[#E71567] relative text-lg xl:text-[28px] font-semibold flex xl:items-center justify-center text-center xl:text-left xl:gap-2">
                    <TriangleIcon className="hidden xl:block" />
                    <TriangleIcon className="absolute -translate-x-[130px] xl:hidden" width="12" />
                    <span id="desarrollo">
                        Desarrollo de producto<br className="xl:hidden"/> desde cero
                    </span>
                </h1>

                <div className="xl:mt-36">
                    <TimeLine data={ desarrolloData } />
                </div>

                <h1 className="text-[#E71567] text-lg text-[28px] font-semibold mt-6 xl:mt-36">
                    <span>
                        Desde 100 pzas.
                    </span>
                </h1>

                <div className="my-6 xl:my-16">
                    <img src="/img/maquila/maquila-100-piezas.jpg" loading="lazy" className="hidden xl:block" />
                    <img src="/img/maquila/maquila-100-piezas-mobile.jpg" loading="lazy" className="xl:hidden rounded-2xl" />
                </div>

                <h1 className="text-[#E71567] text-lg xl:text-[28px] leading-5 xl:leading-normal font-semibold flex items-start justify-center gap-2 text-center">
                <TriangleIcon className="hidden xl:block" />
                <TriangleIcon className=" xl:hidden" width="12" />
                    <span id="cosmeticos">
                        Cosméticos terminados<br className="xl:hidden" /> listos para envasar<br className="hidden xl:block" /> en el<br className="xl:hidden" /> envase que selecciones
                    </span>
                </h1>

                <div className="mt-1 xl:mt-28">
                    <TimeLine data={ envasesListosData } />
                </div>

                <h1 className="text-[#E71567] hidden xl:block text-lg xl:text-[28px] font-semibold mt-36">
                    <span>
                        Desde 100 pzas.
                    </span>
                </h1>

                <div className="mt-16">
                    <img src="/img/maquila/maquila-100-piezas-2.jpg" loading="lazy" className="hidden xl:block" />
                    <img src="/img/maquila/maquila-100-piezas-2-mobile.jpg" loading="lazy" className="xl:hidden rounded-2xl" />
                </div>
            </div>
        </section>
    )
}
