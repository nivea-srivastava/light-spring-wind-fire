import { useEffect, useRef } from "react";
import {
  PHOTOS,
  ROOMS,
  photosByRoom,
  type RoomId,
} from "@/lib/listing-data";
import { CloseIcon } from "./icons";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { cn } from "@/lib/utils";

type PhotoTourProps = {
  open: boolean;
  trap?: boolean;
  initialIndex: number;
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
};

export function PhotoTour({
  open,
  trap = true,
  initialIndex,
  onClose,
  onOpenLightbox,
}: PhotoTourProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open && trap, dialogRef, onClose);

  useEffect(() => {
    if (!open) return;
    const photo = PHOTOS[initialIndex];
    if (!photo) return;
    const el = scrollerRef.current?.querySelector(`[data-photo="${photo.id}"]`);
    el?.scrollIntoView({ block: "center" });
  }, [open, initialIndex]);

  if (!open) return null;

  function jump(room: RoomId) {
    const el = scrollerRef.current?.querySelector(`[data-room-section="${room}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-paper overlay-enter"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-tour-title"
      aria-hidden={!trap}
      ref={dialogRef}
    >
      <div className="flex items-center h-16 px-6 border-b border-hair sticky top-0 bg-paper z-10">
        <button
          type="button"
          onClick={onClose}
          className="size-10 grid place-items-center rounded-full hover:bg-wash"
          aria-label="Close photo tour"
        >
          <CloseIcon size={16} />
        </button>
        <h2 id="photo-tour-title" className="sr-only">
          Photo tour
        </h2>
      </div>

      <div className="mx-auto w-full max-w-[1120px] px-6 md:px-10 pt-6 pb-20 grid md:grid-cols-[220px_1fr] gap-10">
        <nav
          className="hidden md:flex flex-col gap-1 sticky top-24 self-start tour-nav"
          aria-label="Rooms"
        >
          <p className="text-section font-semibold mb-3">Photo tour</p>
          {ROOMS.map((room) => {
            const count = photosByRoom(room.id).length;
            if (!count) return null;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => jump(room.id)}
                className="text-left px-3 py-2 rounded-btn text-sm font-medium text-mute hover:bg-wash hover:text-ink"
              >
                {room.label}
              </button>
            );
          })}
        </nav>

        <div ref={scrollerRef} className="flex flex-col gap-12">
          {ROOMS.map((room) => {
            const photos = photosByRoom(room.id);
            if (!photos.length) return null;
            return (
              <section
                key={room.id}
                data-room-section={room.id}
                aria-labelledby={`room-${room.id}`}
              >
                <h3 id={`room-${room.id}`} className="text-section font-semibold mb-4">
                  {room.label}
                </h3>
                <div
                  className={cn(
                    "grid gap-3",
                    photos.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2",
                  )}
                >
                  {photos.map((photo) => {
                    const index = PHOTOS.findIndex((p) => p.id === photo.id);
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        data-photo={photo.id}
                        onClick={() => onOpenLightbox(index)}
                        className="photo-tile rounded-btn overflow-hidden aspect-[3/2] text-left"
                        aria-label={`Open ${photo.alt}`}
                      >
                        <img src={photo.src} alt={photo.alt} />
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
