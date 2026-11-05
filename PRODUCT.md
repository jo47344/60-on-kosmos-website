# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary (confirmed):** companies and site managers who need to house small project teams or contractors in Bellville / Cape Town's northern suburbs, often for stays of a month or more. The person deciding is usually arranging a stay for others: they compare price, location, security and practicality (parking, cleaning, invoices), then make contact to confirm availability and rates. Teams are up to eight people across the four rooms.

**Secondary:** individual long-stay guests: UWC and CPUT students, Tygerberg Hospital medical staff, corporate relocations, and other working professionals needing furnished accommodation in Bellville South.

## Product Purpose

60 on Kosmos is a four-room guesthouse at 60 Kosmos Street, Bellville South, Cape Town, offering furnished private-ensuite rooms for short and long stays. The website exists to turn those visitors into direct contact with the guesthouse.

Success is **any direct contact**: phone call, WhatsApp, email, the company enquiry/quote form, or the booking/check-availability form all count equally. Booking.com and Airbnb are mainly there as proof (verified reviews), not as the conversion goal.

## Positioning

A small, owner-run guesthouse where a whole small team can take the property (4 rooms, up to 8 guests) with private ensuites. It has secure gated parking with CCTV and ADT armed response, weekly cleaning, self-catering, company invoices and monthly rates from 28 nights. It sits in Bellville South, close to the northern-suburbs industrial and business areas, UWC, CPUT and Tygerberg Hospital.

## Operating Context

- Visitors arrive mostly from Google search, through many location- and audience-specific landing pages (contractor pages per suburb or industrial area, student and hospital pages, monthly and self-catering pages, blog). SEO, structured data and fast mobile loading are core to how the site works.
- Contact happens by WhatsApp and phone (074 524 5703), email (info@60onkosmos.co.za), and forms sent through Formspree. A floating WhatsApp widget and a sticky mobile call-to-action bar appear site-wide. Conversions (calls, WhatsApp, email, forms) are tracked in GA4.
- Bookings are confirmed manually. Payment is by EFT only; cash is not accepted.

## Capabilities and Constraints

- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS with shadcn/ui components, Lucide icons, deployed on Vercel at 60onkosmos.co.za.
- **Single source of truth:** `lib/site-facts.ts` holds the business details, stay terms, capacity, facilities, room rates and review links. Pages must import from it rather than restate numbers.
- **Rooms and nightly / weekly / monthly rates (ZAR):**
  - Standard Twin: two single beds, no bar fridge, R580 / R522 / R464.
  - Deluxe Twin: two single beds, bar fridge, R650 / R585 / R520.
  - Double Room: one double bed, bar fridge, R680 / R612 / R544.
  - Triple Room: three single beds, bar fridge, R840 / R756 / R672.
- **Stay terms:** check-in 14:00, check-out 10:00, quiet hours 22:00–08:00, monthly rates from 28 nights.
- **Confirmed facilities:** private ensuite bathrooms, secure gated parking, CCTV and ADT armed response, WiFi, weekly cleaning, communal kitchenette / self-catering, company invoices.
- **Words not to use** unless specifically confirmed: "full kitchen", "24/7 security", "instant confirmation", "best-rate guarantee", "live-in caretaker", and unqualified promises about flexible arrival or vehicle/trailer capacity. Visa documentation is not promised.
- **Contractor volume pricing** is handled by private quote, not published.

## Brand Commitments

- Name: **60 on Kosmos**. The official logo is the one the site currently renders, the SVG in `components/logo.tsx` (house roof with "60"). It must be kept.
- Voice: plain, factual and practical. It states facts it can back up and avoids hype.

## Evidence on Hand

- Real photography in `public/images/`: room types (standard twin, deluxe twin, double, triple), ensuite bathrooms, exterior, courtyard, entrance, outdoor seating, and secure parking with CCTV.
- Genuine review listings: Booking.com (https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html) and Airbnb (https://www.airbnb.co.za/rooms/1055447623). Short guest quotes from Booking.com appear on the homepage.
- **Absences future work must not fill with invented content:** no fixed rating value or review count (link out to the platforms instead); no client logos, case studies or named corporate customers; no published contractor volume rates.

## Product Principles

1. **Direct contact is the goal.** Every surface should make calling, WhatsApping or enquiring easy and obvious, especially on mobile.
2. **Teams first, individuals welcome.** Lead with what a company housing a crew needs, without shutting out students, medical staff and other long-stay guests.
3. **Only confirmed facts.** Rates, facilities and reviews come from `lib/site-facts.ts` and the real listings. Never inflate or invent proof.
4. **Built to be found.** Landing pages, structured data and performance serve local search. Design changes must not damage SEO or loading speed.
5. **Practical over promotional.** Security, parking, cleaning, invoices and location are the selling points. Say them clearly.
