import { useCallback, useEffect, useRef, useState } from "react";

export const DETAIL_PANEL_CLOSE_MS = 300;

export function useDetailPanel(onClose) {
  const closeButtonRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const initiateClose = useCallback(() => {
    if (isClosing) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      onClose();
      return;
    }

    setIsClosing(true);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isClosing) return;

    const timer = window.setTimeout(onClose, DETAIL_PANEL_CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [isClosing, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") initiateClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [initiateClose]);

  return {
    closeButtonRef,
    initiateClose,
    rootClassName: `detail-panel-root${isClosing ? " is-closing" : ""}`,
  };
}
