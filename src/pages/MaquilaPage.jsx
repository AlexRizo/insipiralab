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
                <h1 className="text-[50px] text-[#E71567] leading-none mb-8">
                    Redefinimos el proceso de maquila cosmética<br/>
                    en México, donde combinamos:
                </h1>
                <p className="text-[28px] text-black">
                    Ciencia Avanzada + Envases Exclusivos + Disponibilidad Inmediata + Desde 100 Pzas.
                </p>
            </div>

            <div className="bg-[#F5F5F5] w-full h-[890px] flex justify-center items-center gap-5 relative">
                <MaquilaCard text="Skin care" img="bg-[url('./img/maquila/maquila-card-1.jpg')] bg-center " />
                <MaquilaCard text="Cuidado Capilar" img="bg-[url('./img/maquila/maquila-card-2.png')] !bg-[220px,0px] bg-center bg-[#FABADB]" />
                <MaquilaCard text="Maquillaje" img="bg-[url('./img/maquila/maquila-card-3.png')] !bg-[210px,0px] bg-center bg-[#E0A5FF]" />
                <MaquilaCard text="Protección Solar" img="bg-[url('./img/maquila/maquila-card-4.png')] !bg-[140px,0px] bg-center bg-[#BDE7FF]" />
                <MaquilaCard text="Cuidado Corporal" img="bg-[url('./img/maquila/maquila-card-5.png')] !bg-[130px,0px] bg-center bg-[#B9DBAA]" />
                <MaquilaCard text="Innovaciones" img="bg-[url('./img/maquila/maquila-card-6.png')] !bg-[180px,0px] bg-center bg-[#CECECE]" />
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
