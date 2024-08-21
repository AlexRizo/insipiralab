import { CodeBracketIcon, LockClosedIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Button, Card, EnvasesSlider, NewsCarrousel } from "../components"
import { WeInspireBeauty } from "../lottie"
import { ByGardeniaNaturalsIcon } from "../icons"
import { ProcessCard } from "../components/ProcessCard"

export const HomePage = () => {
    return (
        <section>
            <div className="relative flex flex-col items-center justify-center h-screen">
                <div className="w-screen h-full overflow-hidden">
                    <video autoPlay muted loop playsInline className="object-contain min-w-full">
                        <source src="/videos/home-cosmetic.mp4" />
                    </video>
                </div>
                <div className="absolute flex flex-col items-center text-center">
                    <h1 className="text-6xl font-medium">Eleva tu<br/>marca cosmética</h1>
                    <p className="text-4xl font-light leading-9 mt-1">
                        con nuestras fórmulas<br/> innovadoras 
                        y envases<br/> sin igual
                    </p>
                    <Button text="MÁS INFORMACIÓN" className="mt-9" />
                </div>
                <div className="absolute bottom-10">
                    <ByGardeniaNaturalsIcon />
                </div>
            </div>

            <div className="w-screen bg-[#E0A5FF] py-36 relative overflow-hidden" >
                <img src="/img/home/formulacion-y-maquila-2.png" alt="" className="absolute left-[335px] rotate-[-24deg] bottom-[28px]" />
                <img src="/img/home/formulacion-y-maquila-1.png" alt="" className="absolute -left-32 rotate-6 -bottom-44 w-[600px]" />
                <p className="m-auto w-[585px] text-2xl text-black text-center">
                    Ofrecemos la formulación y/o maquila de productos 
                    de <span className="text-[#D80196] font-bold">alta calidad</span> y cumplimos con todas 
                    las regulaciones.<br/> Ayudamos a las marcas a ofrecer
                    productos que complementan su<br/>
                    <span className="text-[#D80196] font-bold">propuesta de valor.</span>
                </p>
                <img src="/img/home/formulacion-y-maquila-1.png" alt="" className="absolute right-40 rotate-[30deg] bottom-1 w-[600px]" />
            </div>

            <div className="w-screen bg-[#E71567]">
                <h1 className="text-center py-5 text-[#E0A5FF] text-5xl font-thin">Proceso de maquila</h1>
            </div>

            <div className="w-full flex justify-center gap-5 py-52 relative">
                <div className="w-screen h-full overflow-hidden absolute top-0">
                    <video autoPlay muted loop playsInline className="object-contain min-w-full">
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

            <div className="w-full h-10"></div>
            
            <div className="relative h-[1000px] bg-white overflow-hidden">
                <div className="h-[500px] w-[500px] absolute -top-28 left-10 mask-image">
                    <div className="absolute w-1/2 h-full bg-gradient-to-r from-25% from-white to-transparent"></div>
                    <WeInspireBeauty />
                </div>
                <div className="relative m-auto w-3/4 h-full flex items-center justify-center">
                    <img src="img/home/labios.png" alt="" className="absolute"/>
                    <img src="img/home/labial-rojo.png" alt="" className="hover:scale-125 transition w-[250px] absolute top-44 left-72"/>
                    <img src="img/home/labial-cafe.png" alt="" className="hover:scale-125 transition w-[250px] absolute top-28 right-[495px]"/>
                    <img src="img/home/labial-magenta.png" alt="" className="hover:scale-125 transition w-[250px] absolute top-64 right-36"/>
                    <img src="img/home/labial-cafe-claro.png" alt="" className="hover:scale-125 transition w-[250px] absolute bottom-72 right-28"/>
                    <img src="img/home/labial-violeta.png" alt="" className="hover:scale-125 transition w-[250px] absolute bottom-36 right-[510px]"/>
                    <img src="img/home/labial-morado.png" alt="" className="hover:scale-125 transition w-[250px] absolute bottom-44 left-72"/>
                    <img src="img/home/labial-naranja.png" alt="" className="hover:scale-125 transition w-[250px] absolute bottom-96 left-16"/>
                </div>
            </div>

            <div className="w-full h-10 bg-[#E0A5FF]"></div>

            <div className="py-40">
                <div className="m-auto max-w-[800px] ">
                    <video autoPlay muted loop playsInline className="object-contain min-w-full">
                        <source src="/videos/home-cosmetic.mp4" />
                    </video>
                </div>
            </div>

            <div className="w-full bg-[#E0A5FF] py-16 px-40">
                <EnvasesSlider />
            </div>

            <div className="container m-auto py-20 bg-white">
                <NewsCarrousel />
            </div>
        </section>
    )
}
