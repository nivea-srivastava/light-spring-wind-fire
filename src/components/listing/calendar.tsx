import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import { isBlocked } from "@/lib/listing-data";
import {
  addDays,
  cn,
  formatShortDate,
  isSameDay,
  isBefore,
  monthLabel,
  nightsBetween,
  startOfDay,
} from "@/lib/utils";
import { LISTING } from "@/lib/listing-data";

type CalendarProps = {
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (checkIn: Date | null, checkOut: Date | null) => void;
  month: Date;
  onMonthChange: (month: Date) => void;
  selecting: "in" | "out";
  onSelecting: (s: "in" | "out") => void;
};

const DOW = ["S", "M", "T", "W", "T", "F", "S"];

export function StayCalendar({
  checkIn,
  checkOut,
  onChange,
  month,
  onMonthChange,
  selecting,
  onSelecting,
}: CalendarProps) {
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  const m2 = new Date(month.getFullYear(), month.getMonth() + 1, 1);

  function onDay(day: Date) {
    if (isBlocked(day)) return;
    if (selecting === "in" || !checkIn || (checkOut && checkIn)) {
      onChange(day, null);
      onSelecting("out");
      return;
    }
    if (isBefore(day, checkIn) || isSameDay(day, checkIn)) {
      onChange(day, null);
      onSelecting("out");
      return;
    }
    if (nightsBetween(checkIn, day) < LISTING.minNights) return;
    // reject ranges that include a blocked night
    for (let d = new Date(checkIn); isBefore(d, day); d = addDays(d, 1)) {
      if (isBlocked(d) && !isSameDay(d, checkIn)) return;
    }
    onChange(checkIn, day);
    onSelecting("in");
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-section font-semibold tracking-tight">
            {nights
              ? `${nights} night${nights === 1 ? "" : "s"} in ${LISTING.locationShort}`
              : checkIn
                ? "Select checkout date"
                : "Select check-in date"}
          </h2>
          <p className="text-sm text-faint mt-1">
            {checkIn && checkOut
              ? `${formatShortDate(checkIn)} – ${formatShortDate(checkOut)}`
              : `Minimum stay: ${LISTING.minNights} nights`}
          </p>
        </div>
      </div>

      <div className="relative flex gap-10 justify-center">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() =>
            onMonthChange(new Date(month.getFullYear(), month.getMonth() - 1, 1))
          }
          className="absolute left-0 -top-1 size-8 grid place-items-center rounded-full hover:bg-wash"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Next month"
          onClick={() =>
            onMonthChange(new Date(month.getFullYear(), month.getMonth() + 1, 1))
          }
          className="absolute right-0 -top-1 size-8 grid place-items-center rounded-full hover:bg-wash"
        >
          <ChevronRight size={16} />
        </button>
        <MonthGrid
          year={month.getFullYear()}
          month={month.getMonth()}
          checkIn={checkIn}
          checkOut={checkOut}
          onDay={onDay}
        />
        <div className="hidden md:block">
          <MonthGrid
            year={m2.getFullYear()}
            month={m2.getMonth()}
            checkIn={checkIn}
            checkOut={checkOut}
            onDay={onDay}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="air-btn-ghost"
          onClick={() => {
            onChange(null, null);
            onSelecting("in");
          }}
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}

function MonthGrid({
  year,
  month,
  checkIn,
  checkOut,
  onDay,
}: {
  year: number;
  month: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onDay: (d: Date) => void;
}) {
  const cells = useMemo(() => {
    const first = new Date(year, month, 1);
    const startPad = first.getDay();
    const daysIn = new Date(year, month + 1, 0).getDate();
    const out: (Date | null)[] = [];
    for (let i = 0; i < startPad; i++) out.push(null);
    for (let d = 1; d <= daysIn; d++) out.push(new Date(year, month, d));
    return out;
  }, [year, month]);

  return (
    <div>
      <div className="text-center font-semibold mb-2">{monthLabel(year, month)}</div>
      <div className="cal-grid">
        {DOW.map((d, i) => (
          <div key={`${d}-${i}`} className="cal-dow">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} />;
          const blocked = isBlocked(day);
          const start = checkIn ? isSameDay(day, checkIn) : false;
          const end = checkOut ? isSameDay(day, checkOut) : false;
          const inRange =
            !!checkIn &&
            !!checkOut &&
            !isBefore(day, checkIn) &&
            !isBefore(checkOut, day);
          return (
            <div
              key={day.toISOString()}
              className="cal-cell"
              data-in-range={inRange && !start && !end ? "true" : "false"}
              data-range-start={start ? "true" : "false"}
              data-range-end={end ? "true" : "false"}
            >
              <button
                type="button"
                className={cn("cal-day")}
                disabled={blocked}
                data-in-range={inRange && !start && !end ? "true" : "false"}
                data-range-start={start ? "true" : "false"}
                data-range-end={end ? "true" : "false"}
                onClick={() => onDay(startOfDay(day))}
                aria-label={day.toDateString()}
                aria-pressed={start || end}
              >
                {day.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
