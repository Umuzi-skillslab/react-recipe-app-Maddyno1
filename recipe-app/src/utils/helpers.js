//Converts numbers so that they look better for UI
export function formatCooktime(minutes = 0) {
    if (minutes < 60) return `${minutes} min`;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins ? `${hrs} hr ${mins} min` : `${hrs} hr`;
}