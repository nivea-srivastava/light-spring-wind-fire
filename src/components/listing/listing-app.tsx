import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  AMENITIES,
  CATEGORY_SCORES,
  DESCRIPTION_FULL,
  DESCRIPTION_SHORT,
  CANCELLATION,
  HIGHLIGHTS,
  HOUSE_RULES,
  LISTING,
  PHOTOS,
  PREVIEW_AMENITY_IDS,
  RATING_BARS,
  REVIEWS,
  SAFETY,
  SLEEPING,
  quoteStay,
  type Amenity,
  type RoomId,
} from "@/lib/listing-data";
import {
  AmenityGlyph,
  CalendarIcon,
  ChatIcon,
  CloseIcon,
  CopyIcon,
  ExactIcon,
  FlagIcon,
  HeartIcon,
  KeyIcon,
  LaurelLeft,
  LaurelRight,
  MedalIcon,
  PinIcon,
  ShareIcon,
  SparkleIcon,
  StarIcon,
  TagIcon,
  TranslateIcon,
} from "./icons";
import { Header } from "./header";
import { PhotoGrid } from "./photo-grid";
import { PhotoTour } from "./photo-tour";
import { Lightbox } from "./lightbox";
import { BookingCard } from "./booking-card";
import { StayCalendar } from "./calendar";
import { Footer } from "./footer";
import { formatMoney, formatShortDate, nightsBetween } from "@/lib/utils";
import { useFocusTrap } from "@/lib/use-focus-trap";

type Overlay =
  | "none"
  | "tour"
  | "lightbox"
  | "amenities"
  | "description"
  | "reviews"
  | "share"
  | "auth"
  | "reserve"
  | "search"
  | "globe"
  | "host";

type Guests = { adults: number; children: number; infants: number; pets: number };

const CATEGORY_ICONS = {
  sparkle: SparkleIcon,
  exact: ExactIcon,
  key: KeyIcon,
  chat: ChatIcon,
  map: PinIcon,
  tag: TagIcon,
} as const;

export function ListingApp() {
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [tourIndex, setTourIndex] = useState(0);
  const [lbIndex, setLbIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState<Guests>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [month, setMonth] = useState(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), 1);
  });
  const [selecting, setSelecting] = useState<"in" | "out">("in");
  const [datesOpen, setDatesOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [showStickyReserve, setShowStickyReserve] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const photosBottom = photosRef.current?.getBoundingClientRect().bottom ?? 0;
      setShowSticky(photosBottom < 0);
      const card = bookingRef.current?.getBoundingClientRect();
      setShowStickyReserve(!!card && card.bottom < 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openTour = useCallback((index: number) => {
    setTourIndex(index);
    setOverlay("tour");
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLbIndex(index);
    setOverlay("lightbox");
  }, []);

  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  const quote = nights ? quoteStay(nights) : null;

  function onReserve() {
    if (!checkIn || !checkOut) {
      setDatesOpen(true);
      document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setOverlay("reserve");
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#photos" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:px-4 focus:py-2">
        Skip to photos
      </a>
      <Header
        onSearch={() => setOverlay("search")}
        onHost={() => setOverlay("host")}
        onGlobe={() => setOverlay("globe")}
        onLogin={() => setOverlay("auth")}
        onSignup={() => setOverlay("auth")}
      />

      {showSticky ? (
        <div className="sticky top-20 z-30 bg-paper border-b border-hair hidden md:block">
          <div className="listing-wrap h-12 flex items-center justify-between">
            <nav className="flex gap-6 text-sm font-semibold">
              <a href="#photos" className="hover:border-b-2 border-ink py-3">
                Photos
              </a>
              <a href="#amenities" className="hover:border-b-2 border-ink py-3">
                Amenities
              </a>
              <a href="#reviews" className="hover:border-b-2 border-ink py-3">
                Reviews
              </a>
              <a href="#location" className="hover:border-b-2 border-ink py-3">
                Location
              </a>
            </nav>
            {showStickyReserve ? (
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  {quote ? (
                    <>
                      <span className="font-semibold">{formatMoney(LISTING.pricePerNight)}</span>{" "}
                      night
                    </>
                  ) : (
                    <span className="font-semibold">Add dates for prices</span>
                  )}
                  <div className="text-xs flex items-center gap-1">
                    <StarIcon size={10} /> {LISTING.rating} · {LISTING.reviewCount} reviews
                  </div>
                </div>
                <button type="button" className="reserve-btn w-auto px-6" onClick={onReserve}>
                  {quote ? "Reserve" : "Check availability"}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <main className="listing-wrap pt-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-hero font-semibold tracking-tight">{LISTING.title}</h1>
          <div className="hidden sm:flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setOverlay("share")}
              className="air-btn-ghost inline-flex items-center gap-2"
            >
              <ShareIcon size={16} /> Share
            </button>
            <button
              type="button"
              onClick={() => setSaved((v) => !v)}
              className="air-btn-ghost inline-flex items-center gap-2"
              aria-pressed={saved}
            >
              <HeartIcon size={16} filled={saved} className={saved ? "text-rausch" : ""} />
              {saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-6">
          {LISTING.isGuestFavorite ? (
            <span className="inline-flex items-center gap-1 font-semibold">
              <MedalIcon size={16} className="text-rausch" /> Guest favorite
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 font-semibold">
              <StarIcon size={12} /> {LISTING.rating}
            </span>
          )}
          <span className="text-faint">·</span>
          <a href="#reviews" className="font-semibold underline">
            {LISTING.reviewCount} reviews
          </a>
          {LISTING.isSuperhost ? (
            <>
              <span className="text-faint">·</span>
              <span>Superhost</span>
            </>
          ) : null}
          <span className="text-faint">·</span>
          <a href="#location" className="font-semibold underline">
            {LISTING.location}
          </a>
        </div>

        <div id="photos" ref={photosRef}>
          <PhotoGrid onOpenTour={openTour} />
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_377px] gap-x-10 xl:gap-x-20 pt-12">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-4 pb-6">
              <div>
                <h2 className="text-section font-semibold">
                  {LISTING.propertyType} hosted by {LISTING.host.name}
                </h2>
                <p className="text-body text-ink mt-1">
                  {LISTING.guests} guests · {LISTING.bedrooms} bedrooms · {LISTING.beds} beds ·{" "}
                  {LISTING.baths} baths
                </p>
              </div>
              <button
                type="button"
                className="relative shrink-0"
                aria-label={`Hosted by ${LISTING.host.name}`}
                onClick={() =>
                  document.getElementById("host")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <img
                  src={LISTING.host.avatar}
                  alt=""
                  className="size-14 rounded-full object-cover"
                />
                {LISTING.host.isSuperhost ? (
                  <span className="absolute -bottom-1 -right-1 size-6 rounded-full bg-paper grid place-items-center shadow-search">
                    <MedalIcon size={16} className="text-rausch" />
                  </span>
                ) : null}
              </button>
            </div>

            <hr className="section-rule !my-0" />

            <ul className="py-8 space-y-6">
              {HIGHLIGHTS.map((h) => (
                <li key={h.id} className="flex gap-4">
                  <span className="mt-0.5">
                    {h.icon === "selfcheckin" ? (
                      <AmenityGlyph name="selfcheckin" />
                    ) : h.icon === "badge" ? (
                      <MedalIcon />
                    ) : h.icon === "pin" ? (
                      <PinIcon />
                    ) : (
                      <CalendarIcon />
                    )}
                  </span>
                  <span>
                    <span className="block font-semibold">{h.title}</span>
                    <span className="block text-sm text-faint">{h.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <hr className="section-rule !my-0" />

            <GuestFavorite />

            <hr className="section-rule !my-0" />

            <div className="py-8">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold mb-4 hover:underline"
              >
                <TranslateIcon size={16} /> Translate
              </button>
              <p className="whitespace-pre-line text-body">{DESCRIPTION_SHORT}</p>
              <button
                type="button"
                className="mt-4 font-semibold underline"
                onClick={() => setOverlay("description")}
              >
                Show more
              </button>
            </div>

            <hr className="section-rule !my-0" />

            <div className="py-12">
              <h2 className="text-section font-semibold mb-6">Where you’ll sleep</h2>
              <div className="flex gap-4 overflow-x-auto pb-2 min-w-0">
                {SLEEPING.map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => {
                      const idx = PHOTOS.findIndex((p) => p.room === (room.room as RoomId));
                      openTour(idx < 0 ? 0 : idx);
                    }}
                    className="min-w-[200px] w-[220px] text-left"
                  >
                    <div className="photo-tile rounded-card h-[140px] mb-3">
                      <img src={room.photo} alt={room.title} />
                    </div>
                    <div className="font-semibold">{room.title}</div>
                    <div className="text-sm text-mute">{room.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            <hr className="section-rule !my-0" />

            <div id="amenities" className="py-12">
              <h2 className="text-section font-semibold mb-6">What this place offers</h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {PREVIEW_AMENITY_IDS.map((id) => {
                  const a = AMENITIES.find((x) => x.id === id) as Amenity;
                  return (
                    <li key={a.id} className="flex items-center gap-4">
                      <AmenityGlyph name={a.icon} />
                      <span>{a.label}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                className="air-btn mt-8"
                onClick={() => setOverlay("amenities")}
              >
                Show all {AMENITIES.length} amenities
              </button>
            </div>

            <hr className="section-rule !my-0" />

            <div className="py-12">
              <StayCalendar
                checkIn={checkIn}
                checkOut={checkOut}
                onChange={(a, b) => {
                  setCheckIn(a);
                  setCheckOut(b);
                }}
                month={month}
                onMonthChange={setMonth}
                selecting={selecting}
                onSelecting={setSelecting}
              />
            </div>
          </div>

          <aside className="relative hidden lg:block min-w-0">
            <div id="booking-card" ref={bookingRef} className="sticky top-28">
              <BookingCard
                checkIn={checkIn}
                checkOut={checkOut}
                onDates={(a, b) => {
                  setCheckIn(a);
                  setCheckOut(b);
                }}
                guests={guests}
                onGuests={setGuests}
                month={month}
                onMonth={setMonth}
                selecting={selecting}
                onSelecting={setSelecting}
                onReserve={onReserve}
                datesOpen={datesOpen}
                onDatesOpen={setDatesOpen}
              />
              <button
                type="button"
                className="mt-6 mx-auto flex items-center gap-2 text-sm underline text-mute"
              >
                <FlagIcon size={14} /> Report this listing
              </button>
            </div>
          </aside>
        </div>

        <hr className="section-rule" />

        <ReviewsSection onShowAll={() => setOverlay("reviews")} />

        <hr className="section-rule" />

        <div id="location" className="py-4">
          <h2 className="text-section font-semibold mb-2">Where you’ll be</h2>
          <p className="text-body mb-6">{LISTING.location}</p>
          <div className="relative rounded-card overflow-hidden h-[480px] bg-wash">
            <img
              src={LISTING.mapSrc}
              alt={`Map of the area around ${LISTING.locationShort}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none grid place-items-center">
              <div className="size-40 rounded-full bg-rausch/25 border-2 border-rausch/40" />
            </div>
          </div>
          <p className="mt-4 text-sm text-mute max-w-2xl">
            The pin is approximate to protect Elena’s privacy. Casa Aurora sits on a hillside
            above Greve, a ten-minute drive from the village square and under an hour from
            Florence.
          </p>
          <button
            type="button"
            className="mt-3 font-semibold underline"
            onClick={() => setOverlay("description")}
          >
            Show more
          </button>
        </div>

        <hr className="section-rule" />

        <div id="host" className="py-4">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={LISTING.host.avatar}
              alt=""
              className="size-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-section font-semibold">Hosted by {LISTING.host.name}</h2>
              <p className="text-sm text-faint">
                Superhost · {LISTING.host.yearsHosting} years hosting
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm mb-6">
            <p>
              <StarIcon size={12} className="inline mr-1" />
              {LISTING.reviewCount} Reviews
            </p>
            <p>
              <MedalIcon size={16} className="inline mr-1 -mt-0.5" />
              Superhost
            </p>
            <p>
              <CalendarIcon size={16} className="inline mr-1 -mt-0.5" />
              {LISTING.host.yearsHosting} years hosting
            </p>
          </div>
          <p className="max-w-2xl mb-4">{LISTING.host.about}</p>
          <dl className="text-sm space-y-1 mb-6">
            <div>
              <dt className="inline font-semibold">Response rate: </dt>
              <dd className="inline">{LISTING.host.responseRate}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">Responds </dt>
              <dd className="inline">{LISTING.host.responseTime}</dd>
            </div>
          </dl>
          <button type="button" className="air-btn" onClick={() => setOverlay("auth")}>
            Message host
          </button>
          <p className="text-xs text-faint mt-4 max-w-md">
            To help protect your payment, always use Airbnb to send money and communicate with
            hosts.
          </p>
        </div>

        <hr className="section-rule" />

        <div className="py-4">
          <h2 className="text-section font-semibold mb-8">Things to know</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <KnowCol title="House rules" items={HOUSE_RULES.map(asLine)} />
            <KnowCol title="Safety & property" items={SAFETY.map(asLine)} />
            <KnowCol title="Cancellation policy" items={CANCELLATION.map(asLine)} />
          </div>
        </div>
      </main>

      <div className="lg:hidden sticky bottom-0 z-30 bg-paper border-t border-hair px-6 py-3 flex items-center justify-between">
        <div>
          {quote ? (
            <p>
              <span className="font-semibold">{formatMoney(LISTING.pricePerNight)}</span>
              <span> night</span>
            </p>
          ) : (
            <p className="font-semibold">Add dates for prices</p>
          )}
          <button
            type="button"
            className="text-sm underline"
            onClick={() => {
              setDatesOpen(true);
              document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {checkIn && checkOut
              ? `${formatShortDate(checkIn)} – ${formatShortDate(checkOut)}`
              : "Add dates"}
          </button>
        </div>
        <button type="button" className="reserve-btn w-auto px-6" onClick={onReserve}>
          {quote ? "Reserve" : "Check availability"}
        </button>
      </div>

      <Footer />

      <PhotoTour
        open={overlay === "tour" || overlay === "lightbox"}
        trap={overlay === "tour"}
        initialIndex={tourIndex}
        onClose={() => setOverlay("none")}
        onOpenLightbox={openLightbox}
      />
      <Lightbox
        open={overlay === "lightbox"}
        index={lbIndex}
        onIndex={setLbIndex}
        onClose={() => setOverlay("tour")}
      />

      {overlay === "amenities" ? (
        <Modal title="What this place offers" onClose={() => setOverlay("none")}>
          <AmenityGroups />
        </Modal>
      ) : null}
      {overlay === "description" ? (
        <Modal title="About this space" onClose={() => setOverlay("none")}>
          <p className="whitespace-pre-line">{DESCRIPTION_FULL}</p>
        </Modal>
      ) : null}
      {overlay === "reviews" ? (
        <Modal title="Reviews" onClose={() => setOverlay("none")} wide>
          <ReviewsList />
        </Modal>
      ) : null}
      {overlay === "share" ? (
        <Modal title="Share this place" onClose={() => setOverlay("none")}>
          <div className="flex items-center gap-4 mb-6">
            <img src={PHOTOS[0].src} alt="" className="size-16 rounded-btn object-cover" />
            <p className="font-medium">{LISTING.title}</p>
          </div>
          <button
            type="button"
            className="air-btn w-full"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
              } catch {
                setCopied(true);
              }
            }}
          >
            <CopyIcon size={16} /> {copied ? "Link copied" : "Copy link"}
          </button>
        </Modal>
      ) : null}
      {overlay === "auth" ? (
        <Modal title="Log in or sign up" onClose={() => setOverlay("none")}>
          <p className="text-mute mb-4">
            This is a demo listing page. Accounts aren’t required — save the home on this
            device with the heart, and reserve to see a sample confirmation.
          </p>
          <button type="button" className="reserve-btn" onClick={() => setOverlay("none")}>
            Continue as guest
          </button>
        </Modal>
      ) : null}
      {overlay === "reserve" && quote && checkIn && checkOut ? (
        <Modal title="Reservation requested" onClose={() => setOverlay("none")}>
          <p className="mb-3">
            {nights} night{nights === 1 ? "" : "s"} at Casa Aurora
          </p>
          <p className="text-sm text-mute mb-4">
            {formatShortDate(checkIn)} – {formatShortDate(checkOut)} · {guests.adults + guests.children}{" "}
            guest{guests.adults + guests.children === 1 ? "" : "s"}
          </p>
          <p className="font-semibold text-lg mb-6">{formatMoney(quote.total)} total</p>
          <p className="text-sm text-mute mb-6">
            You won’t be charged. This clone doesn’t process payments — in production this
            would hold the stay and notify Elena.
          </p>
          <button type="button" className="reserve-btn" onClick={() => setOverlay("none")}>
            Done
          </button>
        </Modal>
      ) : null}
      {overlay === "search" ? (
        <Modal title="Start your search" onClose={() => setOverlay("none")}>
          <p className="text-mute">
            This take-home is the listing page. Search would open Airbnb’s destination /
            dates / guests overlay — here the stay is already Casa Aurora in Chianti.
          </p>
        </Modal>
      ) : null}
      {overlay === "globe" ? (
        <Modal title="Language and region" onClose={() => setOverlay("none")}>
          <p className="font-semibold mb-2">English (US)</p>
          <p className="text-mute">Currency · US Dollar</p>
        </Modal>
      ) : null}
      {overlay === "host" ? (
        <Modal title="Airbnb your home" onClose={() => setOverlay("none")}>
          <p className="text-mute">
            Hosts on a production marketplace would start a listing flow from here. This
            clone stays focused on the guest listing experience.
          </p>
        </Modal>
      ) : null}
    </div>
  );
}

function asLine(item: { label: string; value?: string }) {
  return item.value ? `${item.label}: ${item.value}` : item.label;
}

function GuestFavorite() {
  return (
    <div className="py-10 flex flex-col items-center text-center">
      <div className="flex items-center gap-3">
        <LaurelLeft />
        <div>
          <div className="text-[48px] font-semibold leading-none tracking-tight">
            {LISTING.rating}
          </div>
        </div>
        <LaurelRight />
      </div>
      <p className="text-lg font-semibold mt-2">Guest favorite</p>
      <p className="text-sm text-mute max-w-sm mt-1">
        One of the most loved homes on Airbnb, according to guests
      </p>
    </div>
  );
}

function ReviewsSection({ onShowAll }: { onShowAll: () => void }) {
  return (
    <div id="reviews" className="py-4">
      <div className="flex items-center gap-3 mb-8">
        <LaurelLeft className="h-14 w-auto" />
        <div>
          <h2 className="text-[32px] font-semibold tracking-tight flex items-center gap-2">
            <StarIcon size={20} /> {LISTING.rating}
            <span className="text-ink">·</span>
            {LISTING.reviewCount} reviews
          </h2>
          <p className="text-sm text-mute">Guest favorite</p>
        </div>
        <LaurelRight className="h-14 w-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div>
          <p className="text-sm font-semibold mb-2">Overall rating</p>
          {RATING_BARS.map((b) => (
            <div key={b.stars} className="flex items-center gap-2 text-xs">
              <span className="w-3">{b.stars}</span>
              <div className="flex-1 h-[4px] bg-hair rounded-full overflow-hidden">
                <div className="h-full bg-ink" style={{ width: `${b.pct * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        {CATEGORY_SCORES.map((c) => {
          const Icon = CATEGORY_ICONS[c.icon];
          return (
            <div key={c.id} className="border-l border-hair pl-4">
              <p className="text-sm font-semibold">{c.label}</p>
              <p className="text-lg font-semibold">{c.score.toFixed(1)}</p>
              <Icon size={28} className="mt-2" />
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {REVIEWS.slice(0, 6).map((r) => (
          <article key={r.id}>
            <div className="flex items-center gap-3 mb-3">
              <img src={r.avatar} alt="" className="size-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-faint">{r.yearsOnAirbnb} years on Airbnb</p>
              </div>
            </div>
            <p className="text-sm mb-2">
              <StarIcon size={10} className="inline" />{" "}
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i} className="sr-only">
                  star
                </span>
              ))}
              <span className="font-semibold"> {r.date}</span>
              <span className="text-faint"> · Stayed a few nights</span>
            </p>
            <p className="text-body">{r.text}</p>
          </article>
        ))}
      </div>
      <button type="button" className="air-btn mt-10" onClick={onShowAll}>
        Show all {LISTING.reviewCount} reviews
      </button>
    </div>
  );
}

function ReviewsList() {
  return (
    <div className="space-y-8">
      {REVIEWS.map((r) => (
        <article key={r.id} className="border-b border-hair pb-6">
          <div className="flex items-center gap-3 mb-3">
            <img src={r.avatar} alt="" className="size-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-sm text-faint">
                {r.location} · {r.date}
              </p>
            </div>
          </div>
          <p>{r.text}</p>
        </article>
      ))}
    </div>
  );
}

function AmenityGroups() {
  const groups = AMENITIES.reduce<Record<string, Amenity[]>>((acc, a) => {
    (acc[a.group] ??= []).push(a);
    return acc;
  }, {});
  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([group, items]) => (
        <section key={group}>
          <h3 className="font-semibold text-lg mb-4">{group}</h3>
          <ul>
            {items.map((a) => (
              <li
                key={a.id}
                className="flex items-center gap-4 py-4 border-b border-hair last:border-0"
              >
                <AmenityGlyph
                  name={a.icon}
                  className={a.available === false ? "opacity-40" : ""}
                />
                <span className={a.available === false ? "line-through text-faint" : ""}>
                  {a.label}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function KnowCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <button type="button" className="mt-3 font-semibold underline text-sm">
        Show more
      </button>
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
  wide,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(true, ref, onClose);
  return (
    <div className="fixed inset-0 z-50 overlay-fade">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-overlay"
        onClick={onClose}
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={
          wide
            ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper rounded-card shadow-float w-[min(92vw,720px)] max-h-[86vh] overflow-y-auto"
            : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper rounded-card shadow-float w-[min(92vw,568px)] max-h-[86vh] overflow-y-auto"
        }
      >
        <div className="sticky top-0 bg-paper flex items-center h-16 px-6 border-b border-hair">
          <button
            type="button"
            onClick={onClose}
            className="size-8 grid place-items-center rounded-full hover:bg-wash"
            aria-label="Close"
          >
            <CloseIcon size={16} />
          </button>
          <h2 id="modal-title" className="flex-1 text-center font-semibold pr-8">
            {title}
          </h2>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
