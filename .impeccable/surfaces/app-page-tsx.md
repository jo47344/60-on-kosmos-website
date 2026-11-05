---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: Homepage (site-office spec sheet)

Confirmed with the owner via /impeccable shape. Code-led (no image generation).

## Scope and mode
- Target: `app/page.tsx` only. Mode: Persuade (earn contact with plain, confident facts).
- Unchanged: URL, metadata, LocalBusiness schema, nav, footer, sticky mobile bar, WhatsApp widget (CTA cleanup belongs to the later `distill` step).

## Audience and job
- Primary: site manager or office administrator, often on desktop at work, booking a crew of 3-9 people for weeks or months. Needs: what fits the crew, nightly and monthly cost, safety for people and vehicles, how to book and pay on invoice.
- Secondary: students (UWC/CPUT), Tygerberg medical staff, individual guests; must find their own pages quickly.
- Success: any direct contact (call, WhatsApp, team quote).

## Direction
Visual world unchanged (DESIGN.md). Structure becomes a site office's info sheet: one table holds the facts, one place to make contact, nothing repeated. Focal moment: the rooms, beds and rates table.

## Sequence
1. Split hero: H1 + subhead + "Get a team quote" + Call/WhatsApp pair (Contact Green only on those); facts line "4 rooms · 9 beds · up to 9 guests · from R464/night on monthly stays"; contained `main-entrance.png` at native scale, no stretched full-bleed photo.
2. Rooms, beds and rates table replacing room cards: per room a small photo, beds, bar fridge yes/no, nightly ("from"), weekly (7-27 nights), monthly (28+ nights). Total row: 4 rooms · 9 beds. No whole-property price total (owner declined). Mobile: stacked blocks with the same facts. Real <table> with headers on desktop.
3. On site: one section merging trust strip, sage info band, amenities icons and security repeats. Gated parking, CCTV, ADT armed response, "confirm trailers with us" (no vehicle count); WiFi, weekly cleaning, communal kitchenette, check-in 14:00 / check-out 10:00. Small parking/CCTV photo.
4. How booking works (charcoal band, replaces team band and closing CTA): (1) WhatsApp or call with dates and team size; (2) quotes usually go out the same day; (3) EFT only, refundable deposit may apply, invoices on request. Contact buttons beside the terms.
5. Guest reviews: named Booking.com quotes + links to Booking.com and Airbnb listings; no rating number.
6. Also staying with us: compact links for students, Tygerberg staff, individual guests.
7. Latest blog posts: kept, tighter.
8. FAQ: only questions not answered above; FAQPage JSON-LD matches visible questions exactly.

## Removed
Gradient trust strip, sage info band, amenities icon row, audience trio and "MOST POPULAR", closing "Ready for..." section, repeated "Monthly rates for 28+ nights", unconfirmed "Premium linens", "Premium bedding", "Best value".

## Constraints
- Every figure from `lib/site-facts.ts`; prices keep "From" (rates can vary; quote confirms).
- Capacity is 9 guests (owner-confirmed): update `capacity.maxGuests` to 9 in this build; the 13 other pages saying "up to 8" are swept in the later `harden` step.
- Text contrast >= 4.5:1; sage text uses #5a7261. Search-relevant facts stay as text.

## Open decisions
None.
