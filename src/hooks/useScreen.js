import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
    const [screen, setScreen] = useState(1); //? 1 for mobile, 2 for labtop, 3 for desktop

    const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1280px) and (max-width: 1759px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1760px)' });

    useEffect(() => {
        setScreen(isDesktop ? 3 : isLaptop ? 2 : 1);
    }, [isMobile, isLaptop, isDesktop]);

    return { screen };
};