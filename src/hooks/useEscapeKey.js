import { useEffect, useRef } from "react";

const escapeStack = [];

function handleWindowKeyDown(event) {
  if (event.key !== "Escape" || escapeStack.length === 0) return;

  const topHandlerRef = escapeStack[escapeStack.length - 1];
  event.preventDefault();
  topHandlerRef.current();
}

export function useEscapeKey(onEscape, active = true) {
  const handlerRef = useRef(onEscape);

  useEffect(() => {
    handlerRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!active) return undefined;

    if (escapeStack.length === 0) {
      window.addEventListener("keydown", handleWindowKeyDown);
    }
    escapeStack.push(handlerRef);

    return () => {
      const index = escapeStack.lastIndexOf(handlerRef);
      if (index !== -1) escapeStack.splice(index, 1);

      if (escapeStack.length === 0) {
        window.removeEventListener("keydown", handleWindowKeyDown);
      }
    };
  }, [active]);
}
