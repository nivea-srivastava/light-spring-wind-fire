import { useEffect, useId, useRef, useState } from "react";
import { LISTING, quoteStay } from "@/lib/listing-data";
import { StarIcon, ChevronDown, PlusIcon, MinusIcon } from "./icons";
import { formatMdY, formatMoney, nightsBetween } from "@/lib/utils";
import { StayCalendar } from "./calendar";

type Guests = { adults: number; children: number; infants: number; pets: number };

type BookingCardProps = {
  checkIn: Date | null;
  checkOut: Date | null;
  onDates: (a: Date | null, b: Date | null) => void;
  guests: Guests;
  onGuests: (g: Guests) => void;
  month: Date;
  onMonth: (d: Date) => void;
  selecting: "in" | "out";
  onSelecting: (s: "in" | "out") => void;
  onReserve: () => void;
  datesOpen: boolean;
  onDatesOpen: (v: boolean) => void;
};

export function BookingCard({
  checkIn,
  checkOut,
  onDates,
  guests,
  onGuests,
  month,
  onMonth,
  selecting,
  onSelecting,
  onReserve,
  datesOpen,
  onDatesOpen,
}: BookingCardProps) {
  const [guestOpen, setGuestOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const guestRef = useRef<HTMLDivElement>(null);
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  const quote = nights ? quoteStay(nights) : null;
  const guestCount = guests.adults + guests.children;
  const guestLabel =
    `${guestCount} guest${guestCount === 1 ? "" : "s"}` +
    (guests.infants ? `, ${guests.infants} infant${guests.infants === 1 ? "" : "s"}` : "") +
    (guests.pets ? `, ${guests.pets} pet${guests.pets === 1 ? "" : "s"}` : "");

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!guestRef.current?.contains(e.target as Node)) setGuestOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="rounded-card border border-line shadow-card p-6 bg-paper">
      <div className="flex items-end justify-between gap-3 mb-6">
        <div>
          {quote ? (
            <p>
              <span className="text-[22px] font-semibold">{formatMoney(LISTING.pricePerNight)}</span>
              <span className="text-body"> night</span>
            </p>
          ) : (
            <p className="text-[22px] font-semibold">Add dates for prices</p>
          )}
        </div>
        <p className="text-sm flex items-center gap-1">
          <StarIcon size={12} />
          <span className="font-semibold">{LISTING.rating}</span>
          <span className="text-faint">·</span>
          <a href="#reviews" className="text-faint underline">
            {LISTING.reviewCount} reviews
          </a>
        </p>
      </div>

      <div className="rounded-btn border border-ink overflow-hidden mb-4">
        <div className="grid grid-cols-2">
          <button
            type="button"
            onClick={() => {
              onDatesOpen(true);
              onSelecting("in");
            }}
            className="text-left px-3 py-2.5 border-r border-ink hover:bg-wash"
          >
            <div className="text-[10px] font-bold tracking-wider uppercase">Check-in</div>
            <div className="text-sm">{checkIn ? formatMdY(checkIn) : "Add date"}</div>
          </button>
          <button
            type="button"
            onClick={() => {
              onDatesOpen(true);
              onSelecting("out");
            }}
            className="text-left px-3 py-2.5 hover:bg-wash"
          >
            <div className="text-[10px] font-bold tracking-wider uppercase">Checkout</div>
            <div className="text-sm">{checkOut ? formatMdY(checkOut) : "Add date"}</div>
          </button>
        </div>
        <div className="relative border-t border-ink" ref={guestRef}>
          <button
            type="button"
            onClick={() => setGuestOpen((v) => !v)}
            className="w-full text-left px-3 py-2.5 flex items-center justify-between hover:bg-wash"
            aria-expanded={guestOpen}
          >
            <span>
              <div className="text-[10px] font-bold tracking-wider uppercase">Guests</div>
              <div className="text-sm">{guestLabel}</div>
            </span>
            <ChevronDown size={16} />
          </button>
          {guestOpen ? (
            <div className="absolute left-0 right-0 top-full mt-2 z-20 bg-paper rounded-card shadow-float border border-hair p-4">
              <GuestRow
                label="Adults"
                hint="Age 13+"
                value={guests.adults}
                min={1}
                max={LISTING.maxGuests - guests.children}
                onChange={(adults) => onGuests({ ...guests, adults })}
              />
              <GuestRow
                label="Children"
                hint="Ages 2–12"
                value={guests.children}
                min={0}
                max={LISTING.maxGuests - guests.adults}
                onChange={(children) => onGuests({ ...guests, children })}
              />
              <GuestRow
                label="Infants"
                hint="Under 2"
                value={guests.infants}
                min={0}
                max={5}
                onChange={(infants) => onGuests({ ...guests, infants })}
              />
              <GuestRow
                label="Pets"
                hint="Bringing a service animal?"
                value={guests.pets}
                min={0}
                max={0}
                onChange={(pets) => onGuests({ ...guests, pets })}
              />
              <p className="text-xs text-faint mt-2">
                This place has a maximum of {LISTING.maxGuests} guests, not including infants.
                Pets aren't allowed.
              </p>
              <div className="flex justify-end mt-2">
                <button type="button" className="air-btn-ghost" onClick={() => setGuestOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {datesOpen ? (
        <div className="mb-4 rounded-card border border-hair p-4 shadow-float bg-paper">
          <StayCalendar
            checkIn={checkIn}
            checkOut={checkOut}
            onChange={(a, b) => {
              onDates(a, b);
              if (a && b) onDatesOpen(false);
            }}
            month={month}
            onMonthChange={onMonth}
            selecting={selecting}
            onSelecting={onSelecting}
          />
        </div>
      ) : null}

      <button
        type="button"
        className="reserve-btn"
        style={{
          background: `radial-gradient(circle at ${origin.x}% ${origin.y}%, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100%)`,
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setOrigin({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
          });
        }}
        onClick={onReserve}
      >
        {quote ? "Reserve" : "Check availability"}
      </button>
      <p className="text-center text-sm text-mute mt-3">You won’t be charged yet</p>

      {quote ? (
        <div className="mt-6 space-y-3 text-sm">
          <Row
            label={`${formatMoney(LISTING.pricePerNight)} x ${quote.nights} nights`}
            value={formatMoney(quote.base)}
          />
          <Row label="Cleaning fee" value={formatMoney(quote.cleaning)} />
          <Row label="Airbnb service fee" value={formatMoney(quote.service)} />
          <Row label="Taxes" value={formatMoney(quote.taxes)} />
          <div className="border-t border-hair pt-4 flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>{formatMoney(quote.total)}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="underline decoration-line underline-offset-4">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function GuestRow({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  const id = useId();
  return (
    <div className="flex items-center justify-between py-4 border-b border-hair last:border-0">
      <div>
        <div id={id} className="font-semibold">
          {label}
        </div>
        <div className="text-sm text-faint">{hint}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          className="size-8 grid place-items-center rounded-full border border-line disabled:opacity-30 hover:border-ink"
        >
          <MinusIcon size={14} />
        </button>
        <span className="w-4 text-center tabular-nums" aria-labelledby={id}>
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          className="size-8 grid place-items-center rounded-full border border-line disabled:opacity-30 hover:border-ink"
        >
          <PlusIcon size={14} />
        </button>
      </div>
    </div>
  );
}
