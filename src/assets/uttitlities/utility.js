function getImageUrl(name) {
  return new URL(`../movie-covers/${name}`, import.meta.url).href;
}
export { getImageUrl };
