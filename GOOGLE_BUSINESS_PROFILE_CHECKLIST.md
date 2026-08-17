# Google Business Profile Manual Checklist for 60 on Kosmos

This is a manual checklist — none of it can be done from the codebase or
deployed automatically. It has to be done by hand in the Google Business
Profile dashboard.

---

## 1. Business Information Accuracy

1. Go to [Google Business Profile](https://business.google.com/) and select
   the 60 on Kosmos listing.
2. Confirm these match the site exactly (source of truth: `public/llms.txt`
   and `components/local-business-schema.tsx`):
   - **Name:** 60 on Kosmos
   - **Address:** 60 Kosmos Street, Bellville South, Cape Town, 7530, South
     Africa
   - **Phone:** +27 74 524 5703 (this is the only number the site uses —
     confirm the listing doesn't show an old or different number)
   - **Website:** https://www.60onkosmos.co.za
   - **Category:** Guest house / Lodging (primary), with Bed & Breakfast or
     Extended Stay Hotel as secondary categories if available
3. If the phone number, address, or website URL on the live listing differs
   from the above, correct it in the dashboard — Google flags mismatches
   between GBP and on-site NAP (name/address/phone) data, which hurts local
   ranking.

## 2. Hours

- Set hours to reflect actual check-in/check-out availability
  (check-in 14:00, check-out 10:00 per the site), or mark as "Open 24 hours"
  if guests can check in/out at any time with prior arrangement — confirm
  which is operationally accurate before setting.

## 3. Photos

- Upload current exterior and room photos matching what's live on
  `/virtual-tour` and `/rooms` — stale or mismatched photos are a common
  cause of guest complaints and lower conversion from the listing.
- Remove any outdated photos of rooms that have since been redecorated or
  renamed (e.g. old room names/colors that no longer match the current
  Standard Twin / Deluxe Twin / Double / Triple lineup).

## 4. Reviews

- Confirm the current review count and average rating on the live listing.
  The site's structured data currently states **4.8 stars, 25 reviews**
  (`components/local-business-schema.tsx`) — this needs to be checked
  against the actual Google listing and updated in the code if it no longer
  matches. This could not be verified from this environment (no live web
  access) and should not be trusted as current without confirming it against
  the real listing first.
- Respond to any unanswered reviews, especially recent ones — response rate
  and recency are ranking factors.

## 5. Services / Attributes

- Add or confirm attributes relevant to contractor and long-stay guests:
  free WiFi, free parking, self-catering/kitchen access, security cameras.
- Do not add attributes the property can't actually guarantee (e.g. don't
  mark "accessible" unless verified, don't promise amenities not on the
  site).

## 6. Posts

- Consider a monthly GBP Post highlighting monthly/contractor rates or a
  seasonal note, linking to `/monthly-accommodation` or
  `/contractor-accommodation`. This is optional marketing upkeep, not a
  one-time fix.

## 7. Q&A Section

- Review the public Q&A tab on the listing for outdated or incorrect
  guest-submitted answers (e.g. about parking, kitchen access, or pricing)
  and correct them as the business owner — this is publicly visible and
  often ranks in search snippets.

## 8. Duplicate Listings

- Search Google Maps for "60 on Kosmos" and confirm there is only one
  active listing. Duplicate or old listings (e.g. from a previous
  name/address) actively hurt ranking and confuse guests — request removal
  of any duplicates via Google's "Suggest an edit" or duplicate-reporting
  flow.

## 9. Website Link Consistency

- Confirm the "Website" link on the GBP listing points to
  `https://www.60onkosmos.co.za` (the canonical www domain used site-wide),
  not the bare domain or an old URL.

---

**None of the above can be verified or changed from this repository or
deployment — they require direct access to the Google Business Profile
dashboard for 60 on Kosmos.**
