export function getYouTubeEmbedSrc(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    } else {
        throw new Error("URL inválida");
    }
}
