import { useState } from "react";
import { LabialesData } from "../data/data";

export const LabialComponent = () => {
    const [labial, setLabial] = useState('img/home/labios-1.png');
    const [provisionalLabial, setProvisionalLabial] = useState('');

    const handleLabial = (i) => {
        setLabial(LabialesData[i].path);
    }
    
    const handleMouseEnter = (i) => {
        setProvisionalLabial(LabialesData[i].path);
    }
    
    return (
        <div className="relative mt-auto xl:m-auto xl:w-3/4 h-[90%] xl:h-full flex items-center justify-center">
            <img 
                src={ !!provisionalLabial ? provisionalLabial : labial }
                className="absolute w-72 xl:w-[420px] 3xl:w-[480px] translate-y-5"
            />
            <img 
                onClick={ () => handleLabial(0) }
                onMouseEnter={ () => handleMouseEnter(0) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-rojo.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-250px] -translate-x-24 xl:-translate-y-56 3xl:-translate-y-[272px] xl:-translate-x-56 3xl:-translate-x-64 cursor-none"
            />
            <img 
                onClick={ () => handleLabial(2) }
                onMouseEnter={ () => handleMouseEnter(2) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-cafe.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-130px] -translate-x-24 xl:-translate-y-64 3xl:-translate-y-[300px] xl:translate-x-32 cursor-none"
            />
            <img 
                onClick={ () => handleLabial(1) }
                onMouseEnter={ () => handleMouseEnter(1) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-magenta.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-250px] translate-x-24 xl:-translate-y-36 xl:translate-x-96 3xl:translate-x-[450px] cursor-none"
            />
            <img 
                onClick={ () => handleLabial(3) }
                onMouseEnter={ () =>  handleMouseEnter(3) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-cafe-claro.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-[-130px] translate-x-24 xl:translate-y-28 3xl:translate-y-36 xl:translate-x-[410px] 3xl:translate-x-[480px] cursor-none"
            />
            <img 
                onClick={ () => handleLabial(4) }
                onMouseEnter={ () => handleMouseEnter(4) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-violeta.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-52 -translate-x-24 xl:translate-y-60 3xl:translate-y-72 xl:translate-x-16 cursor-none"
            />
            <img 
                onClick={ () => handleLabial(5) }
                onMouseEnter={ () => handleMouseEnter(5) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-morado.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-80 xl:translate-y-48 3xl:translate-y-60 xl:-translate-x-72 3xl:-translate-x-80 cursor-none"
            />
            <img 
                onClick={ () => handleLabial(6) }
                onMouseEnter={ () => handleMouseEnter(6) }
                onMouseLeave={ () => setProvisionalLabial('') }
                src="img/home/labial-naranja.png"
                className="hover:scale-125 transition w-[155px] xl:w-[235px] 3xl:w-[250px] absolute translate-y-52 translate-x-24 xl:-translate-y-5 xl:translate-x-[-470px] 3xl:translate-x-[-510px] cursor-none"
            />
        </div>
    )
}
