// Single source of truth for 60 on Kosmos’s rates, capacity, and facilities.
// Import these values wherever a page states a fact about the business,
// rather than re-typing the number/string — that’s how these details drift
// out of sync between pages. Confirmed facts only; if something isn’t
// confirmed, don’t add it here as a guess.

export const business = {
  name: "60 on Kosmos",
  streetAddress: "60 Kosmos Street",
  addressLocality: "Bellville South",
  addressRegion: "Western Cape",
  postalCode: "7530",
  addressCountry: "ZA",
  fullAddress: "60 Kosmos Street, Bellville South, Cape Town, 7530",
  phone: "074 524 5703",
  phoneIntl: "+27745245703",
  whatsappNumber: "27745245703",
  email: "info@60onkosmos.co.za",
  // Matches the Google Business Profile and Booking.com map pins.
  latitude: -33.9176,
  longitude: 18.64,
} as const

export const stayTerms = {
  checkIn: "14:00",
  checkOut: "10:00",
  quietHoursStart: "22:00",
  quietHoursEnd: "08:00",
  quietHoursLabel: "22:00–08:00",
  monthlyRateMinNights: 28,
  payment: "EFT only; cash is not accepted",
} as const

export const capacity = {
  roomCount: 4,
  // Owner-confirmed: 9 sleeping places across the four rooms, counting the
  // Double Room as two people sharing the double bed (a couple).
  maxGuests: 9,
} as const

// Confirmed facilities. Do not describe these as "full kitchen," "24/7
// security," "instant confirmation," "best-rate guarantee," "live-in
// caretaker," or with unqualified flexible-arrival or vehicle/trailer
// capacity promises unless that wording has been specifically confirmed.
export const facilities = [
  "Private ensuite bathrooms",
  "Secure gated parking",
  "CCTV and ADT armed response",
  "WiFi included",
  "Weekly cleaning",
  "Communal kitchenette / self-catering facilities",
  "Company invoices available",
] as const

export const rooms = [
  {
    name: "Standard Twin",
    price: 580,
    weeklyPrice: 522,
    monthlyPrice: 464,
    layout: "Two single beds",
    barFridge: false,
  },
  {
    name: "Deluxe Twin",
    price: 650,
    weeklyPrice: 585,
    monthlyPrice: 520,
    layout: "Two single beds",
    barFridge: true,
  },
  {
    name: "Double Room",
    price: 680,
    weeklyPrice: 612,
    monthlyPrice: 544,
    layout: "One double bed",
    barFridge: true,
  },
  {
    name: "Triple Room",
    price: 840,
    weeklyPrice: 756,
    monthlyPrice: 672,
    layout: "Three single beds",
    barFridge: true,
  },
] as const

// Owner-confirmed group offer (Nov 2026): 10% off the nightly room rates when
// one group books all four rooms direct for at least two nights. It does not
// stack with the 7+ or 28+ night rates, which are already discounted.
export const groupOffer = {
  discountPercent: 10,
  minNights: 2,
  // Booking deposit that confirms a group booking (owner-confirmed, Nov 2026).
  // Separate from the refundable security deposit on longer stays.
  depositPercent: 50,
} as const

export const priceRangeLabel = "R464 - R840"

// Review platforms with genuine, live listings. Deliberately no hard-coded
// rating value or review count here — those drift out of date and conflict
// across pages. Link out to the platform and let it show its own current
// figure ("View our latest verified reviews").
export const reviewPlatforms = {
  booking: "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
  airbnb: "https://www.airbnb.co.za/rooms/1055447623",
  // Google Business Profile share link, supplied by the owner.
  google: "https://share.google/cQTqA5TBvE9XDki11",
} as const

// Per-person cost when a room is fully shared (room rate ÷ beds). Derived from
// the confirmed room rates above, so it can never drift from them. Crews and
// AI assistants compare contractor accommodation per person per night.
const sleeps = { "Standard Twin": 2, "Deluxe Twin": 2, "Double Room": 2, "Triple Room": 3 } as const

export const perPersonRates = rooms.map((r) => {
  const n = sleeps[r.name]
  return {
    name: r.name,
    sleeps: n,
    nightly: Math.round(r.price / n),
    weekly: Math.round(r.weeklyPrice / n),
    monthly: Math.round(r.monthlyPrice / n),
  }
})

// The lowest per-person figures all come from the Triple Room with three
// adults sharing. Always state them with that qualifier (see below) — they
// are not available for every room or every group size.
export const lowestPerPerson = {
  nightly: Math.min(...perPersonRates.map((r) => r.nightly)), // R280 (Triple, 1–6 nights)
  weekly: Math.min(...perPersonRates.map((r) => r.weekly)), // R252 (Triple, 7–27 nights)
  monthly: Math.min(...perPersonRates.map((r) => r.monthly)), // R224 (Triple, 28+ nights)
} as const

export const lowestPerPersonQualifier = `three adults sharing the Triple Room for ${stayTerms.monthlyRateMinNights}+ nights, subject to availability`

// Bed configuration: 7 single beds (2 + 2 + 3) and one double bed. A group of
// nine is only possible with two adults sharing the double bed.
export const beds = { single: 7, double: 1 } as const
export const nineGuestNote =
  "The house has 7 single beds and 1 double bed, so a group of nine needs two adults to share the double bed in the Double Room."

// Whole house (all four rooms; 9 guests only with two sharing the double bed)
// per night at each rate tier.
export const wholeHouse = {
  nightly: rooms.reduce((s, r) => s + r.price, 0), // R2,750
  weekly: rooms.reduce((s, r) => s + r.weeklyPrice, 0), // R2,475
  monthly: rooms.reduce((s, r) => s + r.monthlyPrice, 0), // R2,200
  groupNightly: Math.round(rooms.reduce((s, r) => s + r.price, 0) * (1 - groupOffer.discountPercent / 100)), // R2,475
} as const
