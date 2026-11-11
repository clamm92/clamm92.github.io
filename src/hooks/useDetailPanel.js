import { useCallback, useEffect, useRef, useState } from "react";
import { useBodyScrollLock } from "./useBodyScrollLock";
import { useEscapeKey } from "./useEscapeKey";

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

  useBodyScrollLock(true);
  useEscapeKey(initiateClose);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return {
    closeButtonRef,
    initiateClose,
    rootClassName: `detail-panel-root${isClosing ? " is-closing" : ""}`,
  };
}
