import { HERO_PHOTOS } from "@/lib/listing-data";
import { GridIcon } from "./icons";

type PhotoGridProps = {
  onOpenTour: (index: number) => void;
};

export function PhotoGrid({ onOpenTour }: PhotoGridProps) {
  return (
    <section aria-label="Photo gallery" className="relative">
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[412px] rounded-photo overflow-hidden">
        {HERO_PHOTOS.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => onOpenTour(i)}
            className={`photo-tile ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            aria-label={`View photo: ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} />
          </button>
        ))}
      </div>

      <div className="md:hidden relative rounded-photo overflow-hidden h-[280px]">
        <button
          type="button"
          onClick={() => onOpenTour(0)}
          className="photo-tile w-full h-full"
          aria-label={`View photo: ${HERO_PHOTOS[0]?.alt}`}
        >
          <img src={HERO_PHOTOS[0]?.src} alt={HERO_PHOTOS[0]?.alt ?? ""} />
        </button>
        <div className="absolute bottom-3 right-3 bg-ink/70 text-paper text-xs font-semibold px-2 py-1 rounded-btn">
          1 / {HERO_PHOTOS.length}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpenTour(0)}
        className="absolute bottom-6 right-6 flex items-center gap-2 h-8 px-3.5 rounded-btn bg-paper border border-ink text-sm font-semibold shadow-search"
      >
        <GridIcon size={16} />
        Show all photos
      </button>
    </section>
  );
}
