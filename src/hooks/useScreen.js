import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
    const [screen, setScreen] = useState(1); //? 1 for mobile, 2 for labtop, 3 for desktop

    const isMobile = useMediaQuery({ query: '(min-width: 0px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1280px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1760px)' });

    useEffect(() => {
        const newScreen = isDesktop ? 3 : isLaptop ? 2 : 1;
        setScreen(newScreen);
    }, [isMobile, isLaptop, isDesktop]);

    return { screen };
};