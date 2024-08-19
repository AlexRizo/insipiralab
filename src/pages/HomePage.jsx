import { CodeBracketIcon, LockClosedIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Button, Card, NewsCarrousel } from "../components"
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
                <div className="m-auto max-w-[800px] h-[600px]">
                    <video autoPlay muted loop playsInline className="object-contain min-w-full">
                        <source src="/videos/home-cosmetic.mp4" />
                    </video>
                </div>
            </div>

            {/* <div className="container relative m-auto">
                <div className="absolute w-16 h-16 bg-pink-600 rounded-full right-3 top-[100px] animate-bounce"></div>
                <div className="absolute w-16 h-16 bg-pink-600 rounded-full left-[42%] top-[42%]"></div>
                <div className="flex flex-col items-center gap-14 py-20 backdrop-blur-lg">
                    <h2 className="text-5xl text-center font-light text-pink-600">
                        Conoce más sobre nuestros
                        <br />
                        productos y proceso de maquila
                    </h2>
                    <Button text="MÁS INFORMACIÓN" />
                    <div className="text-center font-light text-2xl mt-10">
                        <p className="mb-7">
                            Ofrecemos la formulación y/o maquila de
                            <span className="font-normal text-pink-600 text-4xl"> productos de alta calidad </span>
                            y cumplimos con todas las regulaciones.
                        </p>
                        <p>
                            Ayudamos a las marcas a ofrecer productos que complementen su
                            <span className="font-normal text-pink-600 text-4xl"> propuesta de valor</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container m-auto flex flex-row gap-10">
                <Card text="Compromiso" >
                    <CodeBracketIcon className="h-40" />
                </Card>
                <Card text="Transparencia" >
                    <MagnifyingGlassIcon className="h-40" />
                </Card>
                <Card text="Confidencialidad" >
                    <LockClosedIcon className="h-40" />
                </Card>
            </div> */}
            <div className="container m-auto h-[500px]">
                <NewsCarrousel />
            </div>
        </section>
    )
}
