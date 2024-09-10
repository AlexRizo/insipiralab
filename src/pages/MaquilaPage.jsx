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
            <div className="w-full h-screen bg-[url('/img/maquila/maquila-bg-mobile.jpg')] 2xl:bg-[url('/img/maquila/maquila-bg.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-[30px] 2xl:text-[50px] font-medium 2xl:font-thin leading-6 2xl:leading-tight mb-2 2xl:mb-0">Exclusividad<br className="2xl:hidden"/> y calidad</h1>
                    <p className="text-lg 2xl:text-[28px] font-light leading-5 2xl:leading-7">
                        que no encontrarás en ningún<br/> otro lugar de México.
                    </p>
                </div>
                <div className="flex flex-col items-center absolute bottom-20 gap-4">
                    <span className="text-lg 2xl:text-[22px] font-light">CONOCE MÁS</span>
                    <ArrowIcon width='29' />
                </div>
            </div>

            <div className="bg-[#E0A5FF] text-center font-light pt-10 pb-6">
                <h1 className="text-3xl 2xl:text-5xl 3xl:text-[50px] text-[#E71567] leading-none px-8 mb-4 2xl:mb-8">
                    Redefinimos el proceso de maquila cosmética<br/>
                    en México, donde combinamos:
                </h1>
                <p className="2xl:text-[26.5px] 3xl:text-[28px] hidden 2xl:block text-black">
                    Ciencia Avanzada + Envases Exclusivos + Disponibilidad Inmediata + Desde 100 Pzas.
                </p>
                <p className="flex flex-col text-black text-xl gap-2 2xl:hidden">
                    <span>Ciencia Avanzada</span>
                    <span>Envases Exclusivos</span>
                    <span>Disponibilidad Inmediata</span>
                    <span>Desde 100 Pzas.</span>
                </p>
            </div>

            <div className="bg-[#F5F5F5] w-full 3xl:h-[890px] py-32 flex justify-center flex-wrap items-center gap-3 2xl:gap-5 relative">
                <MaquilaCard 
                    text="Skin care"
                    bgColor="bg-[#FFE9BA]"
                    img={ isMobile ? '/img/maquila/maquila-card-1-mobile.png' : '/img/maquila/maquila-card-1.jpg' }
                    classImage="w-[50px]"/>
                <MaquilaCard 
                    text="Cuidado Capilar"
                    bgColor=" bg-[#FABADB]"
                    img={ isMobile ? '/img/maquila/maquila-card-2-mobile.png' : '/img/maquila/maquila-card-2.png' }
                    classImage="translate-x-2.5 2xl:-translate-y-20 2xl:-translate-x-7 3xl:-translate-y-32 3xl:-translate-x-3 w-[124px] 2xl:w-auto" />
                <MaquilaCard 
                    text="Maquillaje"
                    bgColor="bg-[#E0A5FF]"
                    img="/img/maquila/maquila-card-3.png"
                    classImage="translate-x-3 2xl:-translate-y-20 2xl:-translate-x-4 3xl:-translate-y-32 3xl:-translate-x-3 w-[105px] 2xl:w-[180px]" />
                <MaquilaCard 
                    text="Protección Solar"
                    bgColor="bg-[#BDE7FF]"
                    img="/img/maquila/maquila-card-4.png"
                    classImage="3xl:-translate-y-32 3xl:translate-x-6 2xl:-translate-y-20 2xl:translate-x-2 w-[70px] 2xl:w-auto" />
                <MaquilaCard 
                    text="Cuidado Corporal"
                    bgColor="bg-[#B9DBAA]"
                    img="/img/maquila/maquila-card-5.png"
                    classImage="3xl:-translate-y-28 3xl:translate-x-6 2xl:-translate-y-16 2xl:translate-x-3 w-[60px] 2xl:w-auto" />
                <MaquilaCard 
                    text="Innovaciones"
                    bgColor="bg-[#CECECE]"
                    img="/img/maquila/maquila-card-6.png"
                    classImage="2xl:-translate-y-36 2xl:-translate-x-4 3xl:-translate-y-44 3xl:-translate-x-2 w-[108px] 2xl:w-[170px] 3xl:w-[190px] opacity-95 2xl:opacity-80" />
            </div>

            <div className="container m-auto pt-14 pb-20">
                <h1 className="text-5xl text-[#E71567] text-center font-light mb-28">Servicios</h1>
                <div className="flex flex-col 2xl:flex-row justify-center gap-14">
                    <OrderList setIndex={ setCurrentIndex } />
                    <ListContent index={ currentIndex } />
                </div>
            </div>

            <div className="w-full p-6 text-center bg-[#E71567] text-[#E0A5FF] text-5xl font-light">
                <h1>Proceso de maquila</h1>
            </div>

            <div className="container m-auto pb-20 pt-10 flex items-center flex-col">
                <h1 className="text-[#E71567] text-[28px] font-semibold flex items-center justify-center gap-2">
                    <TriangleIcon />
                    <span>
                        Desarrollo de producto desde cero
                    </span>
                </h1>

                <div className="mt-36">
                    <TimeLine data={ desarrolloData } />
                </div>

                <h1 className="text-[#E71567] text-[28px] font-semibold mt-36">
                    <span>
                        Desde 100 pzas.
                    </span>
                </h1>

                <div className="my-16">
                    <img src="/img/maquila/maquila-100-piezas.jpg" alt="" />
                </div>

                <h1 className="text-[#E71567] text-[28px] font-semibold flex items-start justify-center gap-2 text-center">
                    <TriangleIcon className="mt-2" />
                    <span>
                        Cosméticos terminados listos para envasar<br /> en el envase que selecciones
                    </span>
                </h1>

                <div className="mt-28">
                    <TimeLine data={ envasesListosData } />
                </div>

                <h1 className="text-[#E71567] text-[28px] font-semibold mt-36">
                    <span>
                        Desde 100 pzas.
                    </span>
                </h1>

                <div className="mt-16">
                    <img src="/img/maquila/maquila-100-piezas-2.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}
