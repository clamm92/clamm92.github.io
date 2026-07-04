import {
  getGalleryImageLabel,
  getGalleryImageSrc,
  getGalleryThumbAriaLabel,
  isExternalGalleryImage,
  openExternalGalleryImage,
} from "../../utils/galleryImage";

function DetailGalleryThumbs({
  images,
  labelContext,
  enlargeActionLabel,
  onImageSelect,
}) {
  const handleImageClick = (image, index) => {
    if (openExternalGalleryImage(image)) return;

    onImageSelect({
      src: getGalleryImageSrc(image),
      alt: getGalleryImageLabel(image, labelContext, index),
    });
  };

  return (
    <div className="detail-panel-gallery">
      {images.map((image, index) => {
        const imgSrc = getGalleryImageSrc(image);
        const isExternal = isExternalGalleryImage(image);

        return (
          <button
            key={imgSrc}
            type="button"
            className="detail-panel-gallery-thumb"
            onClick={() => handleImageClick(image, index)}
            aria-label={getGalleryThumbAriaLabel(
              image,
              labelContext,
              index,
              enlargeActionLabel
            )}
          >
            <img src={imgSrc} alt="" loading="lazy" decoding="async" />
            {isExternal && (
              <span className="detail-panel-gallery-badge" aria-hidden="true">
                PDF
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default DetailGalleryThumbs;
