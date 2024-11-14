export default function VideoBackground() {
    return (
        <>
            <div className="w-screen  aspect-video">
                <iframe 
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/rJNBGqiBI7s?si=ecpUCBveTVcU9Mvy&autoplay=1&controls=0&showinfo=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </div>
        </>
    );
}
