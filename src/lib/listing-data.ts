export type RoomId =
  | "exterior"
  | "living"
  | "kitchen"
  | "dining"
  | "bedroom-1"
  | "bedroom-2"
  | "bedroom-3"
  | "bedroom-4"
  | "bathroom"
  | "pool"
  | "patio"
  | "entrance";

export type Photo = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  room: RoomId;
};

export type Amenity = {
  id: string;
  label: string;
  group: string;
  icon: AmenityIcon;
  available?: boolean;
};

export type AmenityIcon =
  | "wifi"
  | "kitchen"
  | "parking"
  | "pool"
  | "tv"
  | "workspace"
  | "ac"
  | "washer"
  | "dryer"
  | "hair"
  | "essentials"
  | "hangers"
  | "iron"
  | "hotwater"
  | "heating"
  | "alarm-co"
  | "alarm-smoke"
  | "firstaid"
  | "fireext"
  | "camera"
  | "bbq"
  | "dining"
  | "coffee"
  | "wine"
  | "fridge"
  | "dishwasher"
  | "oven"
  | "stove"
  | "balcony"
  | "garden"
  | "lounge"
  | "shower"
  | "bathtub"
  | "ev"
  | "selfcheckin"
  | "luggage"
  | "longterm"
  | "pets-no"
  | "backyard"
  | "beach"
  | "gym"
  | "breakfast"
  | "fireplace";

export type Review = {
  id: string;
  name: string;
  avatar: string;
  date: string;
  yearsOnAirbnb: number;
  location: string;
  text: string;
  rating: number;
};

export const ROOMS: { id: RoomId; label: string }[] = [
  { id: "exterior", label: "Exterior" },
  { id: "living", label: "Living room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "dining", label: "Dining area" },
  { id: "bedroom-1", label: "Bedroom 1" },
  { id: "bedroom-2", label: "Bedroom 2" },
  { id: "bedroom-3", label: "Bedroom 3" },
  { id: "bedroom-4", label: "Bedroom 4" },
  { id: "bathroom", label: "Full bathroom" },
  { id: "pool", label: "Pool" },
  { id: "patio", label: "Patio" },
  { id: "entrance", label: "Entrance" },
];

export const PHOTOS: Photo[] = [
  {
    id: "p01",
    src: "/photos/01.jpg",
    alt: "Infinity pool and villa overlooking the Chianti hills",
    caption: "The infinity pool faces west over the olive groves.",
    room: "exterior",
  },
  {
    id: "p04",
    src: "/photos/04.jpg",
    alt: "Sunlit living room with linen sofas",
    caption: "Double-height living room with linen sofas and a limestone hearth.",
    room: "living",
  },
  {
    id: "p07",
    src: "/photos/07.jpg",
    alt: "Chef's kitchen with marble island",
    caption: "Fully equipped chef's kitchen with a 4-metre marble island.",
    room: "kitchen",
  },
  {
    id: "p11",
    src: "/photos/11.jpg",
    alt: "Primary bedroom with king bed",
    caption: "Primary suite — king bed, linen drapes, hill views.",
    room: "bedroom-1",
  },
  {
    id: "p17",
    src: "/photos/17.jpg",
    alt: "Lounge deck beside the pool",
    caption: "Sun-loungers and a shaded daybed on the pool terrace.",
    room: "pool",
  },
  {
    id: "p02",
    src: "/photos/02.jpg",
    alt: "Villa at dusk with pool lights",
    caption: "The house at golden hour, pool lights just coming on.",
    room: "exterior",
  },
  {
    id: "p03",
    src: "/photos/03.jpg",
    alt: "Pool house surrounded by palms",
    caption: "Covered outdoor living opens onto the water.",
    room: "exterior",
  },
  {
    id: "p05",
    src: "/photos/05.jpg",
    alt: "Living room conversation area",
    caption: "A quieter corner for reading and evening wine.",
    room: "living",
  },
  {
    id: "p06",
    src: "/photos/06.jpg",
    alt: "Bright living room with tall windows",
    caption: "Morning light through the south-facing windows.",
    room: "living",
  },
  {
    id: "p08",
    src: "/photos/08.jpg",
    alt: "Open living room looking toward the kitchen",
    caption: "Open plan from the hearth through to the kitchen.",
    room: "living",
  },
  {
    id: "p09",
    src: "/photos/09.jpg",
    alt: "Kitchen island with bar stools",
    caption: "Breakfast bar seats six — espresso machine included.",
    room: "kitchen",
  },
  {
    id: "p10",
    src: "/photos/10.jpg",
    alt: "Dining table set for a long lunch",
    caption: "Dining table for ten, with doors out to the terrace.",
    room: "dining",
  },
  {
    id: "p12",
    src: "/photos/12.jpg",
    alt: "Bedroom 2 with a queen bed",
    caption: "Bedroom 2 — queen bed and a writing desk.",
    room: "bedroom-2",
  },
  {
    id: "p13",
    src: "/photos/13.jpg",
    alt: "Bedroom 3 with upholstered bed",
    caption: "Bedroom 3 — garden outlook, blackout drapes.",
    room: "bedroom-3",
  },
  {
    id: "p14",
    src: "/photos/14.jpg",
    alt: "Bedroom 4 in warm neutrals",
    caption: "Bedroom 4 — twin beds that can be made as a king.",
    room: "bedroom-4",
  },
  {
    id: "p15",
    src: "/photos/15.jpg",
    alt: "Primary bathroom with soaking tub",
    caption: "Primary bath — soaking tub, rain shower, heated floors.",
    room: "bathroom",
  },
  {
    id: "p20",
    src: "/photos/20.jpg",
    alt: "Bathroom vanity and walk-in shower",
    caption: "Second full bath with a walk-in shower.",
    room: "bathroom",
  },
  {
    id: "p16",
    src: "/photos/16.jpg",
    alt: "Gallery hallway with wood floors",
    caption: "The gallery hall connecting the sleeping wing.",
    room: "entrance",
  },
  {
    id: "p18",
    src: "/photos/18.jpg",
    alt: "Pool from above",
    caption: "The pool from the upper terrace.",
    room: "pool",
  },
  {
    id: "p19",
    src: "/photos/19.jpg",
    alt: "Evening terrace with string lights",
    caption: "The dining terrace after dark.",
    room: "patio",
  },
  {
    id: "p21",
    src: "/photos/21.jpg",
    alt: "Front façade of the villa",
    caption: "Arrival — cypress, gravel court, the front door.",
    room: "exterior",
  },
  {
    id: "p22",
    src: "/photos/22.jpg",
    alt: "Reading lounge",
    caption: "A quieter lounge off the living room.",
    room: "living",
  },
  {
    id: "p23",
    src: "/photos/23.jpg",
    alt: "Garden and pool",
    caption: "Lawn, rosemary hedges, and the long pool.",
    room: "pool",
  },
  {
    id: "p24",
    src: "/photos/24.jpg",
    alt: "Twilight view of the villa",
    caption: "Twilight from the olive grove below the house.",
    room: "exterior",
  },
  {
    id: "p26",
    src: "/photos/26.jpg",
    alt: "Still water of the pool",
    caption: "Early morning, before the cicadas start.",
    room: "pool",
  },
  {
    id: "p27",
    src: "/photos/27.jpg",
    alt: "Arrival lounge",
    caption: "The arrival lounge just inside the front door.",
    room: "entrance",
  },
];

export const AMENITIES: Amenity[] = [
  { id: "wifi", label: "Wifi", group: "Internet and office", icon: "wifi" },
  { id: "workspace", label: "Dedicated workspace", group: "Internet and office", icon: "workspace" },
  { id: "kitchen", label: "Kitchen", group: "Kitchen and dining", icon: "kitchen" },
  { id: "dining", label: "Dining table for 10", group: "Kitchen and dining", icon: "dining" },
  { id: "coffee", label: "Espresso machine", group: "Kitchen and dining", icon: "coffee" },
  { id: "wine", label: "Wine glasses", group: "Kitchen and dining", icon: "wine" },
  { id: "fridge", label: "Refrigerator", group: "Kitchen and dining", icon: "fridge" },
  { id: "dishwasher", label: "Dishwasher", group: "Kitchen and dining", icon: "dishwasher" },
  { id: "oven", label: "Oven", group: "Kitchen and dining", icon: "oven" },
  { id: "stove", label: "Gas stove", group: "Kitchen and dining", icon: "stove" },
  { id: "pool", label: "Private pool", group: "Outdoor", icon: "pool" },
  { id: "bbq", label: "BBQ grill", group: "Outdoor", icon: "bbq" },
  { id: "patio", label: "Patio or balcony", group: "Outdoor", icon: "balcony" },
  { id: "garden", label: "Garden", group: "Outdoor", icon: "garden" },
  { id: "backyard", label: "Backyard", group: "Outdoor", icon: "backyard" },
  { id: "lounge", label: "Outdoor dining area", group: "Outdoor", icon: "lounge" },
  { id: "parking", label: "Free parking on premises", group: "Parking and facilities", icon: "parking" },
  { id: "ev", label: "EV charger", group: "Parking and facilities", icon: "ev" },
  { id: "tv", label: "HDTV with Netflix", group: "Entertainment", icon: "tv" },
  { id: "fireplace", label: "Indoor fireplace", group: "Entertainment", icon: "fireplace" },
  { id: "ac", label: "Air conditioning", group: "Heating and cooling", icon: "ac" },
  { id: "heating", label: "Heating", group: "Heating and cooling", icon: "heating" },
  { id: "washer", label: "Washer", group: "Bedroom and laundry", icon: "washer" },
  { id: "dryer", label: "Dryer", group: "Bedroom and laundry", icon: "dryer" },
  { id: "essentials", label: "Essentials", group: "Bedroom and laundry", icon: "essentials" },
  { id: "hangers", label: "Hangers", group: "Bedroom and laundry", icon: "hangers" },
  { id: "iron", label: "Iron", group: "Bedroom and laundry", icon: "iron" },
  { id: "hair", label: "Hair dryer", group: "Bathroom", icon: "hair" },
  { id: "hotwater", label: "Hot water", group: "Bathroom", icon: "hotwater" },
  { id: "bathtub", label: "Bathtub", group: "Bathroom", icon: "bathtub" },
  { id: "shower", label: "Outdoor shower", group: "Bathroom", icon: "shower" },
  { id: "selfcheckin", label: "Self check-in", group: "Services", icon: "selfcheckin" },
  { id: "luggage", label: "Luggage dropoff allowed", group: "Services", icon: "luggage" },
  { id: "longterm", label: "Long-term stays allowed", group: "Services", icon: "longterm" },
  { id: "alarm-co", label: "Carbon monoxide alarm", group: "Home safety", icon: "alarm-co" },
  { id: "alarm-smoke", label: "Smoke alarm", group: "Home safety", icon: "alarm-smoke" },
  { id: "firstaid", label: "First aid kit", group: "Home safety", icon: "firstaid" },
  { id: "fireext", label: "Fire extinguisher", group: "Home safety", icon: "fireext" },
  {
    id: "camera",
    label: "Exterior security cameras on property",
    group: "Home safety",
    icon: "camera",
  },
  {
    id: "pets-no",
    label: "Pets allowed",
    group: "Not included",
    icon: "pets-no",
    available: false,
  },
];

export const PREVIEW_AMENITY_IDS = [
  "garden",
  "kitchen",
  "wifi",
  "workspace",
  "parking",
  "pool",
  "ac",
  "tv",
  "washer",
  "selfcheckin",
] as const;

export const HIGHLIGHTS = [
  {
    id: "self",
    title: "Self check-in",
    body: "Check yourself in with the lockbox.",
    icon: "selfcheckin" as AmenityIcon,
  },
  {
    id: "super",
    title: "Elena is a Superhost",
    body: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
    icon: "badge" as const,
  },
  {
    id: "loc",
    title: "Great location",
    body: "100% of recent guests gave the location a 5-star rating.",
    icon: "pin" as const,
  },
  {
    id: "cancel",
    title: "Free cancellation before Oct 4",
    body: "Get a full refund if you change your mind.",
    icon: "calendar" as const,
  },
];

export const SLEEPING = [
  {
    id: "br1",
    title: "Bedroom 1",
    detail: "1 king bed",
    photo: "/photos/11.jpg",
    room: "bedroom-1" as RoomId,
  },
  {
    id: "br2",
    title: "Bedroom 2",
    detail: "1 queen bed",
    photo: "/photos/12.jpg",
    room: "bedroom-2" as RoomId,
  },
  {
    id: "br3",
    title: "Bedroom 3",
    detail: "1 queen bed",
    photo: "/photos/13.jpg",
    room: "bedroom-3" as RoomId,
  },
  {
    id: "br4",
    title: "Bedroom 4",
    detail: "2 twin beds",
    photo: "/photos/14.jpg",
    room: "bedroom-4" as RoomId,
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Amelia",
    avatar: "/photos/guest-1.jpg",
    date: "August 2026",
    yearsOnAirbnb: 7,
    location: "London, United Kingdom",
    rating: 5,
    text: "We spent a week at Casa Aurora and still talk about the evenings on the terrace. Elena’s notes on the village trattorie were spot on, the pool was immaculate, and the house is photographed honestly — if anything it feels larger in person. We will be back for the harvest.",
  },
  {
    id: "r2",
    name: "Jonas",
    avatar: "/photos/guest-2.jpg",
    date: "July 2026",
    yearsOnAirbnb: 4,
    location: "Berlin, Germany",
    rating: 5,
    text: "Quiet in the way you hope a hillside house will be. Cicadas, a breeze off the vines, and a kitchen you actually want to cook in. Check-in was effortless and Elena answered a late message about a restaurant reservation within minutes.",
  },
  {
    id: "r3",
    name: "Priya",
    avatar: "/photos/guest-3.jpg",
    date: "June 2026",
    yearsOnAirbnb: 5,
    location: "Brooklyn, New York",
    rating: 5,
    text: "A beautifully judged house — nothing fussy, everything considered. Four bedrooms meant the whole family could spread out, and the primary bath with the soaking tub was the hit of the trip. Greve is a ten-minute drive; Florence is an easy morning.",
  },
  {
    id: "r4",
    name: "Luca",
    avatar: "/photos/guest-4.jpg",
    date: "May 2026",
    yearsOnAirbnb: 9,
    location: "Milan, Italy",
    rating: 5,
    text: "Even as someone who grew up in Tuscany I was impressed. The restoration is careful, the pool is properly deep, and the olive grove walk at dusk is the thing I’ll remember. Superhost in the truest sense.",
  },
  {
    id: "r5",
    name: "Sophie",
    avatar: "/photos/guest-5.jpg",
    date: "April 2026",
    yearsOnAirbnb: 3,
    location: "Paris, France",
    rating: 5,
    text: "We came for a long weekend and wished we had booked ten days. The living room light in the late afternoon is extraordinary. Beds were hotel-level comfortable. A rare listing where every photo matches the stay.",
  },
  {
    id: "r6",
    name: "Daniel",
    avatar: "/photos/guest-6.jpg",
    date: "October 2025",
    yearsOnAirbnb: 6,
    location: "Austin, Texas",
    rating: 5,
    text: "Harvest season — cool mornings, warm afternoons, empty roads. Elena left a bottle of the estate’s own Chianti Classico and a hand-drawn map of the market. Communication was perfect and the house was spotless when we arrived.",
  },
];

export const RATING_BARS = [
  { stars: 5, pct: 0.94 },
  { stars: 4, pct: 0.05 },
  { stars: 3, pct: 0.01 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

export const CATEGORY_SCORES = [
  { id: "clean", label: "Cleanliness", score: 4.9, icon: "sparkle" as const },
  { id: "acc", label: "Accuracy", score: 5.0, icon: "exact" as const },
  { id: "check", label: "Check-in", score: 4.9, icon: "key" as const },
  { id: "comm", label: "Communication", score: 5.0, icon: "chat" as const },
  { id: "loc", label: "Location", score: 4.8, icon: "map" as const },
  { id: "val", label: "Value", score: 4.7, icon: "tag" as const },
];

export const DESCRIPTION_SHORT = `Casa Aurora sits on a south-facing slope above Greve in Chianti, with an infinity pool aimed at the evening light and four bedrooms arranged along a quiet gallery hall. The house was rebuilt from a 19th-century farmhouse — thick stone walls, new oak floors, a kitchen meant for long lunches.

Olive groves drop away on three sides. The village is ten minutes by car; Florence is under an hour. Days tend to collect around the terrace: coffee at the island, a swim, a drive to Panzano, and dinner outside once the stones have given their heat back.`;

export const DESCRIPTION_FULL = `${DESCRIPTION_SHORT}

The ground floor is one continuous room — living, dining, kitchen — opening through three sets of doors onto the pool terrace. Upstairs, the primary suite looks west over the valley; the three remaining bedrooms share a second full bath and a small sitting room that works well as a workspace.

You’ll find a lockbox on the arrival court, a restocked kitchen (oil, salt, coffee, a first bottle of the estate Chianti Classico), and a binder of Elena’s notes: the butcher in Greve, the Saturday market, the walk through the grove at dusk. The pool is heated in shoulder season. An EV charger sits under the carport.

The house is best for families or two couples who want quiet, a proper kitchen, and the kind of view that keeps you at the table a little longer.`;

export const HOUSE_RULES = [
  { label: "Check-in", value: "3:00 PM – 8:00 PM" },
  { label: "Checkout", value: "11:00 AM" },
  { label: "8 guests maximum" },
  { label: "No pets" },
  { label: "No parties or events" },
  { label: "No smoking" },
];

export const SAFETY = [
  { label: "Carbon monoxide alarm" },
  { label: "Smoke alarm" },
  { label: "Exterior security cameras on property" },
  { label: "Pool / hot tub without a gate or lock" },
  { label: "Nearby lake, river, other body of water" },
];

export const CANCELLATION = [
  { label: "Free cancellation before Oct 4" },
  { label: "Review the full policy for details on cancellations and refunds." },
  { label: "This reservation is non-refundable after check-in." },
];

/** Blocked nights as YYYY-MM-DD (already reserved). */
export const BLOCKED_ISO = new Set([
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
  "2027-01-01",
]);

export const LISTING = {
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
  serviceFeeRate: 0.142,
  taxRate: 0.1,
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
    about:
      "I restored Casa Aurora with my family after a decade in Florence. I live in the village below the house and am close if you need anything — restaurant bookings, a driver, a bottle from a neighbour’s cellar. I want the house to feel like yours for the week.",
    responseRate: "100%",
    responseTime: "within an hour",
    coHosts: 1,
  },
  lat: 43.5831,
  lng: 11.3158,
  mapSrc: "/photos/map.jpg",
  minNights: 3,
  maxGuests: 8,
};

export function quoteStay(nights: number) {
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
    total: base + cleaning + service + taxes,
  };
}

export function isoDay(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function isBlocked(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return true;
  return BLOCKED_ISO.has(isoDay(date));
}

export function photosByRoom(room: RoomId) {
  return PHOTOS.filter((p) => p.room === room);
}

export const HERO_PHOTOS = PHOTOS.slice(0, 5);
