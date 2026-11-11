import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useEscapeKey } from "../hooks/useEscapeKey";

function ImageLightbox({ src, alt, onClose }) {
  const closeRef = useRef(null);
  const label = alt || "Enlarged image";

  useBodyScrollLock(true);
  useEscapeKey(onClose);

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeRef.current?.focus();

    return () => {
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  return createPortal(
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
    </div>,
    document.body
  );
}

export default ImageLightbox;
