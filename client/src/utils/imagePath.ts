export function imagePath(fileName: string) {
  return `${import.meta.env.BASE_URL}images/${fileName}`;
}

export function imageUrl(fileName: string) {
  return `url("${imagePath(fileName)}")`;
}
