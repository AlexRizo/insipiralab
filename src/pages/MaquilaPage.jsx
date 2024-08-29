import { useState } from "react";
import { MaquilaCard } from "../components/MaquilaCard"
import { OrderList } from "../components/OrderList"
import { ArrowIcon, TriangleIcon } from "../icons"
import { ListContent, TimeLine } from "../components";
import { desarrolloData, envasesListosData } from "../data/data";

export const MaquilaPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
        <section className="bg-white">
            <div className="w-full h-screen bg-[url('./img/maquila/maquila-bg.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-[50px] font-thin leading-tight">Exclusividad y calidad</h1>
                    <p className="text-[28px] font-light leading-7">
                        que no encontrarás en ningún<br/> otro lugar de México.
                    </p>
                </div>
                <div className="flex flex-col items-center absolute bottom-20 gap-4">
                    <span className="text-[22px] font-light">CONOCE MÁS</span>
                    <ArrowIcon />
                </div>
            </div>

            <div className="bg-[#E0A5FF] text-center font-light pt-10 pb-6">
                <h1 className="3xl:text-[50px] text-5xl text-[#E71567] leading-none mb-8">
                    Redefinimos el proceso de maquila cosmética<br/>
                    en México, donde combinamos:
                </h1>
                <p className="3xl:text-[28px] text-[26.5px] text-black">
                    Ciencia Avanzada + Envases Exclusivos + Disponibilidad Inmediata + Desde 100 Pzas.
                </p>
            </div>

            <div className="bg-[#F5F5F5] w-full 3xl:h-[890px] py-32 flex justify-center items-center gap-5 relative">
                <MaquilaCard 
                    text="Skin care"
                    img="./img/maquila/maquila-card-1.jpg"/>
                <MaquilaCard 
                    text="Cuidado Capilar"
                    bgColor=" bg-[#FABADB]"
                    img="./img/maquila/maquila-card-2.png"
                    classImage="3xl:-translate-y-32 3xl:-translate-x-3 -translate-y-20 -translate-x-7" />
                <MaquilaCard 
                    text="Maquillaje"
                    bgColor="bg-[#E0A5FF]"
                    img="./img/maquila/maquila-card-3.png"
                    classImage="3xl:-translate-y-32 3xl:-translate-x-3 -translate-y-20 -translate-x-4 w-[180px]" />
                <MaquilaCard 
                    text="Protección Solar"
                    bgColor="bg-[#BDE7FF]"
                    img="./img/maquila/maquila-card-4.png"
                    classImage="3xl:-translate-y-32 3xl:translate-x-6 -translate-y-20 translate-x-2" />
                <MaquilaCard 
                    text="Cuidado Corporal"
                    bgColor="bg-[#B9DBAA]"
                    img="./img/maquila/maquila-card-5.png"
                    classImage="3xl:-translate-y-28 3xl:translate-x-6 -translate-y-16 translate-x-3" />
                <MaquilaCard 
                    text="Innovaciones"
                    bgColor="bg-[#CECECE]"
                    img="./img/maquila/maquila-card-6.png"
                    classImage="3xl:-translate-y-44 3xl:-translate-x-2 3xl:w-[190px] w-[170px] opacity-80 -translate-y-36 -translate-x-4" />
            </div>

            <div className="container m-auto pt-14 pb-20">
                <h1 className="text-5xl text-[#E71567] text-center font-light mb-28">Servicios</h1>
                <div className="flex justify-center gap-14">
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
                    <img src="./img/maquila/maquila-100-piezas.jpg" alt="" />
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
                    <img src="./img/maquila/maquila-100-piezas-2.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}
