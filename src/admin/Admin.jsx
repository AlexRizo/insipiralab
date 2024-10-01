import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Admin = () => {
    const { status } = useSelector(state => state.auth);

    if (status !== 'authenticated') return <Navigate to='/login'/>;
    
    return (
        <section className="flex flex-col items-center w-full bg-gray-500 py-28">
            <h1>Panel Administrativo</h1>
            <div className="w-2/3">
                <form form-section="homepage" className="flex flex-col gap-5">
                    <div className="flex flex-col" >
                        <label htmlFor="title">Título</label>
                        <input type="text" id="title" name="title" placeholder="Título principal" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                    </div>
                    <div className="flex flex-col" >
                        <label htmlFor="subTitle">Subtítulo</label>
                        <input type="text" id="subTitle" name="subTitle" placeholder="Subtitulo principal" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                    </div>
                    <hr />
                    <h2>Sección 2</h2>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="texto_inicio">Texto de inicio</label>
                            <input type="text" id="texto_inicio" name="texto_inicio" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="resaltada1">Primera frase resaltada</label>
                            <input type="text" id="resaltada1" name="resaltada1" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="texto_fin">Texto final</label>
                            <input type="text" id="texto_fin" name="texto_fin" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="resaltada2">Segunda frase resaltada</label>
                            <input type="text" id="resaltada2" name="resaltada2" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="pinkDivider">Divisor rosa</label>
                        <input type="text" id="pinkDivider" name="pinkDivider" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                    </div>
                    <hr />
                    <h2>Cards</h2>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="card_title_1">Título:</label>
                            <input type="text" id="card_title_1" name="card_title_1" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="card_img_1">Imagen:</label>
                            <input type="file" id="card_img_1" name="card_img_1" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black bg-white" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="card_title_2">Título:</label>
                            <input type="text" id="card_title_2" name="card_title_2" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="card_img_2">Imagen:</label>
                            <input type="file" id="card_img_2" name="card_img_2" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black bg-white" />
                        </div>
                    </div>
                    <hr />

                    <div className="flex flex-col">
                        <label htmlFor="videoURL">Video informativo</label>
                        <input type="text" id="videoURL" name="videoURL" placeholder="URL del video informativo" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                    </div>
                    <hr />
                    <h2>Slider de productos</h2>
                    <div>
                        <h3>Producto 1</h3>
                        <div className="flex gap-5">
                            <div className="flex flex-col w-full">
                                <label htmlFor="slide-1-name">Nombre</label>
                                <input type="text" id="slide-1-name" name="slide-1-name" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="slide-1-img">Imagen</label>
                                <input type="file" id="slide-1-img" name="slide-1-img" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black bg-white" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="newsSliderTitle">Título de Noticias</label>
                        <input type="text" name="newsSliderTitle" id="newsSliderTitle" className="p-4 rounded border border-transparent focus:outline-none focus:border-[#E71567] text-black" />
                    </div>
                </form>
            </div>
        </section>
    )
}