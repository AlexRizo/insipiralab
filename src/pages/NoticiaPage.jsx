import { NewsHeader } from "../UI"

export const NoticiaPage = () => {
    return (
        <section className="h-screen bg-white flex flex-col">
            <NewsHeader />
            <main className="flex xl:items-center justify-center h-full">
                <img 
                    src="/img/noticias/noticia.jpg" 
                    alt="Embellecen a la mujer con consméticos sustentables" 
                    className="h-max w-full xl:w-[1100px] 3xl:w-[1300px] 3xl:mt-10"
                />
            </main>
        </section>
    )
}
