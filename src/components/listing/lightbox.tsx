import { useCallback, useEffect, useRef } from "react";
import { PHOTOS } from "@/lib/listing-data";
import { CloseIcon, ChevronLeft, ChevronRight } from "./icons";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { clamp } from "@/lib/utils";

type LightboxProps = {
  open: boolean;
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
};

export function Lightbox({ open, index, onIndex, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open, dialogRef, onClose);

  const photo = PHOTOS[index];
  const total = PHOTOS.length;

  const prev = useCallback(() => {
    onIndex(clamp(index - 1, 0, total - 1));
  }, [index, onIndex, total]);

  const next = useCallback(() => {
    onIndex(clamp(index + 1, 0, total - 1));
  }, [index, onIndex, total]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  if (!open || !photo) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] bg-[#222] text-paper overlay-fade flex flex-col"
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-16 shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 h-10 px-3 rounded-pill hover:bg-white/10 text-sm font-semibold"
          aria-label="Close photo viewer"
        >
          <CloseIcon size={16} />
          Close
        </button>
        <div className="text-sm font-medium tabular-nums" aria-live="polite">
          {index + 1} / {total}
        </div>
        <div className="w-24" />
      </div>

      <div className="flex-1 relative flex items-center justify-center px-16 pb-16">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous photo"
          className="absolute left-6 size-12 grid place-items-center rounded-full border border-white/40 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-transform"
        >
          <ChevronLeft size={20} />
        </button>

        <figure className="max-w-[1100px] max-h-full lb-fade" key={photo.id}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[72vh] w-auto max-w-full mx-auto object-contain rounded-btn"
          />
          <figcaption className="mt-4 text-sm text-center text-white/80">
            {photo.caption}
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          aria-label="Next photo"
          className="absolute right-6 size-12 grid place-items-center rounded-full border border-white/40 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-transform"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
