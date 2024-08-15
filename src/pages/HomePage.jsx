import { CodeBracketIcon, LockClosedIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Button, Card, NewsCarrousel } from "../components"
import { WeInspireBeauty } from "../lottie"

export const HomePage = () => {
    return (
        <section>
            <div className="relative flex items-center justify-center h-screen">
                {/* <div className="flex flex-col items-center gap-28">
                    <p className="text-center flex flex-col gap-2 text-5xl font-light">
                        <span>Producción de</span>
                        <span className="font-normal">cosméticos naturales</span>
                        <span>de primera calidad</span>
                    </p>
                    <Button text="MÁS INFORMACIÓN" />
                </div> */}
                <WeInspireBeauty />

            </div>

            <div className="container relative m-auto">
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
            </div>
            <div className="container m-auto h-[500px]">
                <NewsCarrousel />
            </div>
        </section>
    )
}
