export function getGalleryImageSrc(image) {
  return typeof image === "object" ? image.src : image;
}

export function isExternalGalleryImage(image) {
  return typeof image === "object" && Boolean(image.externalLink);
}

export function openExternalGalleryImage(image) {
  if (!isExternalGalleryImage(image)) return false;

  window.open(image.externalLink, "_blank", "noopener,noreferrer");
  return true;
}

export function getGalleryImageLabel(image, fallback, index = 0) {
  if (typeof image === "object" && image.alt) return image.alt;

  const src = getGalleryImageSrc(image);
  const filename =
    src
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .replace(/[-_]+/g, " ") ?? `image ${index + 1}`;

  return fallback ? `${fallback}: ${filename}` : filename;
}

export function getGalleryThumbAriaLabel(image, labelContext, index, enlargeActionLabel) {
  const label = getGalleryImageLabel(image, labelContext, index);

  return isExternalGalleryImage(image)
    ? `Open PDF: ${label}`
    : `${enlargeActionLabel}: ${label}`;
}
