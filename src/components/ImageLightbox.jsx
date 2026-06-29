import { useEffect, useRef } from "react";

function ImageLightbox({ src, alt, onClose }) {
  const closeRef = useRef(null);
  const label = alt || "Enlarged image";

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="image-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="image-modal-content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={label}
      >
        <button
          ref={closeRef}
          type="button"
          className="image-modal-close"
          onClick={onClose}
          aria-label="Close enlarged image"
        >
          ×
        </button>
        <img src={src} alt={label} className="image-modal-img" />
      </div>
    </div>
  );
}

export default ImageLightbox;
