export function getEmbedURL(videoUrl) {
  if (!videoUrl) return "";

  const match = videoUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
  );

  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : videoUrl;
}