import { useEffect } from 'react';

export const CursorTrail = () => {
    useEffect(() => {
        const circles = document.querySelectorAll('.circle');

        circles.forEach((circle) => {
            circle.x = 0;
            circle.y = 0;
        });

        const animateCircles = (e) => {
            let x = e.clientX;
            let y = e.clientY;

            circles.forEach((circle, index) => {
                // Calcula la posición del círculo
                circle.style.left = `${x - 12}px`; // Ajusta para centrar el círculo
                circle.style.top = `${y - 12}px`; // Ajusta para centrar el círculo

                circle.style.scale = index / 10;
                
                circle.x = x;
                circle.y = y;
                // Ajusta la nueva posición para el siguiente círculo
                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });
        };

        window.addEventListener('mousemove', animateCircles);

        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener('mousemove', animateCircles);
        };
    }, []);

    return <>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </>;
};