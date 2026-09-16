import type { ReactNode } from "react";
import type { AmenityIcon } from "@/lib/listing-data";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  size?: number;
  title?: string;
};

function Svg({
  size = 24,
  className,
  title,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function BeloLogo({ className, size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M16 1.5c2.2 0 3.95.95 5.3 2.45C22.7 5.5 23.6 7.45 23.6 10c0 2.85-1.55 5.7-3.85 8.55L16 24.6l-3.75-6.05C9.95 15.7 8.4 12.85 8.4 10c0-2.55.9-4.5 2.3-6.05C12.05 2.45 13.8 1.5 16 1.5Zm0 3.2c-1.3 0-2.3.5-3.05 1.35-.8.85-1.2 2-1.2 3.45 0 1.85 1.05 3.95 2.85 6.2L16 18.3l1.4-2.6c1.8-2.25 2.85-4.35 2.85-6.2 0-1.45-.4-2.6-1.2-3.45C18.3 5.2 17.3 4.7 16 4.7Z"
      />
      <path
        fill="currentColor"
        d="M16 8.2c.95 0 1.7.75 1.7 1.7S16.95 11.6 16 11.6s-1.7-.75-1.7-1.7.75-1.7 1.7-1.7Z"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-rausch font-extrabold tracking-tight",
        className,
      )}
    >
      <BeloLogo size={32} />
      <span className="text-[22px] leading-none -mt-0.5">airbnb</span>
    </span>
  );
}

export function SearchIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Svg>
  );
}

export function GlobeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </Svg>
  );
}

export function HamburgerIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function UserIcon(p: IconProps) {
  return (
    <Svg {...p} className={cn("text-faint", p.className)}>
      <circle cx="12" cy="8" r="3.2" fill="currentColor" stroke="none" />
      <path d="M5 19c1.5-3 3.8-4.5 7-4.5S17.5 16 19 19" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function HeartIcon({
  filled,
  ...p
}: IconProps & { filled?: boolean }) {
  return (
    <Svg {...p}>
      <path
        d="M12 20s-7-4.4-9-8.2C1.4 8.6 3.2 5 6.8 5 9 5 10.4 6.2 12 8c1.6-1.8 3-3 5.2-3 3.6 0 5.4 3.6 3.8 6.8C19 15.6 12 20 12 20z"
        fill={filled ? "currentColor" : "none"}
      />
    </Svg>
  );
}

export function ShareIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8 11.2 16 7.2M8 12.8l8 4" />
    </Svg>
  );
}

export function GridIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </Svg>
  );
}

export function StarIcon({ className, size = 12 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M6 0.8 7.5 4.3l3.8.4-2.9 2.5.9 3.7L6 8.9 2.7 10.9l.9-3.7L.7 4.7l3.8-.4z"
      />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function ChevronLeft(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M15 5 8 12l7 7" />
    </Svg>
  );
}

export function ChevronRight(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="m9 5 7 7-7 7" />
    </Svg>
  );
}

export function ChevronDown(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function PlusIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 6v12M6 12h12" />
    </Svg>
  );
}

export function MinusIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 12h12" />
    </Svg>
  );
}

export function MedalIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9.2 13.8-1.7 7 4.5-2.4 4.5 2.4-1.7-7" />
    </Svg>
  );
}

export function KeyIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="8" cy="10" r="3.2" />
      <path d="M11 10h9v3h-2v2h-2v-2h-1" />
    </Svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  );
}

export function CalendarIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </Svg>
  );
}

export function SparkleIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9z" />
    </Svg>
  );
}

export function ExactIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </Svg>
  );
}

export function ChatIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 6.5h14v10H9l-4 3v-13z" />
    </Svg>
  );
}

export function TagIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3.5 12.5 12 4h7.5v7.5L11.5 20.5z" />
      <circle cx="16.2" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function CopyIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M6 16V6.5A1.5 1.5 0 0 1 7.5 5H16" />
    </Svg>
  );
}

export function FlagIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 4v16M5 5h13l-2.5 4L18 13H5" />
    </Svg>
  );
}

export function TranslateIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 6h10M9 6c0 8-5 12-5 12M9 6c0 4 3 9 8 11M5 18h6M13 13l3 8 1.5-4H21l-8-8" />
    </Svg>
  );
}

const AMENITY_PATHS: Record<AmenityIcon, ReactNode> = {
  wifi: (
    <>
      <path d="M5 10a9 9 0 0 1 14 0" />
      <path d="M8 13a5.5 5.5 0 0 1 8 0" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  kitchen: (
    <>
      <path d="M6 4v7a2 2 0 0 0 2 2h0V21" />
      <path d="M10 4v7a2 2 0 0 1-2 2" />
      <path d="M18 4v17M15 4v6c0 2 3 2 3 4" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 16V8h4.2a3 3 0 0 1 0 6H9" />
    </>
  ),
  pool: (
    <>
      <path d="M4 16c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
      <path d="M4 20c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
      <path d="M7 6c2 3 8 3 10 0" />
    </>
  ),
  tv: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M8 21h8" />
    </>
  ),
  workspace: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="1.5" />
      <path d="M8 21h8M12 16v5" />
    </>
  ),
  ac: (
    <>
      <path d="M12 4v16M6 8l12 8M6 16 18 8" />
    </>
  ),
  washer: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <circle cx="12" cy="13" r="4.2" />
      <circle cx="8" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  dryer: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <circle cx="12" cy="13" r="4.2" />
      <path d="M10 13c.6-1 2-1 2.6 0s2 .9 2.6 0" />
    </>
  ),
  hair: (
    <>
      <path d="M4 10h8l6-5v14l-6-5H4z" />
      <path d="M4 10v4" />
    </>
  ),
  essentials: (
    <>
      <rect x="7" y="4" width="10" height="16" rx="1.5" />
      <path d="M10 8h4M10 12h4" />
    </>
  ),
  hangers: (
    <>
      <path d="M12 5a2 2 0 1 1 2 2l-8 6h12" />
    </>
  ),
  iron: (
    <>
      <path d="M4 16h16l-2-6H9a5 5 0 0 0-5 5z" />
      <path d="M8 10V7h4" />
    </>
  ),
  hotwater: (
    <>
      <path d="M12 3c3 4 6 6.5 6 10a6 6 0 1 1-12 0c0-3.5 3-6 6-10z" />
    </>
  ),
  heating: (
    <>
      <path d="M8 20V6M12 20V4M16 20V8" />
    </>
  ),
  "alarm-co": (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "alarm-smoke": (
    <>
      <path d="M5 15h14M7 11h10M9 7h6" />
      <path d="M6 19h12" />
    </>
  ),
  firstaid: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M12 10v7M8.5 13.5h7" />
      <path d="M9 7V5h6v2" />
    </>
  ),
  fireext: (
    <>
      <path d="M10 6h4v15h-4zM10 6c0-2 2-3 4-2M16 6h3M12 4V2" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="12" cy="13.5" r="3.5" />
      <path d="M9 7 10.5 4h3L15 7" />
    </>
  ),
  bbq: (
    <>
      <path d="M5 11h14M6 11c0 4 2.5 6 6 6s6-2 6-6M9 17l-1 4M15 17l1 4M8 8c2-3 6-3 8 0" />
    </>
  ),
  dining: (
    <>
      <path d="M4 10h16v2H4zM6 12v8M18 12v8M12 4v6" />
    </>
  ),
  coffee: (
    <>
      <path d="M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z" />
      <path d="M16 10h2.5a2.5 2.5 0 0 1 0 5H16M8 4v2M12 4v2" />
    </>
  ),
  wine: (
    <>
      <path d="M8 4h8l-1 7a3 3 0 1 1-6 0zM12 14v6M9 20h6" />
    </>
  ),
  fridge: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="1.5" />
      <path d="M7 10h10M9 6.5v2" />
    </>
  ),
  dishwasher: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
      <path d="M7 14h10" />
    </>
  ),
  oven: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="7" y="10" width="10" height="7" rx="1" />
      <circle cx="8" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  stove: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <circle cx="15" cy="10" r="2" />
      <circle cx="9" cy="16" r="1.5" />
      <circle cx="15" cy="16" r="1.5" />
    </>
  ),
  balcony: (
    <>
      <path d="M4 14h16M6 14v6M10 14v6M14 14v6M18 14v6M5 10h14v4" />
    </>
  ),
  garden: (
    <>
      <path d="M12 21V11" />
      <path d="M12 12c-3-5-8-5-8-1 0 3 4 4 8 1zM12 12c3-5 8-5 8-1 0 3-4 4-8 1z" />
    </>
  ),
  lounge: (
    <>
      <path d="M4 14h16v4H4zM6 14V9h4v5M14 14V9h4v5" />
    </>
  ),
  shower: (
    <>
      <path d="M12 4v3M8 9h8M9 13v1M12 13v2M15 13v1" />
      <path d="M7 7h10" />
    </>
  ),
  bathtub: (
    <>
      <path d="M5 13h14v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM7 13V9a2 2 0 0 1 2-2h1" />
    </>
  ),
  ev: (
    <>
      <rect x="4" y="8" width="16" height="9" rx="2" />
      <path d="M7 17v2M17 17v2M12 8V5M10 11.5 12.2 10l-1 3.5L14 12" />
    </>
  ),
  selfcheckin: (
    <>
      <rect x="10" y="3" width="10" height="18" rx="1.5" />
      <circle cx="17" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <path d="M4 12h6M8 9l3 3-3 3" />
    </>
  ),
  luggage: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M9 8V6h6v2M9 21v-2M15 21v-2" />
    </>
  ),
  longterm: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </>
  ),
  "pets-no": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m7 7 10 10" />
    </>
  ),
  backyard: (
    <>
      <path d="M3 20h18M5 20V11l7-6 7 6v9" />
    </>
  ),
  beach: (
    <>
      <path d="M4 18c4 0 4-2 8-2s4 2 8 2" />
      <path d="M12 16V5M12 5c3 0 5 2 5 4" />
    </>
  ),
  gym: (
    <>
      <path d="M6 9v6M8 8v8M16 8v8M18 9v6M8 12h8" />
    </>
  ),
  breakfast: (
    <>
      <circle cx="12" cy="13" r="6" />
      <path d="M8 5h8" />
    </>
  ),
  fireplace: (
    <>
      <path d="M6 20V9l6-5 6 5v11" />
      <path d="M10 20v-5a2 2 0 1 1 4 0v5" />
    </>
  ),
};

export function AmenityGlyph({
  name,
  className,
  size = 24,
}: {
  name: AmenityIcon;
  className?: string;
  size?: number;
}) {
  return (
    <Svg size={size} className={className}>
      {AMENITY_PATHS[name]}
    </Svg>
  );
}

export function LaurelLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 73"
      width="48"
      height="73"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M34 4c-8 8-14 20-14 32 0 12 6 24 14 32"
        stroke="#E8C07A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 14c6 2 10 6 12 10M16 26c7 1 12 5 14 10M14 38c8 0 13 4 16 9M16 50c7-1 12 2 14 7M20 60c6-2 10 1 12 5"
        stroke="#E8C07A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LaurelRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 73"
      width="48"
      height="73"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M14 4c8 8 14 20 14 32 0 12-6 24-14 32"
        stroke="#E8C07A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M28 14c-6 2-10 6-12 10M32 26c-7 1-12 5-14 10M34 38c-8 0-13 4-16 9M32 50c-7-1-12 2-14 7M28 60c-6-2-10 1-12 5"
        stroke="#E8C07A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
