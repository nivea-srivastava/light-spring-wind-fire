import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DF8WPA9W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROOMS = [
	{
		id: "exterior",
		label: "Exterior"
	},
	{
		id: "living",
		label: "Living room"
	},
	{
		id: "kitchen",
		label: "Kitchen"
	},
	{
		id: "dining",
		label: "Dining area"
	},
	{
		id: "bedroom-1",
		label: "Bedroom 1"
	},
	{
		id: "bedroom-2",
		label: "Bedroom 2"
	},
	{
		id: "bedroom-3",
		label: "Bedroom 3"
	},
	{
		id: "bedroom-4",
		label: "Bedroom 4"
	},
	{
		id: "bathroom",
		label: "Full bathroom"
	},
	{
		id: "pool",
		label: "Pool"
	},
	{
		id: "patio",
		label: "Patio"
	},
	{
		id: "entrance",
		label: "Entrance"
	}
];
var PHOTOS = [
	{
		id: "p01",
		src: "/photos/01.jpg",
		alt: "Infinity pool and villa overlooking the Chianti hills",
		caption: "The infinity pool faces west over the olive groves.",
		room: "exterior"
	},
	{
		id: "p04",
		src: "/photos/04.jpg",
		alt: "Sunlit living room with linen sofas",
		caption: "Double-height living room with linen sofas and a limestone hearth.",
		room: "living"
	},
	{
		id: "p07",
		src: "/photos/07.jpg",
		alt: "Chef's kitchen with marble island",
		caption: "Fully equipped chef's kitchen with a 4-metre marble island.",
		room: "kitchen"
	},
	{
		id: "p11",
		src: "/photos/11.jpg",
		alt: "Primary bedroom with king bed",
		caption: "Primary suite — king bed, linen drapes, hill views.",
		room: "bedroom-1"
	},
	{
		id: "p17",
		src: "/photos/17.jpg",
		alt: "Lounge deck beside the pool",
		caption: "Sun-loungers and a shaded daybed on the pool terrace.",
		room: "pool"
	},
	{
		id: "p02",
		src: "/photos/02.jpg",
		alt: "Villa at dusk with pool lights",
		caption: "The house at golden hour, pool lights just coming on.",
		room: "exterior"
	},
	{
		id: "p03",
		src: "/photos/03.jpg",
		alt: "Pool house surrounded by palms",
		caption: "Covered outdoor living opens onto the water.",
		room: "exterior"
	},
	{
		id: "p05",
		src: "/photos/05.jpg",
		alt: "Living room conversation area",
		caption: "A quieter corner for reading and evening wine.",
		room: "living"
	},
	{
		id: "p06",
		src: "/photos/06.jpg",
		alt: "Bright living room with tall windows",
		caption: "Morning light through the south-facing windows.",
		room: "living"
	},
	{
		id: "p08",
		src: "/photos/08.jpg",
		alt: "Open living room looking toward the kitchen",
		caption: "Open plan from the hearth through to the kitchen.",
		room: "living"
	},
	{
		id: "p09",
		src: "/photos/09.jpg",
		alt: "Kitchen island with bar stools",
		caption: "Breakfast bar seats six — espresso machine included.",
		room: "kitchen"
	},
	{
		id: "p10",
		src: "/photos/10.jpg",
		alt: "Dining table set for a long lunch",
		caption: "Dining table for ten, with doors out to the terrace.",
		room: "dining"
	},
	{
		id: "p12",
		src: "/photos/12.jpg",
		alt: "Bedroom 2 with a queen bed",
		caption: "Bedroom 2 — queen bed and a writing desk.",
		room: "bedroom-2"
	},
	{
		id: "p13",
		src: "/photos/13.jpg",
		alt: "Bedroom 3 with upholstered bed",
		caption: "Bedroom 3 — garden outlook, blackout drapes.",
		room: "bedroom-3"
	},
	{
		id: "p14",
		src: "/photos/14.jpg",
		alt: "Bedroom 4 in warm neutrals",
		caption: "Bedroom 4 — twin beds that can be made as a king.",
		room: "bedroom-4"
	},
	{
		id: "p15",
		src: "/photos/15.jpg",
		alt: "Primary bathroom with soaking tub",
		caption: "Primary bath — soaking tub, rain shower, heated floors.",
		room: "bathroom"
	},
	{
		id: "p20",
		src: "/photos/20.jpg",
		alt: "Bathroom vanity and walk-in shower",
		caption: "Second full bath with a walk-in shower.",
		room: "bathroom"
	},
	{
		id: "p16",
		src: "/photos/16.jpg",
		alt: "Gallery hallway with wood floors",
		caption: "The gallery hall connecting the sleeping wing.",
		room: "entrance"
	},
	{
		id: "p18",
		src: "/photos/18.jpg",
		alt: "Pool from above",
		caption: "The pool from the upper terrace.",
		room: "pool"
	},
	{
		id: "p19",
		src: "/photos/19.jpg",
		alt: "Evening terrace with string lights",
		caption: "The dining terrace after dark.",
		room: "patio"
	},
	{
		id: "p21",
		src: "/photos/21.jpg",
		alt: "Front façade of the villa",
		caption: "Arrival — cypress, gravel court, the front door.",
		room: "exterior"
	},
	{
		id: "p22",
		src: "/photos/22.jpg",
		alt: "Reading lounge",
		caption: "A quieter lounge off the living room.",
		room: "living"
	},
	{
		id: "p23",
		src: "/photos/23.jpg",
		alt: "Garden and pool",
		caption: "Lawn, rosemary hedges, and the long pool.",
		room: "pool"
	},
	{
		id: "p24",
		src: "/photos/24.jpg",
		alt: "Twilight view of the villa",
		caption: "Twilight from the olive grove below the house.",
		room: "exterior"
	},
	{
		id: "p26",
		src: "/photos/26.jpg",
		alt: "Still water of the pool",
		caption: "Early morning, before the cicadas start.",
		room: "pool"
	},
	{
		id: "p27",
		src: "/photos/27.jpg",
		alt: "Arrival lounge",
		caption: "The arrival lounge just inside the front door.",
		room: "entrance"
	}
];
var AMENITIES = [
	{
		id: "wifi",
		label: "Wifi",
		group: "Internet and office",
		icon: "wifi"
	},
	{
		id: "workspace",
		label: "Dedicated workspace",
		group: "Internet and office",
		icon: "workspace"
	},
	{
		id: "kitchen",
		label: "Kitchen",
		group: "Kitchen and dining",
		icon: "kitchen"
	},
	{
		id: "dining",
		label: "Dining table for 10",
		group: "Kitchen and dining",
		icon: "dining"
	},
	{
		id: "coffee",
		label: "Espresso machine",
		group: "Kitchen and dining",
		icon: "coffee"
	},
	{
		id: "wine",
		label: "Wine glasses",
		group: "Kitchen and dining",
		icon: "wine"
	},
	{
		id: "fridge",
		label: "Refrigerator",
		group: "Kitchen and dining",
		icon: "fridge"
	},
	{
		id: "dishwasher",
		label: "Dishwasher",
		group: "Kitchen and dining",
		icon: "dishwasher"
	},
	{
		id: "oven",
		label: "Oven",
		group: "Kitchen and dining",
		icon: "oven"
	},
	{
		id: "stove",
		label: "Gas stove",
		group: "Kitchen and dining",
		icon: "stove"
	},
	{
		id: "pool",
		label: "Private pool",
		group: "Outdoor",
		icon: "pool"
	},
	{
		id: "bbq",
		label: "BBQ grill",
		group: "Outdoor",
		icon: "bbq"
	},
	{
		id: "patio",
		label: "Patio or balcony",
		group: "Outdoor",
		icon: "balcony"
	},
	{
		id: "garden",
		label: "Garden",
		group: "Outdoor",
		icon: "garden"
	},
	{
		id: "backyard",
		label: "Backyard",
		group: "Outdoor",
		icon: "backyard"
	},
	{
		id: "lounge",
		label: "Outdoor dining area",
		group: "Outdoor",
		icon: "lounge"
	},
	{
		id: "parking",
		label: "Free parking on premises",
		group: "Parking and facilities",
		icon: "parking"
	},
	{
		id: "ev",
		label: "EV charger",
		group: "Parking and facilities",
		icon: "ev"
	},
	{
		id: "tv",
		label: "HDTV with Netflix",
		group: "Entertainment",
		icon: "tv"
	},
	{
		id: "fireplace",
		label: "Indoor fireplace",
		group: "Entertainment",
		icon: "fireplace"
	},
	{
		id: "ac",
		label: "Air conditioning",
		group: "Heating and cooling",
		icon: "ac"
	},
	{
		id: "heating",
		label: "Heating",
		group: "Heating and cooling",
		icon: "heating"
	},
	{
		id: "washer",
		label: "Washer",
		group: "Bedroom and laundry",
		icon: "washer"
	},
	{
		id: "dryer",
		label: "Dryer",
		group: "Bedroom and laundry",
		icon: "dryer"
	},
	{
		id: "essentials",
		label: "Essentials",
		group: "Bedroom and laundry",
		icon: "essentials"
	},
	{
		id: "hangers",
		label: "Hangers",
		group: "Bedroom and laundry",
		icon: "hangers"
	},
	{
		id: "iron",
		label: "Iron",
		group: "Bedroom and laundry",
		icon: "iron"
	},
	{
		id: "hair",
		label: "Hair dryer",
		group: "Bathroom",
		icon: "hair"
	},
	{
		id: "hotwater",
		label: "Hot water",
		group: "Bathroom",
		icon: "hotwater"
	},
	{
		id: "bathtub",
		label: "Bathtub",
		group: "Bathroom",
		icon: "bathtub"
	},
	{
		id: "shower",
		label: "Outdoor shower",
		group: "Bathroom",
		icon: "shower"
	},
	{
		id: "selfcheckin",
		label: "Self check-in",
		group: "Services",
		icon: "selfcheckin"
	},
	{
		id: "luggage",
		label: "Luggage dropoff allowed",
		group: "Services",
		icon: "luggage"
	},
	{
		id: "longterm",
		label: "Long-term stays allowed",
		group: "Services",
		icon: "longterm"
	},
	{
		id: "alarm-co",
		label: "Carbon monoxide alarm",
		group: "Home safety",
		icon: "alarm-co"
	},
	{
		id: "alarm-smoke",
		label: "Smoke alarm",
		group: "Home safety",
		icon: "alarm-smoke"
	},
	{
		id: "firstaid",
		label: "First aid kit",
		group: "Home safety",
		icon: "firstaid"
	},
	{
		id: "fireext",
		label: "Fire extinguisher",
		group: "Home safety",
		icon: "fireext"
	},
	{
		id: "camera",
		label: "Exterior security cameras on property",
		group: "Home safety",
		icon: "camera"
	},
	{
		id: "pets-no",
		label: "Pets allowed",
		group: "Not included",
		icon: "pets-no",
		available: false
	}
];
var PREVIEW_AMENITY_IDS = [
	"garden",
	"kitchen",
	"wifi",
	"workspace",
	"parking",
	"pool",
	"ac",
	"tv",
	"washer",
	"selfcheckin"
];
var HIGHLIGHTS = [
	{
		id: "self",
		title: "Self check-in",
		body: "Check yourself in with the lockbox.",
		icon: "selfcheckin"
	},
	{
		id: "super",
		title: "Elena is a Superhost",
		body: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
		icon: "badge"
	},
	{
		id: "loc",
		title: "Great location",
		body: "100% of recent guests gave the location a 5-star rating.",
		icon: "pin"
	},
	{
		id: "cancel",
		title: "Free cancellation before Oct 4",
		body: "Get a full refund if you change your mind.",
		icon: "calendar"
	}
];
var SLEEPING = [
	{
		id: "br1",
		title: "Bedroom 1",
		detail: "1 king bed",
		photo: "/photos/11.jpg",
		room: "bedroom-1"
	},
	{
		id: "br2",
		title: "Bedroom 2",
		detail: "1 queen bed",
		photo: "/photos/12.jpg",
		room: "bedroom-2"
	},
	{
		id: "br3",
		title: "Bedroom 3",
		detail: "1 queen bed",
		photo: "/photos/13.jpg",
		room: "bedroom-3"
	},
	{
		id: "br4",
		title: "Bedroom 4",
		detail: "2 twin beds",
		photo: "/photos/14.jpg",
		room: "bedroom-4"
	}
];
var REVIEWS = [
	{
		id: "r1",
		name: "Amelia",
		avatar: "/photos/guest-1.jpg",
		date: "August 2026",
		yearsOnAirbnb: 7,
		location: "London, United Kingdom",
		rating: 5,
		text: "We spent a week at Casa Aurora and still talk about the evenings on the terrace. Elena’s notes on the village trattorie were spot on, the pool was immaculate, and the house is photographed honestly — if anything it feels larger in person. We will be back for the harvest."
	},
	{
		id: "r2",
		name: "Jonas",
		avatar: "/photos/guest-2.jpg",
		date: "July 2026",
		yearsOnAirbnb: 4,
		location: "Berlin, Germany",
		rating: 5,
		text: "Quiet in the way you hope a hillside house will be. Cicadas, a breeze off the vines, and a kitchen you actually want to cook in. Check-in was effortless and Elena answered a late message about a restaurant reservation within minutes."
	},
	{
		id: "r3",
		name: "Priya",
		avatar: "/photos/guest-3.jpg",
		date: "June 2026",
		yearsOnAirbnb: 5,
		location: "Brooklyn, New York",
		rating: 5,
		text: "A beautifully judged house — nothing fussy, everything considered. Four bedrooms meant the whole family could spread out, and the primary bath with the soaking tub was the hit of the trip. Greve is a ten-minute drive; Florence is an easy morning."
	},
	{
		id: "r4",
		name: "Luca",
		avatar: "/photos/guest-4.jpg",
		date: "May 2026",
		yearsOnAirbnb: 9,
		location: "Milan, Italy",
		rating: 5,
		text: "Even as someone who grew up in Tuscany I was impressed. The restoration is careful, the pool is properly deep, and the olive grove walk at dusk is the thing I’ll remember. Superhost in the truest sense."
	},
	{
		id: "r5",
		name: "Sophie",
		avatar: "/photos/guest-5.jpg",
		date: "April 2026",
		yearsOnAirbnb: 3,
		location: "Paris, France",
		rating: 5,
		text: "We came for a long weekend and wished we had booked ten days. The living room light in the late afternoon is extraordinary. Beds were hotel-level comfortable. A rare listing where every photo matches the stay."
	},
	{
		id: "r6",
		name: "Daniel",
		avatar: "/photos/guest-6.jpg",
		date: "October 2025",
		yearsOnAirbnb: 6,
		location: "Austin, Texas",
		rating: 5,
		text: "Harvest season — cool mornings, warm afternoons, empty roads. Elena left a bottle of the estate’s own Chianti Classico and a hand-drawn map of the market. Communication was perfect and the house was spotless when we arrived."
	}
];
var RATING_BARS = [
	{
		stars: 5,
		pct: .94
	},
	{
		stars: 4,
		pct: .05
	},
	{
		stars: 3,
		pct: .01
	},
	{
		stars: 2,
		pct: 0
	},
	{
		stars: 1,
		pct: 0
	}
];
var CATEGORY_SCORES = [
	{
		id: "clean",
		label: "Cleanliness",
		score: 4.9,
		icon: "sparkle"
	},
	{
		id: "acc",
		label: "Accuracy",
		score: 5,
		icon: "exact"
	},
	{
		id: "check",
		label: "Check-in",
		score: 4.9,
		icon: "key"
	},
	{
		id: "comm",
		label: "Communication",
		score: 5,
		icon: "chat"
	},
	{
		id: "loc",
		label: "Location",
		score: 4.8,
		icon: "map"
	},
	{
		id: "val",
		label: "Value",
		score: 4.7,
		icon: "tag"
	}
];
var DESCRIPTION_SHORT = `Casa Aurora sits on a south-facing slope above Greve in Chianti, with an infinity pool aimed at the evening light and four bedrooms arranged along a quiet gallery hall. The house was rebuilt from a 19th-century farmhouse — thick stone walls, new oak floors, a kitchen meant for long lunches.

Olive groves drop away on three sides. The village is ten minutes by car; Florence is under an hour. Days tend to collect around the terrace: coffee at the island, a swim, a drive to Panzano, and dinner outside once the stones have given their heat back.`;
var DESCRIPTION_FULL = `${DESCRIPTION_SHORT}

The ground floor is one continuous room — living, dining, kitchen — opening through three sets of doors onto the pool terrace. Upstairs, the primary suite looks west over the valley; the three remaining bedrooms share a second full bath and a small sitting room that works well as a workspace.

You’ll find a lockbox on the arrival court, a restocked kitchen (oil, salt, coffee, a first bottle of the estate Chianti Classico), and a binder of Elena’s notes: the butcher in Greve, the Saturday market, the walk through the grove at dusk. The pool is heated in shoulder season. An EV charger sits under the carport.

The house is best for families or two couples who want quiet, a proper kitchen, and the kind of view that keeps you at the table a little longer.`;
var HOUSE_RULES = [
	{
		label: "Check-in",
		value: "3:00 PM – 8:00 PM"
	},
	{
		label: "Checkout",
		value: "11:00 AM"
	},
	{ label: "8 guests maximum" },
	{ label: "No pets" },
	{ label: "No parties or events" },
	{ label: "No smoking" }
];
var SAFETY = [
	{ label: "Carbon monoxide alarm" },
	{ label: "Smoke alarm" },
	{ label: "Exterior security cameras on property" },
	{ label: "Pool / hot tub without a gate or lock" },
	{ label: "Nearby lake, river, other body of water" }
];
var CANCELLATION = [
	{ label: "Free cancellation before Oct 4" },
	{ label: "Review the full policy for details on cancellations and refunds." },
	{ label: "This reservation is non-refundable after check-in." }
];
/** Blocked nights as YYYY-MM-DD (already reserved). */
var BLOCKED_ISO = /* @__PURE__ */ new Set([
	"2026-10-01",
	"2026-10-02",
	"2026-10-03",
	"2026-10-16",
	"2026-10-17",
	"2026-10-18",
	"2026-11-05",
	"2026-11-06",
	"2026-11-07",
	"2026-11-20",
	"2026-11-21",
	"2026-12-24",
	"2026-12-25",
	"2026-12-26",
	"2026-12-31",
	"2027-01-01"
]);
var LISTING = {
	title: "Architectural villa in Chianti",
	propertyType: "Entire villa",
	location: "Greve in Chianti, Tuscany, Italy",
	locationShort: "Greve in Chianti",
	guests: 8,
	bedrooms: 4,
	beds: 5,
	baths: 3,
	pricePerNight: 486,
	cleaningFee: 175,
	serviceFeeRate: .142,
	taxRate: .1,
	rating: 4.97,
	reviewCount: 184,
	isGuestFavorite: true,
	isSuperhost: true,
	host: {
		name: "Elena",
		avatar: "/photos/host.jpg",
		joined: "2018",
		yearsHosting: 8,
		isSuperhost: true,
		livesIn: "Greve in Chianti, Italy",
		about: "I restored Casa Aurora with my family after a decade in Florence. I live in the village below the house and am close if you need anything — restaurant bookings, a driver, a bottle from a neighbour’s cellar. I want the house to feel like yours for the week.",
		responseRate: "100%",
		responseTime: "within an hour",
		coHosts: 1
	},
	lat: 43.5831,
	lng: 11.3158,
	mapSrc: "/photos/map.jpg",
	minNights: 3,
	maxGuests: 8
};
function quoteStay(nights) {
	const base = nights * LISTING.pricePerNight;
	const cleaning = LISTING.cleaningFee;
	const service = Math.round((base + cleaning) * LISTING.serviceFeeRate);
	const taxes = Math.round(base * LISTING.taxRate);
	return {
		nights,
		base,
		cleaning,
		service,
		taxes,
		total: base + cleaning + service + taxes
	};
}
function isoDay(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function isBlocked(date) {
	const today = /* @__PURE__ */ new Date();
	today.setHours(0, 0, 0, 0);
	if (date < today) return true;
	return BLOCKED_ISO.has(isoDay(date));
}
function photosByRoom(room) {
	return PHOTOS.filter((p) => p.room === room);
}
var HERO_PHOTOS = PHOTOS.slice(0, 5);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatMoney(amount, currency = "USD") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		maximumFractionDigits: 0
	}).format(amount);
}
function startOfDay(date) {
	const d = new Date(date);
	d.setHours(0, 0, 0, 0);
	return d;
}
function addDays(date, days) {
	const d = new Date(date);
	d.setDate(d.getDate() + days);
	return startOfDay(d);
}
function isSameDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isBefore(a, b) {
	return startOfDay(a).getTime() < startOfDay(b).getTime();
}
function nightsBetween(start, end) {
	const ms = startOfDay(end).getTime() - startOfDay(start).getTime();
	return Math.max(0, Math.round(ms / 864e5));
}
function formatShortDate(date) {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function formatMdY(date) {
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
function monthLabel(year, month) {
	return new Date(year, month, 1).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric"
	});
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function Svg({ size = 24, className, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.6,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": title ? void 0 : true,
		role: title ? "img" : void 0,
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }) : null, children]
	});
}
function BeloLogo({ className, size = 32 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16 1.5c2.2 0 3.95.95 5.3 2.45C22.7 5.5 23.6 7.45 23.6 10c0 2.85-1.55 5.7-3.85 8.55L16 24.6l-3.75-6.05C9.95 15.7 8.4 12.85 8.4 10c0-2.55.9-4.5 2.3-6.05C12.05 2.45 13.8 1.5 16 1.5Zm0 3.2c-1.3 0-2.3.5-3.05 1.35-.8.85-1.2 2-1.2 3.45 0 1.85 1.05 3.95 2.85 6.2L16 18.3l1.4-2.6c1.8-2.25 2.85-4.35 2.85-6.2 0-1.45-.4-2.6-1.2-3.45C18.3 5.2 17.3 4.7 16 4.7Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16 8.2c.95 0 1.7.75 1.7 1.7S16.95 11.6 16 11.6s-1.7-.75-1.7-1.7.75-1.7 1.7-1.7Z"
		})]
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 text-rausch font-extrabold tracking-tight", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeloLogo, { size: 32 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[22px] leading-none -mt-0.5",
			children: "airbnb"
		})]
	});
}
function SearchIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m20 20-3.5-3.5" })]
	});
}
function GlobeIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" })]
	});
}
function HamburgerIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
	});
}
function UserIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		className: cn("text-faint", p.className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "8",
			r: "3.2",
			fill: "currentColor",
			stroke: "none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 19c1.5-3 3.8-4.5 7-4.5S17.5 16 19 19",
			fill: "currentColor",
			stroke: "none"
		})]
	});
}
function HeartIcon({ filled, ...p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 20s-7-4.4-9-8.2C1.4 8.6 3.2 5 6.8 5 9 5 10.4 6.2 12 8c1.6-1.8 3-3 5.2-3 3.6 0 5.4 3.6 3.8 6.8C19 15.6 12 20 12 20z",
			fill: filled ? "currentColor" : "none"
		})
	});
}
function ShareIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "6",
				cy: "12",
				r: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "6",
				r: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "18",
				r: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 11.2 16 7.2M8 12.8l8 4" })
		]
	});
}
function GridIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.5",
				y: "3.5",
				width: "7",
				height: "7",
				rx: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "13.5",
				y: "3.5",
				width: "7",
				height: "7",
				rx: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.5",
				y: "13.5",
				width: "7",
				height: "7",
				rx: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "13.5",
				y: "13.5",
				width: "7",
				height: "7",
				rx: "1"
			})
		]
	});
}
function StarIcon({ className, size = 12 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 12 12",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M6 0.8 7.5 4.3l3.8.4-2.9 2.5.9 3.7L6 8.9 2.7 10.9l.9-3.7L.7 4.7l3.8-.4z"
		})
	});
}
function CloseIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6 6 18" })
	});
}
function ChevronLeft(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 5 8 12l7 7" })
	});
}
function ChevronRight(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 5 7 7-7 7" })
	});
}
function ChevronDown(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
	});
}
function PlusIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 6v12M6 12h12" })
	});
}
function MinusIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 12h12" })
	});
}
function MedalIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "9",
			r: "5.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9.2 13.8-1.7 7 4.5-2.4 4.5 2.4-1.7-7" })]
	});
}
function KeyIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "10",
			r: "3.2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 10h9v3h-2v2h-2v-2h-1" })]
	});
}
function PinIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "10",
			r: "2.2"
		})]
	});
}
function CalendarIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3.5",
			y: "5",
			width: "17",
			height: "15",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3.5v3M16 3.5v3M3.5 10h17" })]
	});
}
function SparkleIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9z" })
	});
}
function ExactIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.5 12 2.5 2.5 4.5-5" })]
	});
}
function ChatIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 6.5h14v10H9l-4 3v-13z" })
	});
}
function TagIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.5 12.5 12 4h7.5v7.5L11.5 20.5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16.2",
			cy: "7.8",
			r: "1.1",
			fill: "currentColor",
			stroke: "none"
		})]
	});
}
function CopyIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "11",
			height: "11",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 16V6.5A1.5 1.5 0 0 1 7.5 5H16" })]
	});
}
function FlagIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 4v16M5 5h13l-2.5 4L18 13H5" })
	});
}
function TranslateIcon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 6h10M9 6c0 8-5 12-5 12M9 6c0 4 3 9 8 11M5 18h6M13 13l3 8 1.5-4H21l-8-8" })
	});
}
var AMENITY_PATHS = {
	wifi: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 10a9 9 0 0 1 14 0" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 13a5.5 5.5 0 0 1 8 0" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "17",
			r: "1.2",
			fill: "currentColor",
			stroke: "none"
		})
	] }),
	kitchen: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 4v7a2 2 0 0 0 2 2h0V21" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 4v7a2 2 0 0 1-2 2" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 4v17M15 4v6c0 2 3 2 3 4" })
	] }),
	parking: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 16V8h4.2a3 3 0 0 1 0 6H9" })] }),
	pool: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 16c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 6c2 3 8 3 10 0" })
	] }),
	tv: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "3.5",
		y: "6",
		width: "17",
		height: "12",
		rx: "2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 21h8" })] }),
	workspace: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "3",
		y: "5",
		width: "18",
		height: "11",
		rx: "1.5"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 21h8M12 16v5" })] }),
	ac: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4v16M6 8l12 8M6 16 18 8" }) }),
	washer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "3.5",
			width: "16",
			height: "17",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "13",
			r: "4.2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "6.5",
			r: "0.8",
			fill: "currentColor",
			stroke: "none"
		})
	] }),
	dryer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "3.5",
			width: "16",
			height: "17",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "13",
			r: "4.2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13c.6-1 2-1 2.6 0s2 .9 2.6 0" })
	] }),
	hair: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 10h8l6-5v14l-6-5H4z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 10v4" })] }),
	essentials: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "7",
		y: "4",
		width: "10",
		height: "16",
		rx: "1.5"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 8h4M10 12h4" })] }),
	hangers: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5a2 2 0 1 1 2 2l-8 6h12" }) }),
	iron: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 16h16l-2-6H9a5 5 0 0 0-5 5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 10V7h4" })] }),
	hotwater: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3c3 4 6 6.5 6 10a6 6 0 1 1-12 0c0-3.5 3-6 6-10z" }) }),
	heating: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 20V6M12 20V4M16 20V8" }) }),
	"alarm-co": /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "8"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "3"
	})] }),
	"alarm-smoke": /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15h14M7 11h10M9 7h6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 19h12" })] }),
	firstaid: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "7",
			width: "16",
			height: "13",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10v7M8.5 13.5h7" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 7V5h6v2" })
	] }),
	fireext: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 6h4v15h-4zM10 6c0-2 2-3 4-2M16 6h3M12 4V2" }) }),
	camera: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "7",
			width: "18",
			height: "13",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "13.5",
			r: "3.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 7 10.5 4h3L15 7" })
	] }),
	bbq: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 11h14M6 11c0 4 2.5 6 6 6s6-2 6-6M9 17l-1 4M15 17l1 4M8 8c2-3 6-3 8 0" }) }),
	dining: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 10h16v2H4zM6 12v8M18 12v8M12 4v6" }) }),
	coffee: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 10h2.5a2.5 2.5 0 0 1 0 5H16M8 4v2M12 4v2" })] }),
	wine: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 4h8l-1 7a3 3 0 1 1-6 0zM12 14v6M9 20h6" }) }),
	fridge: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "7",
		y: "3",
		width: "10",
		height: "18",
		rx: "1.5"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 10h10M9 6.5v2" })] }),
	dishwasher: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "4",
			width: "16",
			height: "16",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "8",
			r: "1",
			fill: "currentColor",
			stroke: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 14h10" })
	] }),
	oven: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "4",
			width: "16",
			height: "16",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "7",
			y: "10",
			width: "10",
			height: "7",
			rx: "1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "7",
			r: "0.8",
			fill: "currentColor",
			stroke: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "7",
			r: "0.8",
			fill: "currentColor",
			stroke: "none"
		})
	] }),
	stove: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "5",
			width: "16",
			height: "14",
			rx: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "9",
			cy: "10",
			r: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "15",
			cy: "10",
			r: "2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "9",
			cy: "16",
			r: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "15",
			cy: "16",
			r: "1.5"
		})
	] }),
	balcony: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 14h16M6 14v6M10 14v6M14 14v6M18 14v6M5 10h14v4" }) }),
	garden: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21V11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 12c-3-5-8-5-8-1 0 3 4 4 8 1zM12 12c3-5 8-5 8-1 0 3-4 4-8 1z" })] }),
	lounge: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 14h16v4H4zM6 14V9h4v5M14 14V9h4v5" }) }),
	shower: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4v3M8 9h8M9 13v1M12 13v2M15 13v1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 7h10" })] }),
	bathtub: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 13h14v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM7 13V9a2 2 0 0 1 2-2h1" }) }),
	ev: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "4",
		y: "8",
		width: "16",
		height: "9",
		rx: "2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17v2M17 17v2M12 8V5M10 11.5 12.2 10l-1 3.5L14 12" })] }),
	selfcheckin: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "10",
			y: "3",
			width: "10",
			height: "18",
			rx: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "17",
			cy: "12",
			r: "0.9",
			fill: "currentColor",
			stroke: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12h6M8 9l3 3-3 3" })
	] }),
	luggage: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "5",
		y: "8",
		width: "14",
		height: "11",
		rx: "2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 8V6h6v2M9 21v-2M15 21v-2" })] }),
	longterm: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "3.5",
		y: "5",
		width: "17",
		height: "15",
		rx: "2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3.5v3M16 3.5v3M3.5 10h17" })] }),
	"pets-no": /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "12",
		r: "8"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m7 7 10 10" })] }),
	backyard: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 20h18M5 20V11l7-6 7 6v9" }) }),
	beach: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 18c4 0 4-2 8-2s4 2 8 2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 16V5M12 5c3 0 5 2 5 4" })] }),
	gym: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 9v6M8 8v8M16 8v8M18 9v6M8 12h8" }) }),
	breakfast: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "12",
		cy: "13",
		r: "6"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5h8" })] }),
	fireplace: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 20V9l6-5 6 5v11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 20v-5a2 2 0 1 1 4 0v5" })] })
};
function AmenityGlyph({ name, className, size = 24 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		size,
		className,
		children: AMENITY_PATHS[name]
	});
}
function LaurelLeft({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 73",
		width: "48",
		height: "73",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M34 4c-8 8-14 20-14 32 0 12 6 24 14 32",
			stroke: "#E8C07A",
			strokeWidth: "2.2",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 14c6 2 10 6 12 10M16 26c7 1 12 5 14 10M14 38c8 0 13 4 16 9M16 50c7-1 12 2 14 7M20 60c6-2 10 1 12 5",
			stroke: "#E8C07A",
			strokeWidth: "2",
			strokeLinecap: "round"
		})]
	});
}
function LaurelRight({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 73",
		width: "48",
		height: "73",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14 4c8 8 14 20 14 32 0 12-6 24-14 32",
			stroke: "#E8C07A",
			strokeWidth: "2.2",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M28 14c-6 2-10 6-12 10M32 26c-7 1-12 5-14 10M34 38c-8 0-13 4-16 9M32 50c-7-1-12 2-14 7M28 60c-6-2-10 1-12 5",
			stroke: "#E8C07A",
			strokeWidth: "2",
			strokeLinecap: "round"
		})]
	});
}
function Header({ onSearch, onHost, onGlobe, onLogin, onSignup }) {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const menuRef = (0, import_react.useRef)(null);
	const menuId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		function onDoc(e) {
			if (!menuRef.current?.contains(e.target)) setMenuOpen(false);
		}
		function onKey(e) {
			if (e.key === "Escape") setMenuOpen(false);
		}
		document.addEventListener("mousedown", onDoc);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDoc);
			document.removeEventListener("keydown", onKey);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 bg-paper border-b border-hair",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "listing-wrap flex h-20 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "shrink-0",
					"aria-label": "Airbnb home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onSearch,
					className: "hidden md:flex items-center h-12 rounded-pill border border-line shadow-search hover:shadow-search-hover transition-shadow bg-paper pl-2 pr-2 min-w-[340px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-4 text-sm font-semibold border-r border-line",
							children: "Anywhere"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-4 text-sm font-semibold border-r border-line",
							children: "Any week"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-4 text-sm text-faint flex-1 text-left",
							children: "Add guests"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid place-items-center size-8 rounded-full bg-rausch text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, {
								size: 14,
								className: "text-paper"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onHost,
							className: "hidden lg:inline-flex h-10 px-4 rounded-pill text-sm font-semibold hover:bg-wash",
							children: "Airbnb your home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onGlobe,
							className: "grid place-items-center size-10 rounded-full hover:bg-wash",
							"aria-label": "Choose a language",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobeIcon, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							ref: menuRef,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-haspopup": "menu",
								"aria-expanded": menuOpen,
								"aria-controls": menuId,
								onClick: () => setMenuOpen((v) => !v),
								className: cn("flex items-center gap-2 h-[42px] pl-3 pr-1.5 rounded-pill border border-line hover:shadow-search-hover transition-shadow", menuOpen && "shadow-search-hover"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HamburgerIcon, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid place-items-center size-8 rounded-full bg-[#222] text-paper overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserIcon, {
										size: 20,
										className: "text-paper mt-1"
									})
								})]
							}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: menuId,
								role: "menu",
								className: "absolute right-0 top-[calc(100%+8px)] w-[250px] bg-paper rounded-2xl shadow-menu py-2 z-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
										onClick: () => {
											setMenuOpen(false);
											onSignup();
										},
										strong: true,
										children: "Sign up"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
										onClick: () => {
											setMenuOpen(false);
											onLogin();
										},
										children: "Log in"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-hair my-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
										onClick: () => {
											setMenuOpen(false);
											onHost();
										},
										children: "Airbnb your home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
										onClick: () => setMenuOpen(false),
										children: "Host an experience"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
										onClick: () => setMenuOpen(false),
										children: "Help Center"
									})
								]
							}) : null]
						})
					]
				})
			]
		})
	});
}
function MenuItem({ children, onClick, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "menuitem",
		onClick,
		className: cn("w-full text-left px-4 py-3 text-sm hover:bg-wash", strong ? "font-semibold" : "font-normal"),
		children
	});
}
function PhotoGrid({ onOpenTour }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Photo gallery",
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[412px] rounded-photo overflow-hidden",
				children: HERO_PHOTOS.map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpenTour(i),
					className: `photo-tile ${i === 0 ? "col-span-2 row-span-2" : ""}`,
					"aria-label": `View photo: ${photo.alt}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.alt
					})
				}, photo.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:hidden relative rounded-photo overflow-hidden h-[280px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpenTour(0),
					className: "photo-tile w-full h-full",
					"aria-label": `View photo: ${HERO_PHOTOS[0]?.alt}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: HERO_PHOTOS[0]?.src,
						alt: HERO_PHOTOS[0]?.alt ?? ""
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-3 right-3 bg-ink/70 text-paper text-xs font-semibold px-2 py-1 rounded-btn",
					children: ["1 / ", HERO_PHOTOS.length]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpenTour(0),
				className: "absolute bottom-6 right-6 flex items-center gap-2 h-8 px-3.5 rounded-btn bg-paper border border-ink text-sm font-semibold shadow-search",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridIcon, { size: 16 }), "Show all photos"]
			})
		]
	});
}
var SELECTOR = "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex=\"-1\"])";
function useFocusTrap(active, ref, onEscape) {
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const root = ref.current;
		if (!root) return;
		const previously = document.activeElement;
		const focusables = () => Array.from(root.querySelectorAll(SELECTOR)).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
		focusables()[0]?.focus();
		function onKey(e) {
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
	}, [
		active,
		ref,
		onEscape
	]);
}
function PhotoTour({ open, trap = true, initialIndex, onClose, onOpenLightbox }) {
	const dialogRef = (0, import_react.useRef)(null);
	const scrollerRef = (0, import_react.useRef)(null);
	useFocusTrap(open && trap, dialogRef, onClose);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const photo = PHOTOS[initialIndex];
		if (!photo) return;
		(scrollerRef.current?.querySelector(`[data-photo="${photo.id}"]`))?.scrollIntoView({ block: "center" });
	}, [open, initialIndex]);
	if (!open) return null;
	function jump(room) {
		(scrollerRef.current?.querySelector(`[data-room-section="${room}"]`))?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-paper overlay-enter",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "photo-tour-title",
		"aria-hidden": !trap,
		ref: dialogRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center h-16 px-6 border-b border-hair sticky top-0 bg-paper z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "size-10 grid place-items-center rounded-full hover:bg-wash",
				"aria-label": "Close photo tour",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, { size: 16 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "photo-tour-title",
				className: "sr-only",
				children: "Photo tour"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1120px] px-6 md:px-10 pt-6 pb-20 grid md:grid-cols-[220px_1fr] gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden md:flex flex-col gap-1 sticky top-24 self-start tour-nav",
				"aria-label": "Rooms",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-section font-semibold mb-3",
					children: "Photo tour"
				}), ROOMS.map((room) => {
					if (!photosByRoom(room.id).length) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => jump(room.id),
						className: "text-left px-3 py-2 rounded-btn text-sm font-medium text-mute hover:bg-wash hover:text-ink",
						children: room.label
					}, room.id);
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				className: "flex flex-col gap-12",
				children: ROOMS.map((room) => {
					const photos = photosByRoom(room.id);
					if (!photos.length) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"data-room-section": room.id,
						"aria-labelledby": `room-${room.id}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: `room-${room.id}`,
							className: "text-section font-semibold mb-4",
							children: room.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid gap-3", photos.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"),
							children: photos.map((photo) => {
								const index = PHOTOS.findIndex((p) => p.id === photo.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"data-photo": photo.id,
									onClick: () => onOpenLightbox(index),
									className: "photo-tile rounded-btn overflow-hidden aspect-[3/2] text-left",
									"aria-label": `Open ${photo.alt}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: photo.src,
										alt: photo.alt
									})
								}, photo.id);
							})
						})]
					}, room.id);
				})
			})]
		})]
	});
}
function Lightbox({ open, index, onIndex, onClose }) {
	const dialogRef = (0, import_react.useRef)(null);
	useFocusTrap(open, dialogRef, onClose);
	const photo = PHOTOS[index];
	const total = PHOTOS.length;
	const prev = (0, import_react.useCallback)(() => {
		onIndex(clamp(index - 1, 0, total - 1));
	}, [
		index,
		onIndex,
		total
	]);
	const next = (0, import_react.useCallback)(() => {
		onIndex(clamp(index + 1, 0, total - 1));
	}, [
		index,
		onIndex,
		total
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKey(e) {
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
	}, [
		open,
		prev,
		next
	]);
	if (!open || !photo) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: dialogRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Photo viewer",
		className: "fixed inset-0 z-[60] bg-[#222] text-paper overlay-fade flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 md:px-8 h-16 shrink-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onClose,
					className: "flex items-center gap-2 h-10 px-3 rounded-pill hover:bg-white/10 text-sm font-semibold",
					"aria-label": "Close photo viewer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, { size: 16 }), "Close"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-medium tabular-nums",
					"aria-live": "polite",
					children: [
						index + 1,
						" / ",
						total
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 relative flex items-center justify-center px-16 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: prev,
					disabled: index === 0,
					"aria-label": "Previous photo",
					className: "absolute left-6 size-12 grid place-items-center rounded-full border border-white/40 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-transform",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "max-w-[1100px] max-h-full lb-fade",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.alt,
						className: "max-h-[72vh] w-auto max-w-full mx-auto object-contain rounded-btn"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-4 text-sm text-center text-white/80",
						children: photo.caption
					})]
				}, photo.id),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: next,
					disabled: index === total - 1,
					"aria-label": "Next photo",
					className: "absolute right-6 size-12 grid place-items-center rounded-full border border-white/40 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-transform",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
				})
			]
		})]
	});
}
var DOW = [
	"S",
	"M",
	"T",
	"W",
	"T",
	"F",
	"S"
];
function StayCalendar({ checkIn, checkOut, onChange, month, onMonthChange, selecting, onSelecting }) {
	const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
	const m2 = new Date(month.getFullYear(), month.getMonth() + 1, 1);
	function onDay(day) {
		if (isBlocked(day)) return;
		if (selecting === "in" || !checkIn || checkOut && checkIn) {
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
		for (let d = new Date(checkIn); isBefore(d, day); d = addDays(d, 1)) if (isBlocked(d) && !isSameDay(d, checkIn)) return;
		onChange(checkIn, day);
		onSelecting("in");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-start justify-between gap-4 mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-section font-semibold tracking-tight",
				children: nights ? `${nights} night${nights === 1 ? "" : "s"} in ${LISTING.locationShort}` : checkIn ? "Select checkout date" : "Select check-in date"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-faint mt-1",
				children: checkIn && checkOut ? `${formatShortDate(checkIn)} – ${formatShortDate(checkOut)}` : `Minimum stay: ${LISTING.minNights} nights`
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex gap-10 justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous month",
					onClick: () => onMonthChange(new Date(month.getFullYear(), month.getMonth() - 1, 1)),
					className: "absolute left-0 -top-1 size-8 grid place-items-center rounded-full hover:bg-wash",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next month",
					onClick: () => onMonthChange(new Date(month.getFullYear(), month.getMonth() + 1, 1)),
					className: "absolute right-0 -top-1 size-8 grid place-items-center rounded-full hover:bg-wash",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthGrid, {
					year: month.getFullYear(),
					month: month.getMonth(),
					checkIn,
					checkOut,
					onDay
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthGrid, {
						year: m2.getFullYear(),
						month: m2.getMonth(),
						checkIn,
						checkOut,
						onDay
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "air-btn-ghost",
				onClick: () => {
					onChange(null, null);
					onSelecting("in");
				},
				children: "Clear dates"
			})
		})
	] });
}
function MonthGrid({ year, month, checkIn, checkOut, onDay }) {
	const cells = (0, import_react.useMemo)(() => {
		const startPad = new Date(year, month, 1).getDay();
		const daysIn = new Date(year, month + 1, 0).getDate();
		const out = [];
		for (let i = 0; i < startPad; i++) out.push(null);
		for (let d = 1; d <= daysIn; d++) out.push(new Date(year, month, d));
		return out;
	}, [year, month]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center font-semibold mb-2",
		children: monthLabel(year, month)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cal-grid",
		children: [DOW.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cal-dow",
			children: d
		}, `${d}-${i}`)), cells.map((day, i) => {
			if (!day) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `e-${i}`);
			const blocked = isBlocked(day);
			const start = checkIn ? isSameDay(day, checkIn) : false;
			const end = checkOut ? isSameDay(day, checkOut) : false;
			const inRange = !!checkIn && !!checkOut && !isBefore(day, checkIn) && !isBefore(checkOut, day);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cal-cell",
				"data-in-range": inRange && !start && !end ? "true" : "false",
				"data-range-start": start ? "true" : "false",
				"data-range-end": end ? "true" : "false",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("cal-day"),
					disabled: blocked,
					"data-in-range": inRange && !start && !end ? "true" : "false",
					"data-range-start": start ? "true" : "false",
					"data-range-end": end ? "true" : "false",
					onClick: () => onDay(startOfDay(day)),
					"aria-label": day.toDateString(),
					"aria-pressed": start || end,
					children: day.getDate()
				})
			}, day.toISOString());
		})]
	})] });
}
function BookingCard({ checkIn, checkOut, onDates, guests, onGuests, month, onMonth, selecting, onSelecting, onReserve, datesOpen, onDatesOpen }) {
	const [guestOpen, setGuestOpen] = (0, import_react.useState)(false);
	const [origin, setOrigin] = (0, import_react.useState)({
		x: 50,
		y: 50
	});
	const guestRef = (0, import_react.useRef)(null);
	const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
	const quote = nights ? quoteStay(nights) : null;
	const guestCount = guests.adults + guests.children;
	const guestLabel = `${guestCount} guest${guestCount === 1 ? "" : "s"}` + (guests.infants ? `, ${guests.infants} infant${guests.infants === 1 ? "" : "s"}` : "") + (guests.pets ? `, ${guests.pets} pet${guests.pets === 1 ? "" : "s"}` : "");
	(0, import_react.useEffect)(() => {
		function onDoc(e) {
			if (!guestRef.current?.contains(e.target)) setGuestOpen(false);
		}
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line shadow-card p-6 bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[22px] font-semibold",
					children: formatMoney(LISTING.pricePerNight)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-body",
					children: " night"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[22px] font-semibold",
					children: "Add dates for prices"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, { size: 12 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: LISTING.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-faint",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#reviews",
							className: "text-faint underline",
							children: [LISTING.reviewCount, " reviews"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-btn border border-ink overflow-hidden mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onDatesOpen(true);
							onSelecting("in");
						},
						className: "text-left px-3 py-2.5 border-r border-ink hover:bg-wash",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-wider uppercase",
							children: "Check-in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: checkIn ? formatMdY(checkIn) : "Add date"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onDatesOpen(true);
							onSelecting("out");
						},
						className: "text-left px-3 py-2.5 hover:bg-wash",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-wider uppercase",
							children: "Checkout"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: checkOut ? formatMdY(checkOut) : "Add date"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative border-t border-ink",
					ref: guestRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setGuestOpen((v) => !v),
						className: "w-full text-left px-3 py-2.5 flex items-center justify-between hover:bg-wash",
						"aria-expanded": guestOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold tracking-wider uppercase",
							children: "Guests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: guestLabel
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 16 })]
					}), guestOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-0 right-0 top-full mt-2 z-20 bg-paper rounded-card shadow-float border border-hair p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestRow, {
								label: "Adults",
								hint: "Age 13+",
								value: guests.adults,
								min: 1,
								max: LISTING.maxGuests - guests.children,
								onChange: (adults) => onGuests({
									...guests,
									adults
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestRow, {
								label: "Children",
								hint: "Ages 2–12",
								value: guests.children,
								min: 0,
								max: LISTING.maxGuests - guests.adults,
								onChange: (children) => onGuests({
									...guests,
									children
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestRow, {
								label: "Infants",
								hint: "Under 2",
								value: guests.infants,
								min: 0,
								max: 5,
								onChange: (infants) => onGuests({
									...guests,
									infants
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestRow, {
								label: "Pets",
								hint: "Bringing a service animal?",
								value: guests.pets,
								min: 0,
								max: 0,
								onChange: (pets) => onGuests({
									...guests,
									pets
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-faint mt-2",
								children: [
									"This place has a maximum of ",
									LISTING.maxGuests,
									" guests, not including infants. Pets aren't allowed."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "air-btn-ghost",
									onClick: () => setGuestOpen(false),
									children: "Close"
								})
							})
						]
					}) : null]
				})]
			}),
			datesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 rounded-card border border-hair p-4 shadow-float bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StayCalendar, {
					checkIn,
					checkOut,
					onChange: (a, b) => {
						onDates(a, b);
						if (a && b) onDatesOpen(false);
					},
					month,
					onMonthChange: onMonth,
					selecting,
					onSelecting
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "reserve-btn",
				style: { background: `radial-gradient(circle at ${origin.x}% ${origin.y}%, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100%)` },
				onMouseMove: (e) => {
					const r = e.currentTarget.getBoundingClientRect();
					setOrigin({
						x: (e.clientX - r.left) / r.width * 100,
						y: (e.clientY - r.top) / r.height * 100
					});
				},
				onClick: onReserve,
				children: quote ? "Reserve" : "Check availability"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-mute mt-3",
				children: "You won’t be charged yet"
			}),
			quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: `${formatMoney(LISTING.pricePerNight)} x ${quote.nights} nights`,
						value: formatMoney(quote.base)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Cleaning fee",
						value: formatMoney(quote.cleaning)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Airbnb service fee",
						value: formatMoney(quote.service)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Taxes",
						value: formatMoney(quote.taxes)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-hair pt-4 flex justify-between font-semibold text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatMoney(quote.total) })]
					})
				]
			}) : null
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "underline decoration-line underline-offset-4",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
function GuestRow({ label, hint, value, min, max, onChange }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between py-4 border-b border-hair last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id,
			className: "font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm text-faint",
			children: hint
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Decrease ${label}`,
					disabled: value <= min,
					onClick: () => onChange(value - 1),
					className: "size-8 grid place-items-center rounded-full border border-line disabled:opacity-30 hover:border-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MinusIcon, { size: 14 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-4 text-center tabular-nums",
					"aria-labelledby": id,
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Increase ${label}`,
					disabled: value >= max,
					onClick: () => onChange(value + 1),
					className: "size-8 grid place-items-center rounded-full border border-line disabled:opacity-30 hover:border-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlusIcon, { size: 14 })
				})
			]
		})]
	});
}
var COLS = [
	{
		title: "Support",
		links: [
			"Help Center",
			"AirCover",
			"Anti-discrimination",
			"Disability support",
			"Cancellation options",
			"Report neighborhood concern"
		]
	},
	{
		title: "Hosting",
		links: [
			"Airbnb your home",
			"AirCover for Hosts",
			"Hosting resources",
			"Community forum",
			"Hosting responsibly",
			"Airbnb-friendly apartments"
		]
	},
	{
		title: "Airbnb",
		links: [
			"Newsroom",
			"New features",
			"Careers",
			"Investors",
			"Gift cards",
			"Airbnb.org emergency stays"
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-wash border-t border-hair mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "listing-wrap py-12 grid md:grid-cols-3 gap-8",
			children: COLS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold mb-3",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm hover:underline text-left",
					children: link
				}) }, link))
			})] }, col.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "listing-wrap border-t border-hair py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© 2026 Airbnb, Inc. ·",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "hover:underline",
					children: "Privacy"
				}),
				" ",
				"·",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "hover:underline",
					children: "Terms"
				}),
				" ",
				"·",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "hover:underline",
					children: "Sitemap"
				}),
				" · ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/architecture",
					className: "hover:underline",
					children: "Architecture"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-4 font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "English (US)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$ USD" })]
			})]
		})]
	});
}
var CATEGORY_ICONS = {
	sparkle: SparkleIcon,
	exact: ExactIcon,
	key: KeyIcon,
	chat: ChatIcon,
	map: PinIcon,
	tag: TagIcon
};
function ListingApp() {
	const [overlay, setOverlay] = (0, import_react.useState)("none");
	const [tourIndex, setTourIndex] = (0, import_react.useState)(0);
	const [lbIndex, setLbIndex] = (0, import_react.useState)(0);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [checkIn, setCheckIn] = (0, import_react.useState)(null);
	const [checkOut, setCheckOut] = (0, import_react.useState)(null);
	const [guests, setGuests] = (0, import_react.useState)({
		adults: 1,
		children: 0,
		infants: 0,
		pets: 0
	});
	const [month, setMonth] = (0, import_react.useState)(() => {
		const n = /* @__PURE__ */ new Date();
		return new Date(n.getFullYear(), n.getMonth(), 1);
	});
	const [selecting, setSelecting] = (0, import_react.useState)("in");
	const [datesOpen, setDatesOpen] = (0, import_react.useState)(false);
	const [showSticky, setShowSticky] = (0, import_react.useState)(false);
	const [showStickyReserve, setShowStickyReserve] = (0, import_react.useState)(false);
	const bookingRef = (0, import_react.useRef)(null);
	const photosRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
	const openTour = (0, import_react.useCallback)((index) => {
		setTourIndex(index);
		setOverlay("tour");
	}, []);
	const openLightbox = (0, import_react.useCallback)((index) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#photos",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:px-4 focus:py-2",
				children: "Skip to photos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				onSearch: () => setOverlay("search"),
				onHost: () => setOverlay("host"),
				onGlobe: () => setOverlay("globe"),
				onLogin: () => setOverlay("auth"),
				onSignup: () => setOverlay("auth")
			}),
			showSticky ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-20 z-30 bg-paper border-b border-hair hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "listing-wrap h-12 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex gap-6 text-sm font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#photos",
								className: "hover:border-b-2 border-ink py-3",
								children: "Photos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#amenities",
								className: "hover:border-b-2 border-ink py-3",
								children: "Amenities"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#reviews",
								className: "hover:border-b-2 border-ink py-3",
								children: "Reviews"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#location",
								className: "hover:border-b-2 border-ink py-3",
								children: "Location"
							})
						]
					}), showStickyReserve ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: formatMoney(LISTING.pricePerNight)
								}),
								" ",
								"night"
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Add dates for prices"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, { size: 10 }),
									" ",
									LISTING.rating,
									" · ",
									LISTING.reviewCount,
									" reviews"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "reserve-btn w-auto px-6",
							onClick: onReserve,
							children: quote ? "Reserve" : "Check availability"
						})]
					}) : null]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "listing-wrap pt-6 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-hero font-semibold tracking-tight",
							children: LISTING.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-1 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOverlay("share"),
								className: "air-btn-ghost inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareIcon, { size: 16 }), " Share"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSaved((v) => !v),
								className: "air-btn-ghost inline-flex items-center gap-2",
								"aria-pressed": saved,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartIcon, {
									size: 16,
									filled: saved,
									className: saved ? "text-rausch" : ""
								}), saved ? "Saved" : "Save"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-6",
						children: [
							LISTING.isGuestFavorite ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedalIcon, {
									size: 16,
									className: "text-rausch"
								}), " Guest favorite"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, { size: 12 }),
									" ",
									LISTING.rating
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#reviews",
								className: "font-semibold underline",
								children: [LISTING.reviewCount, " reviews"]
							}),
							LISTING.isSuperhost ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: "·"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Superhost" })] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#location",
								className: "font-semibold underline",
								children: LISTING.location
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "photos",
						ref: photosRef,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGrid, { onOpenTour: openTour })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-[1fr_377px] gap-x-20 pt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4 pb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-section font-semibold",
									children: [
										LISTING.propertyType,
										" hosted by ",
										LISTING.host.name
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-body text-ink mt-1",
									children: [
										LISTING.guests,
										" guests · ",
										LISTING.bedrooms,
										" bedrooms · ",
										LISTING.beds,
										" beds ·",
										" ",
										LISTING.baths,
										" baths"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "relative shrink-0",
									"aria-label": `Hosted by ${LISTING.host.name}`,
									onClick: () => document.getElementById("host")?.scrollIntoView({ behavior: "smooth" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: LISTING.host.avatar,
										alt: "",
										className: "size-14 rounded-full object-cover"
									}), LISTING.host.isSuperhost ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -bottom-1 -right-1 size-6 rounded-full bg-paper grid place-items-center shadow-search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedalIcon, {
											size: 16,
											className: "text-rausch"
										})
									}) : null]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule !my-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "py-8 space-y-6",
								children: HIGHLIGHTS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5",
										children: h.icon === "selfcheckin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmenityGlyph, { name: "selfcheckin" }) : h.icon === "badge" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedalIcon, {}) : h.icon === "pin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarIcon, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold",
										children: h.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-faint",
										children: h.body
									})] })]
								}, h.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule !my-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestFavorite, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule !my-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "inline-flex items-center gap-2 text-sm font-semibold mb-4 hover:underline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranslateIcon, { size: 16 }), " Translate"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "whitespace-pre-line text-body",
										children: DESCRIPTION_SHORT
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "mt-4 font-semibold underline",
										onClick: () => setOverlay("description"),
										children: "Show more"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule !my-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-section font-semibold mb-6",
									children: "Where you’ll sleep"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-4 overflow-x-auto pb-2",
									children: SLEEPING.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											const idx = PHOTOS.findIndex((p) => p.room === room.room);
											openTour(idx < 0 ? 0 : idx);
										},
										className: "min-w-[200px] w-[220px] text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "photo-tile rounded-card h-[140px] mb-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: room.photo,
													alt: room.title
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: room.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-mute",
												children: room.detail
											})
										]
									}, room.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule !my-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "amenities",
								className: "py-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-section font-semibold mb-6",
										children: "What this place offers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "grid sm:grid-cols-2 gap-x-8 gap-y-4",
										children: PREVIEW_AMENITY_IDS.map((id) => {
											const a = AMENITIES.find((x) => x.id === id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmenityGlyph, { name: a.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.label })]
											}, a.id);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "air-btn mt-8",
										onClick: () => setOverlay("amenities"),
										children: [
											"Show all ",
											AMENITIES.length,
											" amenities"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule !my-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StayCalendar, {
									checkIn,
									checkOut,
									onChange: (a, b) => {
										setCheckIn(a);
										setCheckOut(b);
									},
									month,
									onMonthChange: setMonth,
									selecting,
									onSelecting: setSelecting
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "relative hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "booking-card",
								ref: bookingRef,
								className: "sticky top-28",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCard, {
									checkIn,
									checkOut,
									onDates: (a, b) => {
										setCheckIn(a);
										setCheckOut(b);
									},
									guests,
									onGuests: setGuests,
									month,
									onMonth: setMonth,
									selecting,
									onSelecting: setSelecting,
									onReserve,
									datesOpen,
									onDatesOpen: setDatesOpen
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "mt-6 mx-auto flex items-center gap-2 text-sm underline text-mute",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagIcon, { size: 14 }), " Report this listing"]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsSection, { onShowAll: () => setOverlay("reviews") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "location",
						className: "py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-section font-semibold mb-2",
								children: "Where you’ll be"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-body mb-6",
								children: LISTING.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-card overflow-hidden h-[480px] bg-wash",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: LISTING.mapSrc,
									alt: `Map of the area around ${LISTING.locationShort}`,
									className: "w-full h-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 pointer-events-none grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-40 rounded-full bg-rausch/25 border-2 border-rausch/40" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-mute max-w-2xl",
								children: "The pin is approximate to protect Elena’s privacy. Casa Aurora sits on a hillside above Greve, a ten-minute drive from the village square and under an hour from Florence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-3 font-semibold underline",
								onClick: () => setOverlay("description"),
								children: "Show more"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "host",
						className: "py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: LISTING.host.avatar,
									alt: "",
									className: "size-16 rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-section font-semibold",
									children: ["Hosted by ", LISTING.host.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-faint",
									children: [
										"Superhost · ",
										LISTING.host.yearsHosting,
										" years hosting"
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-3 gap-4 text-sm mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, {
											size: 12,
											className: "inline mr-1"
										}),
										LISTING.reviewCount,
										" Reviews"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedalIcon, {
										size: 16,
										className: "inline mr-1 -mt-0.5"
									}), "Superhost"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarIcon, {
											size: 16,
											className: "inline mr-1 -mt-0.5"
										}),
										LISTING.host.yearsHosting,
										" years hosting"
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-2xl mb-4",
								children: LISTING.host.about
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "text-sm space-y-1 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "inline font-semibold",
									children: "Response rate: "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "inline",
									children: LISTING.host.responseRate
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "inline font-semibold",
									children: "Responds "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "inline",
									children: LISTING.host.responseTime
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "air-btn",
								onClick: () => setOverlay("auth"),
								children: "Message host"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-faint mt-4 max-w-md",
								children: "To help protect your payment, always use Airbnb to send money and communicate with hosts."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-section font-semibold mb-8",
							children: "Things to know"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-3 gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowCol, {
									title: "House rules",
									items: HOUSE_RULES.map(asLine)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowCol, {
									title: "Safety & property",
									items: SAFETY.map(asLine)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowCol, {
									title: "Cancellation policy",
									items: CANCELLATION.map(asLine)
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden sticky bottom-0 z-30 bg-paper border-t border-hair px-6 py-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: formatMoney(LISTING.pricePerNight)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " night" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Add dates for prices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm underline",
					onClick: () => {
						setDatesOpen(true);
						document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth" });
					},
					children: checkIn && checkOut ? `${formatShortDate(checkIn)} – ${formatShortDate(checkOut)}` : "Add dates"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "reserve-btn w-auto px-6",
					onClick: onReserve,
					children: quote ? "Reserve" : "Check availability"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoTour, {
				open: overlay === "tour" || overlay === "lightbox",
				trap: overlay === "tour",
				initialIndex: tourIndex,
				onClose: () => setOverlay("none"),
				onOpenLightbox: openLightbox
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				open: overlay === "lightbox",
				index: lbIndex,
				onIndex: setLbIndex,
				onClose: () => setOverlay("tour")
			}),
			overlay === "amenities" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				title: "What this place offers",
				onClose: () => setOverlay("none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmenityGroups, {})
			}) : null,
			overlay === "description" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				title: "About this space",
				onClose: () => setOverlay("none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whitespace-pre-line",
					children: DESCRIPTION_FULL
				})
			}) : null,
			overlay === "reviews" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				title: "Reviews",
				onClose: () => setOverlay("none"),
				wide: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsList, {})
			}) : null,
			overlay === "share" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Share this place",
				onClose: () => setOverlay("none"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PHOTOS[0].src,
						alt: "",
						className: "size-16 rounded-btn object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: LISTING.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "air-btn w-full",
					onClick: async () => {
						try {
							await navigator.clipboard.writeText(window.location.href);
							setCopied(true);
							setTimeout(() => setCopied(false), 1800);
						} catch {
							setCopied(true);
						}
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyIcon, { size: 16 }),
						" ",
						copied ? "Link copied" : "Copy link"
					]
				})]
			}) : null,
			overlay === "auth" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Log in or sign up",
				onClose: () => setOverlay("none"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-mute mb-4",
					children: "This is a demo listing page. Accounts aren’t required — save the home on this device with the heart, and reserve to see a sample confirmation."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "reserve-btn",
					onClick: () => setOverlay("none"),
					children: "Continue as guest"
				})]
			}) : null,
			overlay === "reserve" && quote && checkIn && checkOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Reservation requested",
				onClose: () => setOverlay("none"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3",
						children: [
							nights,
							" night",
							nights === 1 ? "" : "s",
							" at Casa Aurora"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-mute mb-4",
						children: [
							formatShortDate(checkIn),
							" – ",
							formatShortDate(checkOut),
							" · ",
							guests.adults + guests.children,
							" ",
							"guest",
							guests.adults + guests.children === 1 ? "" : "s"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-lg mb-6",
						children: [formatMoney(quote.total), " total"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mute mb-6",
						children: "You won’t be charged. This clone doesn’t process payments — in production this would hold the stay and notify Elena."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "reserve-btn",
						onClick: () => setOverlay("none"),
						children: "Done"
					})
				]
			}) : null,
			overlay === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				title: "Start your search",
				onClose: () => setOverlay("none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-mute",
					children: "This take-home is the listing page. Search would open Airbnb’s destination / dates / guests overlay — here the stay is already Casa Aurora in Chianti."
				})
			}) : null,
			overlay === "globe" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				title: "Language and region",
				onClose: () => setOverlay("none"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold mb-2",
					children: "English (US)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-mute",
					children: "Currency · US Dollar"
				})]
			}) : null,
			overlay === "host" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				title: "Airbnb your home",
				onClose: () => setOverlay("none"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-mute",
					children: "Hosts on a production marketplace would start a listing flow from here. This clone stays focused on the guest listing experience."
				})
			}) : null
		]
	});
}
function asLine(item) {
	return item.value ? `${item.label}: ${item.value}` : item.label;
}
function GuestFavorite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-10 flex flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaurelLeft, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[48px] font-semibold leading-none tracking-tight",
						children: LISTING.rating
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaurelRight, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold mt-2",
				children: "Guest favorite"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-mute max-w-sm mt-1",
				children: "One of the most loved homes on Airbnb, according to guests"
			})
		]
	});
}
function ReviewsSection({ onShowAll }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "reviews",
		className: "py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaurelLeft, { className: "h-14 w-auto" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-[32px] font-semibold tracking-tight flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, { size: 20 }),
							" ",
							LISTING.rating,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: "·"
							}),
							LISTING.reviewCount,
							" reviews"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mute",
						children: "Guest favorite"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaurelRight, { className: "h-14 w-auto" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold mb-2",
					children: "Overall rating"
				}), RATING_BARS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-3",
						children: b.stars
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 h-[4px] bg-hair rounded-full overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-ink",
							style: { width: `${b.pct * 100}%` }
						})
					})]
				}, b.stars))] }), CATEGORY_SCORES.map((c) => {
					const Icon = CATEGORY_ICONS[c.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l border-hair pl-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: c.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: c.score.toFixed(1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 28,
								className: "mt-2"
							})
						]
					}, c.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-x-16 gap-y-10",
				children: REVIEWS.slice(0, 6).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.avatar,
							alt: "",
							className: "size-12 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-faint",
							children: [r.yearsOnAirbnb, " years on Airbnb"]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, {
								size: 10,
								className: "inline"
							}),
							" ",
							Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "star"
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: [" ", r.date]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: " · Stayed a few nights"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body",
						children: r.text
					})
				] }, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "air-btn mt-10",
				onClick: onShowAll,
				children: [
					"Show all ",
					LISTING.reviewCount,
					" reviews"
				]
			})
		]
	});
}
function ReviewsList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border-b border-hair pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: r.avatar,
					alt: "",
					className: "size-12 rounded-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: r.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-faint",
					children: [
						r.location,
						" · ",
						r.date
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.text })]
		}, r.id))
	});
}
function AmenityGroups() {
	const groups = AMENITIES.reduce((acc, a) => {
		(acc[a.group] ??= []).push(a);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: Object.entries(groups).map(([group, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-semibold text-lg mb-4",
			children: group
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-4 py-4 border-b border-hair last:border-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmenityGlyph, {
				name: a.icon,
				className: a.available === false ? "opacity-40" : ""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: a.available === false ? "line-through text-faint" : "",
				children: a.label
			})]
		}, a.id)) })] }, group))
	});
}
function KnowCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-semibold mb-3",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2 text-sm",
			children: items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-3 font-semibold underline text-sm",
			children: "Show more"
		})
	] });
}
function Modal({ title, onClose, children, wide }) {
	const ref = (0, import_react.useRef)(null);
	useFocusTrap(true, ref, onClose);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 overlay-fade",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close dialog",
			className: "absolute inset-0 bg-overlay",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "modal-title",
			className: wide ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper rounded-card shadow-float w-[min(92vw,720px)] max-h-[86vh] overflow-y-auto" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper rounded-card shadow-float w-[min(92vw,568px)] max-h-[86vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 bg-paper flex items-center h-16 px-6 border-b border-hair",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "size-8 grid place-items-center rounded-full hover:bg-wash",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "modal-title",
					className: "flex-1 text-center font-semibold pr-8",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 py-6",
				children
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingApp, {});
}
//#endregion
export { Home as component };
