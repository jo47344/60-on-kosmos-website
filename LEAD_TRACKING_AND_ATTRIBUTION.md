# 60 on Kosmos — Lead Tracking & Attribution

The question this answers: **where did this guest find us, how did they contact us, and did that enquiry become a paying booking?**

The website can answer the first two. Only your own records (the Master Operations sheet) can answer the third, so the website gives every form enquiry a reference number (`WEB-261116-K7Q2`) that you copy into the sheet.

---

## 1. How it works (plain English)

1. **A visitor arrives.** The site notes how they arrived, in their own browser: a tagged link (Google Business Profile, Facebook, Instagram, an ad), a search engine, another website, or nothing (direct/unknown). It keeps the **first** and the **latest** known source for up to **90 days**, then deletes them automatically. No names, numbers or emails are stored.
2. **They contact you.**
   - **Form:** the enquiry email from Formspree now also contains the source, campaign, landing page, contact method, time and a **Lead ID**. Google Analytics records one `generate_lead`, only after Formspree confirms the enquiry was received.
   - **WhatsApp / phone / email button:** Google Analytics records `whatsapp_click`, `phone_click` or `email_click`, with which button was used and the visitor's source channel. A click is **not** a confirmed enquiry. The person may never send the message.
3. **You record the outcome** in the Enquiries tab (quote, booking, payment). Revenue comes only from the Bookings/Payments tabs, never from clicks or form counts.

### Channels the site recognises

| Channel | How it is recognised | Confidence |
|---|---|---|
| Google Business Profile | Tagged GBP link (recommended below); or a `maps.google.com` referrer | high / medium |
| Google Organic | Google search referrer | medium |
| Google Ads | Google Ads auto-tagging (`gclid`) or `utm_medium=cpc` | high |
| Facebook Organic / Facebook Ads | Tagged links (`utm_medium=social` vs `paid_social`), or a facebook.com referrer (organic) | high / medium |
| Instagram / Instagram Ads | Tagged links, or an instagram.com referrer | high / medium |
| Facebook / Instagram (unconfirmed) | Meta's `fbclid` with no referrer (the in-app browser hides which app) | low |
| Other Search | Bing, Yahoo, DuckDuckGo, Ecosia | medium |
| Referral | Any other website that links to you | medium |
| WhatsApp Share | Someone opened a link to your website from WhatsApp, where the app reveals it | medium |
| Email / Other Campaign | Tagged links with other sources | high |
| Direct / Unknown | No tag and no referrer: typed address, bookmark, many apps (including most links tapped inside WhatsApp chats), privacy tools | low |

**Important:** untagged Google Maps / Business Profile visits usually look identical to Google Search. **The tagged links in section 3 are what make GBP, Facebook and Instagram measurable.**

"Direct / Unknown" is reported honestly as unknown. It is never guessed.

---

## 2. Data sent with each form enquiry (Formspree)

Existing guest fields are unchanged. The original attribution fields are kept (`initial_landing_page`, `form_page`, `document_referrer`, `utm_*`, `gclid`, `fbclid`, …). New fields:

| Field | Example | Meaning |
|---|---|---|
| `lead_id` | WEB-261116-K7Q2 | Reference for this enquiry. Copy it into the sheet |
| `lead_channel` | Google Business Profile | Latest known channel (last non-direct visit) |
| `lead_source` / `lead_medium` | google / organic | Latest known source/medium |
| `lead_campaign` / `lead_content` / `lead_term` | google_business_profile / website_button | From UTM tags, if any |
| `source_confidence` | high / medium / low | How sure the source is (see table above) |
| `first_touch_channel` / `first_touch_source` / `first_touch_medium` / `first_touch_campaign` | Facebook Organic / facebook / social / facebook_page | How they **first** found you (within 90 days) |
| `first_touch_date` / `first_touch_landing_page` | 2026-11-02 / / | When, and where they first landed |
| `landing_page` | /rooms | First page of the visit in which they enquired |
| `enquiry_page` | /book-now | Page the form was on |
| `referrer` | www.google.com | Referring website (domain only) |
| `contact_method` | Website form – Book now | Which form |
| `enquiry_timestamp` | 2026-11-16 14:03 SAST | Time submitted |

A visitor who switched analytics off on the privacy page still sends their enquiry normally, but every source field is blank (`lead_channel = Unknown (no data)`).

---

## 3. Tracking links to use on your profiles

Use these exact links. Lowercase, underscores, no spaces. **You** make these changes on each platform; nothing has been changed on any external profile.

| Platform | Recommended link | Expected GA4 source / medium (default channel) | Where to update it |
|---|---|---|---|
| Google Business Profile — website button | `https://www.60onkosmos.co.za/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile&utm_content=website_button` | google / organic (Organic Search), campaign `google_business_profile` | business.google.com → your profile → Edit profile → Contact → Website |
| Google Business Profile — booking/appointment link (if used) | `https://www.60onkosmos.co.za/book-now?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile&utm_content=booking_link` | same | Edit profile → Contact → Appointment / booking links |
| Facebook page — website field | `https://www.60onkosmos.co.za/?utm_source=facebook&utm_medium=social&utm_campaign=facebook_page&utm_content=website_button` | facebook / social (Organic Social) | Facebook page → Edit page / About → Website |
| Facebook page — action button (if it points to the website) | `https://www.60onkosmos.co.za/book-now?utm_source=facebook&utm_medium=social&utm_campaign=facebook_page&utm_content=action_button` | facebook / social | Page → action button → Edit |
| Instagram profile link | `https://www.60onkosmos.co.za/?utm_source=instagram&utm_medium=social&utm_campaign=instagram_profile&utm_content=bio_link` | instagram / social (Organic Social) | Instagram → Edit profile → Links |
| WhatsApp Business profile website (optional) | `https://www.60onkosmos.co.za/?utm_source=whatsapp&utm_medium=social&utm_campaign=whatsapp_profile` | whatsapp / social | WhatsApp Business → Settings → Business tools → Business profile → Website |
| Future Facebook / Instagram ads | Destination: `https://www.60onkosmos.co.za/<page>` + **URL parameters** field: `utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}` | fb or ig / paid_social (Paid Social) | Meta Ads Manager → Ad → Destination → URL parameters. Name campaigns like `2026_12_contractor_teams` |
| Future Google Ads | Leave the final URL clean and turn on **auto-tagging** (adds `gclid`). Link Google Ads to GA4 | google / cpc (Paid Search) | Google Ads → Admin → Account settings → Auto-tagging; GA4 → Admin → Product links → Google Ads |

Rules: never put a person's name or number in a UTM. Don't tag internal links between pages of your own website, because that resets the source. Changing a live ad's URL can reset its learning phase, so change existing ads only when you're ready.

---

## 4. Google Analytics 4 measurement plan

| Event | Meaning | Level | Key event? |
|---|---|---|---|
| `page_view` | Viewed a page (automatic) | Traffic | No |
| `form_start` | First interaction with an enquiry form on a page | Micro-conversion | No |
| `form_submit_attempt` | Pressed submit (may fail validation or be rejected) | Micro-conversion | No |
| `whatsapp_click` | Tapped a WhatsApp button. Intent only, not a confirmed enquiry | Contact intent | **Yes** (report separately from leads) |
| `phone_click` | Tapped a phone link. Intent only | Contact intent | Yes (optional) |
| `email_click` | Clicked an email link | Contact intent | No |
| `generate_lead` | Form enquiry **confirmed received by Formspree** | **Lead** | **Yes (primary)** |
| *(booking)* | Confirmed paid booking | Revenue | Recorded in the sheet only, not in GA4 |

Event parameters (never personal data): `form_name`, `lead_id`, `contact_method`, `button_location` (e.g. `floating_widget`, `mobile_sticky_bar`, `header`, `page_body`, `footer`), `cta_text` (the button's own wording), `destination_type` (`whatsapp` / `phone` / `email`), `lead_channel`, `first_touch_channel`, `source_confidence`.

Double counting is prevented in code: one WhatsApp tap = one event even if two listeners see it; a retried form keeps the same Lead ID and is counted once; refreshing the thank-you state does not re-send.

### GA4 setup checklist (owner, in analytics.google.com, property for G-GE9K8ZZ7RL)

1. **Admin → Data streams → web stream → Enhanced measurement (gear):**
   - Page views → *Page changes based on browser history events*: **ON** (records moves between pages inside the site).
   - **Form interactions: OFF.** The site now sends its own `form_start`; leaving this on duplicates it.
2. **Admin → Events → Key events:** mark `generate_lead` and `whatsapp_click` (optionally `phone_click`). The events must have fired at least once to appear; or create them by name in Admin → Key events → New key event.
3. **Admin → Custom definitions → Create custom dimension** (scope: Event), one each: `form_name`, `lead_id`, `contact_method`, `button_location`, `cta_text`, `destination_type`, `lead_channel`, `first_touch_channel`, `source_confidence`. If you created `link_location` earlier, it is replaced by `button_location` and can be archived.
4. **Admin → Data collection and modification → Data retention:** set event data retention to **14 months**.
5. Optional: link **Google Search Console** (Admin → Product links) and, if you advertise, **Google Ads**.
6. Test with **Admin → DebugView** while using Google Tag Assistant (tagassistant.google.com) on the live site.

### Where you'll see the answers
- **Reports → Acquisition → Traffic acquisition**, filter or add the key events column → which channels bring visitors who click WhatsApp or submit forms.
- **Explore → Free form:** rows `lead_channel`, columns `Event name`, values `Event count`, filter events to `generate_lead`, `whatsapp_click`.
- **Each Formspree email** shows the source of that specific enquiry.

---

## 5. Linking enquiries to bookings — Master Operations sheet

The sheet was inspected read-only on 16 Nov 2026. It already has **Enquiries** (Lead, Customer, Requested start, Requested end, People, Stage, Next action, Notes), **Bookings** (Booking ID, …, Booking value R, …) and **Payments**. So the recommendation is to **extend the existing tabs, not create a duplicate lead list**. Nothing has been changed in the sheet; this needs your approval.

**Proposed new columns at the end of `Enquiries`:**

| Column | Values |
|---|---|
| Enquiry date | 2026-11-16 |
| Website Lead ID | WEB-261116-K7Q2 (blank for non-website enquiries) |
| Contact method | Website form – Book now / WhatsApp / Phone / Email / Walk-in / Booking.com / Airbnb / LekkeSlaap / Referral |
| Discovery source | Same names as the channel table, plus "Repeat guest", "Word of mouth", "Booking.com" … |
| Source confidence | Tracked (from form) / Guest said / Assumed / Unknown |
| Campaign | from `lead_campaign` |
| Landing page | from `landing_page` |
| Quoted amount R | number |
| Booking ID | link to the Bookings tab once confirmed |

Lead status = the existing **Stage** column. Customer, dates, people and notes are already there.

**Proposed new column in `Bookings`:** `Lead` (the Enquiries Lead value), so each booking traces back to its enquiry and source. Revenue stays in Bookings/Payments.

**Optional `Marketing Summary` tab** (formulas only, no new data): per discovery source → number of enquiries, quotes sent, confirmed bookings, confirmed booking value, and bank-verified value. Website visits, WhatsApp clicks, form submissions and quotes are never counted as revenue. Only bookings with a confirmed status count as booking value, and only Payments marked bank-verified count as cash.

**Getting form enquiries into the sheet (free / low-cost options):**
1. *Now, free:* copy the Lead ID, channel, campaign and landing page from the Formspree email when you log the enquiry.
2. *Free, automated:* a small Google Apps Script that reads Formspree notification emails in Gmail and appends rows to a separate "Website leads (raw)" tab. It needs your approval and a test with a real Formspree email. Can be built next.
3. *Formspree's Google Sheets plugin:* check whether your Formspree plan includes it before relying on it.

---

## 6. WhatsApp attribution — limitations

- A `whatsapp_click` means someone **opened** WhatsApp from the site. It does not prove they sent a message, and it never counts as a lead or a booking.
- The website **cannot** read WhatsApp conversations, and it cannot automatically link a WhatsApp chat to a website visit. Doing that automatically needs the WhatsApp Business **API** through a provider or CRM (usually paid). Not implemented; would need your approval.
- WhatsApp is recorded as the **contact method**, not the discovery source. GA4 still shows how that visitor found the site.
- **Free ways to close the gap:**
  1. Ask every new WhatsApp contact "How did you find us?" (a WhatsApp Business greeting message can do this) and record it with confidence "Guest said".
  2. *Optional, needs your approval:* add a short reference code to the pre-filled WhatsApp message (e.g. "Ref W7K3"), also recorded in GA4. When a guest sends it, you could look up their source. Not implemented, because it changes the message guests see and they can delete it.
- Pre-filled WhatsApp messages differ by page (contractor, team, general booking). They were deliberately not changed. Standardising them is a content change for your approval.

---

## 7. Privacy (POPIA)

- **No personal data goes to Google Analytics.** No names, phone numbers, emails, dates or messages. Tests confirm this, including the Book Now WhatsApp link, whose URL contains the guest's typed details.
- Attribution storage holds marketing context only and expires after **90 days**. No fingerprinting.
- The privacy policy has been updated: it no longer says analytics are "once enabled", it describes source tracking and retention, and it has an **analytics on/off switch**. Switching it off stops GA4 (Google's official `ga-disable` flag), deletes the GA cookies and clears stored attribution. Enquiries still work.
- No API keys or secrets are in the website code. The Formspree form ID is public by design.
- **Consent model is an owner decision** (see the PR / handover): currently notice + opt-out. An opt-in banner can be added; it is more conservative but will hide a large share of visitors from GA4.

---

## 8. Deployment checklist

1. Review the pull request and preview deployment (Vercel builds a preview automatically).
2. Approve; merge to `main`. Vercel deploys production automatically (project `v0-vo-ai-website-prompt` serves www.60onkosmos.co.za).
3. Confirm the production deployment shows **READY** in Vercel.
4. On the live site, with Tag Assistant connected: open a tagged link (e.g. the Facebook link above) → tap a WhatsApp button → check DebugView shows `whatsapp_click` with `lead_channel = Facebook Organic`.
5. Send **one** real test enquiry marked "TEST — please ignore". Check the Formspree email contains `lead_id` and `lead_channel`, and that DebugView shows exactly one `generate_lead` with the same `lead_id`.
6. Complete the GA4 checklist (section 4) and update profile links (section 3).
7. Rollback if needed: Vercel → Deployments → previous production deployment → Promote / Instant Rollback.
