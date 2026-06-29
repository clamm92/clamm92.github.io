import BlockShell from "./BlockShell";

function GalleryBlock({ title = "Photos", images = [], blockIndex, onImageClick }) {
  const handleImageClick = (image) => {
    if (typeof image === "object" && image.externalLink) {
      window.open(image.externalLink, "_blank", "noopener,noreferrer");
      return;
    }

    const src = typeof image === "object" ? image.src : image;
    onImageClick?.(src);
  };

  return (
    <BlockShell blockIndex={blockIndex}>
      <h3 className="detail-panel-section-title">{title}</h3>
      <div className="detail-panel-gallery">
        {images.map((image) => {
          const imgSrc = typeof image === "object" ? image.src : image;
          const isExternal = typeof image === "object" && image.externalLink;

          return (
            <button
              key={imgSrc}
              type="button"
              className="detail-panel-gallery-thumb"
              onClick={() => handleImageClick(image)}
            >
              <img src={imgSrc} alt="" />
              {isExternal && (
                <span className="detail-panel-gallery-badge">PDF</span>
              )}
            </button>
          );
        })}
      </div>
    </BlockShell>
  );
}

export default GalleryBlock;
