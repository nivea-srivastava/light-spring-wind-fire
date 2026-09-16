import { useEffect, type RefObject } from "react";

const SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
  active: boolean,
  ref: RefObject<HTMLElement | null>,
  onEscape?: () => void,
) {
  useEffect(() => {
    if (!active) return;
    const root = ref.current;
    if (!root) return;

    const previously = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(root.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
      );

    const first = focusables()[0];
    first?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onEscape?.();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }

    document.addEventListener("keydown", onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      previously?.focus?.();
    };
  }, [active, ref, onEscape]);
}
