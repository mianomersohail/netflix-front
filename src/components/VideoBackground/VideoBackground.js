export default function VideoBackground() {
    return (
        <>
            <div className="w-screen  aspect-video">
                <iframe 
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/Zv11L-ZfrSg?si=CXpJaCKV9xxHHph7&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </div>
        </>
    );
}
