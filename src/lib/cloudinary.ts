const CLOUD_NAME = "fl5vkej3";

export function cldVideo(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}.mp4`;
}

export function cldPoster(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto,so_0/${publicId}.jpg`;
}
