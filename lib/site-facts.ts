// Single source of truth for 60 on Kosmos's rates, capacity, and facilities.
// Import these values wherever a page states a fact about the business,
// rather than re-typing the number/string — that's how these details drift
// out of sync between pages. Confirmed facts only; if something isn't
// confirmed, don't add it here as a guess.

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
  latitude: -33.9347,
  longitude: 18.6489,
} as const

export const stayTerms = {
  checkIn: "14:00",
  checkOut: "10:00",
  quietHoursStart: "21:30",
  quietHoursEnd: "07:00",
  quietHoursLabel: "21:30–07:00",
  monthlyRateMinNights: 28,
  payment: "EFT only; cash is not accepted",
} as const

export const capacity = {
  roomCount: 4,
  maxGuests: 8,
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

export const priceRangeLabel = "R464 - R840"

// Review platforms with genuine, live listings. Deliberately no hard-coded
// rating value or review count here — those drift out of date and conflict
// across pages. Link out to the platform and let it show its own current
// figure ("View our latest verified reviews").
export const reviewPlatforms = {
  booking: "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
  airbnb: "https://www.airbnb.co.za/rooms/1055447623",
} as const
