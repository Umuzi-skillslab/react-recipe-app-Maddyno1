//Converts numbers so that they look better for UI
export function formatCookTime(minutes = 0) {
    if (minutes < 60) return `${minutes} min`;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins ? `${hrs} hr ${mins} min` : `${hrs} hr`;
}

//Helps with pulling video ID from YouTube URL formats
export function getYoutubeVideoId(url = "") {
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
}