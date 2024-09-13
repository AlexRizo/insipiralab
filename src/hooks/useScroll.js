import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Ajusta el valor según tus necesidades
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpieza del evento al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrolled };
};