import YouTubeBackground from 'react-youtube-background';

export const Video = () => {
    return (
        <YouTubeBackground
        videoId="sfPhz0zGL7g"  // El ID del video de YouTube
        className="video-background"
        overlay="rgba(0,0,0,.4)"  // Puedes añadir un overlay si lo deseas
        playerOptions={{
            autoplay: 1,      // Habilitar autoplay
            controls: 0,      // Ocultar controles
            loop: 1,          // Habilitar loop
            mute: 1,          // Silenciar video
            showinfo: 0,      // Quitar información del video
            modestbranding: 1, // Reducir branding de YouTube
            rel: 0,           // No mostrar videos relacionados al final
        }}
        >
        {/* Aquí puedes colocar cualquier contenido que aparecerá sobre el video de fondo */}
        <div className="content-overlay">
            <h1>Texto sobre el video</h1>
        </div>
        </YouTubeBackground>
    );
};