import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';

export const WeInspireBeauty = () => {
    const [loop, setLoop] = useState(false);
    const [frames, setFrames] = useState([]);

    setTimeout(() => {
        setLoop(true);
        setFrames([100, 1000]);
    }, 7000);
    
    return (
        <DotLottieReact
            src="/lottie/01-We-Inspire.lottie"
            loop={loop} // El loop solo se activa cuando isLooping es true
            autoplay
            segment={ frames }
        />
    )
}
