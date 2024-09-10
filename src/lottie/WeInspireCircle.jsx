import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export const WeInspireCircle = (props) => {
    return (
        <DotLottieReact
            src="/lottie/02-Circulo.lottie"
            loop={ true } // El loop solo se activa cuando isLooping es true
            autoplay
            {...props}
        />
    )
}
