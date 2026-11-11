import { useEffect } from "react";

const activeLocks = new Set();
let savedBodyOverflow = "";

export function useBodyScrollLock(locked = true) {
  useEffect(() => {
    if (!locked) return undefined;

    const token = Symbol("body-scroll-lock");
    if (activeLocks.size === 0) {
      savedBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    activeLocks.add(token);

    return () => {
      activeLocks.delete(token);
      if (activeLocks.size === 0) {
        document.body.style.overflow = savedBodyOverflow;
      }
    };
  }, [locked]);
}
