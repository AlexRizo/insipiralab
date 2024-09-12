import { useState } from "react";
import { LabialesData } from "../data/data";

export const LabialComponent = () => {
    const [labial, setLabial] = useState('img/home/labios-1.png');

    const handleLabial = (i = 0) => {
        setLabial(LabialesData[i].path);
    }
    return (
        <div className="relative mt-auto xl:m-auto xl:w-3/4 h-[90%] xl:h-full flex items-center justify-center">
            <img 
                src={ labial }
                className="absolute w-72 xl:w-[420px] 3xl:w-auto translate-y-5"
            />
            <img 
                onClick={ () => handleLabial(0) }
                src="img/home/labial-rojo.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-250px] -translate-x-24 xl:-translate-y-56 3xl:-translate-y-[272px] xl:-translate-x-56 3xl:-translate-x-64 cursor-pointer"
            />
            <img 
                onClick={ () => handleLabial(2) }
                src="img/home/labial-cafe.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-130px] -translate-x-24 xl:-translate-y-64 3xl:-translate-y-[300px] xl:translate-x-32 cursor-pointer"
            />
            <img 
                onClick={ () => handleLabial(1) }
                src="img/home/labial-magenta.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-250px] translate-x-24 xl:-translate-y-36 xl:translate-x-96 3xl:translate-x-[450px] cursor-pointer"
            />
            <img 
                onClick={ () => handleLabial(3) }
                src="img/home/labial-cafe-claro.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-130px] translate-x-24 xl:translate-y-28 3xl:translate-y-36 xl:translate-x-[410px] 3xl:translate-x-[480px] cursor-pointer"
            />
            <img 
                onClick={ () => handleLabial(4) }
                src="img/home/labial-violeta.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-52 -translate-x-24 xl:translate-y-60 3xl:translate-y-72 xl:translate-x-16 cursor-pointer"
            />
            <img 
                onClick={ () => handleLabial(5) }
                src="img/home/labial-morado.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-80 xl:translate-y-48 3xl:translate-y-60 xl:-translate-x-72 3xl:-translate-x-80 cursor-pointer"
            />
            <img 
                onClick={ () => handleLabial(6) }
                src="img/home/labial-naranja.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-52 translate-x-24 xl:-translate-y-5 xl:translate-x-[-470px] 3xl:translate-x-[-510px] cursor-pointer"
            />
        </div>
    )
}
