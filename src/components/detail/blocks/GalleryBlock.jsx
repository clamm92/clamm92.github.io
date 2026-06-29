import BlockShell from "./BlockShell";
import DetailGalleryThumbs from "../DetailGalleryThumbs";

function GalleryBlock({ title = "Photos", images = [], blockIndex, onImageClick }) {
  return (
    <BlockShell blockIndex={blockIndex}>
      <h3 className="detail-panel-section-title">{title}</h3>
      <DetailGalleryThumbs
        images={images}
        labelContext={title}
        enlargeActionLabel="Enlarge photo"
        onImageSelect={onImageClick}
      />
    </BlockShell>
  );
}

export default GalleryBlock;
