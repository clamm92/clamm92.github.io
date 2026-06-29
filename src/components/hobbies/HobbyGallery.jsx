import { useCallback, useEffect, useMemo, useState } from "react";
import { groupGalleryPhotos } from "../../data/hobbies";
import { useInView } from "../../hooks/useInView";

function GalleryPhotoButton({ photo, index, variant, onOpen }) {
  const className =
    variant === "mosaic"
      ? `hobby-gallery-item hobby-gallery-item--${photo.layout ?? "default"}`
      : "hobby-gallery-scroll-item";

  return (
    <figure
      className={className}
      style={{ "--photo-index": index }}
      role={variant === "scroll" ? "listitem" : undefined}
    >
      <button
        type="button"
        className={
          variant === "mosaic"
            ? "hobby-gallery-item-frame"
            : "hobby-gallery-scroll-button"
        }
        onClick={() => onOpen(photo)}
        aria-label={`Expand photo: ${photo.caption}`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className={
            variant === "mosaic"
              ? "hobby-gallery-item-img"
              : "hobby-gallery-scroll-img"
          }
          loading="lazy"
        />
        {variant === "mosaic" ? (
          <span className="hobby-gallery-item-caption">{photo.caption}</span>
        ) : null}
      </button>
      {variant === "scroll" ? (
        <figcaption className="hobby-gallery-scroll-caption">
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function buildMosaicItems(groups) {
  const mosaicItems = [];
  let staggerIndex = 0;

  groups.forEach((group) => {
    if (group.type === "cluster") {
      mosaicItems.push({
        type: "cluster",
        id: group.id,
        startIndex: staggerIndex,
        photos: group.photos.map((photo) => {
          const item = { photo, index: staggerIndex };
          staggerIndex += 1;
          return item;
        }),
      });
      return;
    }

    mosaicItems.push({
      type: "photo",
      photo: group.photo,
      index: staggerIndex,
    });
    staggerIndex += 1;
  });

  return mosaicItems;
}

function HobbyGallery({ photos }) {
  const [galleryRef, isInView] = useInView();
  const [expandedPhoto, setExpandedPhoto] = useState(null);
  const groups = groupGalleryPhotos(photos);
  const mosaicItems = useMemo(() => buildMosaicItems(groups), [groups]);

  const openPhoto = useCallback((photo) => setExpandedPhoto(photo), []);
  const closePhoto = useCallback(() => setExpandedPhoto(null), []);

  useEffect(() => {
    if (!expandedPhoto) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePhoto();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedPhoto, closePhoto]);

  return (
    <>
      <aside
        ref={galleryRef}
        className={`hobby-gallery ${isInView ? "is-visible" : ""}`}
        aria-label="Photo gallery"
      >
        <p className="hobby-gallery-label">Snapshots</p>

        <div className="hobby-gallery-mosaic">
          {mosaicItems.map((item) => {
            if (item.type === "cluster") {
              return (
                <div
                  key={item.id}
                  className="hobby-gallery-cluster"
                  style={{ "--photo-index": item.startIndex }}
                >
                  {item.photos.map(({ photo, index }) => (
                    <GalleryPhotoButton
                      key={photo.src}
                      photo={photo}
                      index={index}
                      variant="mosaic"
                      onOpen={openPhoto}
                    />
                  ))}
                </div>
              );
            }

            return (
              <GalleryPhotoButton
                key={item.photo.src}
                photo={item.photo}
                index={item.index}
                variant="mosaic"
                onOpen={openPhoto}
              />
            );
          })}
        </div>

        <div className="hobby-gallery-scroll" role="list">
          {photos.map((photo, index) => (
            <GalleryPhotoButton
              key={`scroll-${photo.src}`}
              photo={photo}
              index={index}
              variant="scroll"
              onOpen={openPhoto}
            />
          ))}
        </div>
      </aside>

      {expandedPhoto && (
        <div
          className="hobby-lightbox-overlay"
          onClick={closePhoto}
          role="presentation"
        >
          <div
            className="hobby-lightbox-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={expandedPhoto.caption}
          >
            <button
              type="button"
              className="hobby-lightbox-close"
              onClick={closePhoto}
              aria-label="Close expanded photo"
            >
              ×
            </button>
            <img
              src={expandedPhoto.src}
              alt={expandedPhoto.alt}
              className="hobby-lightbox-img"
            />
            <p className="hobby-lightbox-caption">{expandedPhoto.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default HobbyGallery;
