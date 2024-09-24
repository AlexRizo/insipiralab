import { useEffect } from 'react';

export const CursorTrail = () => {
    useEffect(() => {
        const circles = document.querySelectorAll('.circle');
        const coords = { x: 0, y: 0 };

        circles.forEach((circle) => {
            circle.x = 0;
            circle.y = 0;
        });

        window.addEventListener('mousemove', e => {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });
        
        const animateCircles = () => {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                // Calcula la posición del círculo
                circle.style.left = `${x - 12}px`; // Ajusta para centrar el círculo
                circle.style.top = `${y - 12}px`; // Ajusta para centrar el círculo

                circle.style.scale = (circles.length - index) / circles.length;
                
                circle.x = x;
                circle.y = y;
                // Ajusta la nueva posición para el siguiente círculo
                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.55;
                y += (nextCircle.y - y) * 0.55;
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

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