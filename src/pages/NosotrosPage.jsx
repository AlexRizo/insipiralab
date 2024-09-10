import { Art1, Art2 } from "../art"
import { Button, GridCol, Spam } from "../components"
import { GridData } from "../data/data"
import { ArrowIcon, InspiralabHeaderIcon } from "../icons"

export const NosotrosPage = () => {
    return (
        <section>
            <div className="container relative m-auto flex flex-col items-center justify-center h-screen gap-36">
                <article className="flex flex-col items-center font-thin gap-4">
                    <h1 className="text-5xl">Manifiesto</h1>
                    <p className="text-xl leading-10">
                        <span className="font-medium">INSPIRA LAB</span> es un universo donde 
                        la belleza, creatividad y la ciencia 
                        se<br/> encuentran en perfecta armonía. 
                        Somos una marca que se dedica con 
                        pasión y<br/> entusiasmo a la creación de 
                        cosméticos innovadores en donde 
                        ofrecemos una<br/> gama excepcional de 
                        envases únicos y exclusivos en México.
                    </p>
                </article>

                <article className="flex flex-col items-center font-thin gap-4">
                    <InspiralabHeaderIcon />
                    <p className="text-xl leading-10">
                        Donde la ciencia cosmética y la 
                        innovación se unen para inspirar 
                        la belleza. 
                    </p>
                </article>

                <ArrowIcon className="absolute bottom-24" />
            </div>

            <div className="w-full relative flex items-center justify-center bg-[#E0A5FF] overflow-hidden py-36">
                <Art1 className="absolute -left-28 -top-1 hidden 3xl:block" color="#e71567" />
                <Art1 className="absolute -left-24 -top-13 3xl:hidden" color="#e71567" width={550} />
                <Spam text='We inspire beauty' />
                <Art2 className="absolute -right-28 top-8 hidden 3xl:block" />
                <Art2 className="absolute -right-24 top-8 3xl:hidden" width={400} />
            </div>

            <div className="flex justify-center gap-16 font-light w-full bg-[#F5F5F5] text-black py-32">
                <h1 className="w-min text-[#E71567] text-[42px] leading-[1]">
                    By
                    Gardenia
                    Naturals
                </h1>
                <div className="leading-8">
                    <p>
                        Hace cuatro años, un grupo de científicos 
                        visionarios se unieron con un sueño<br/> en 
                        común: crear cosméticos naturales de alta 
                        calidad que inspiren belleza y<br/> creatividad. 
                        Así nació Gardenia Naturals, un 
                        emprendimiento lleno de pasión y<br/> dedicación. 
                        Con el tiempo, nuestro expertise y 
                        compromiso nos han llevado a<br/> ser reconocidos 
                        como los mejores formuladores de México.
                    </p>
                    <br />
                    <p>
                        Hoy, en alianza con empresarias líderes, 
                        hemos ampliado nuestras fronteras<br/> para 
                        ofrecer servicios de fabricación de 
                        cosméticos a marcas extranjeras que<br/> buscan 
                        abrir mercado en México, bajo el nombre de 
                        INSPIRA LAB. Nuestro<br/> viaje ha sido una mezcla 
                        de ciencia, naturaleza y creatividad, y nos 
                        sentimos<br/> orgullosos de cada paso que hemos 
                        dado para llegar hasta aquí.
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center relative">
                <div className="w-full h-auto max-h-[600px] overflow-hidden relative">
                    <video autoPlay muted loop playsInline className="object-cover w-full h-full">
                        <source src="/videos/nosotros-animacion.mp4" />
                    </video>
                </div>
                <div className="flex flex-col items-center gap-8 absolute">
                    <h1 className="text-5xl font-thin text-center" >
                        Conoce más sobre nuestros <br/>
                        productos y proceso de maquila
                    </h1>
                    <Button text="MÁS INFORMACIÓN" className="text-sm gap-11 pr-8" button={ 0 } />
                </div>
            </div>

            <div className="w-full bg-white flex flex-col items-center pt-14 pb-28">
                <h1 className="text-5xl text-[#E71567] font-light mb-20">Nuestros Valores</h1>
                <GridCol data={ GridData } />
            </div>

            <div className="w-full bg-[#E71567] flex justify-center relative 3xl:py-20 py-16 overflow-hidden">
                <img src="/img/home/formulacion-y-maquila-2.png" className="absolute 3xl:left-5 left-10 3xl:-bottom-24 -bottom-16 3xl:w-auto w-[400px]"/>
                <p className="text-center text-black 3xl:text-5xl text-[46px] leading-[3rem] font-thin">
                    ¡Gracias por ser parte de<br/> nuestra historia<br/>
                    y permitirnos <span className="font-bold">inspirar<br/> belleza!</span>
                </p>
                <Art1 className="absolute right-10 hidden 3xl:block -bottom-52" color="#000" />
                <Art1 className="absolute right-10 3xl:hidden -bottom-52" color="#000" width={550} />
            </div>
        </section>
    )
}
