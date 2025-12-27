# 60 on Kosmos - Contractor & Student Accommodation Website

Production-ready Next.js 14 website for 60 on Kosmos guesthouse in Bellville South, Cape Town. Optimized for contractor bookings, student accommodation, and high Google rankings.

## Business Focus

**Primary Target:** Contractors needing monthly accommodation in Bellville
**Secondary Targets:** UWC/CPUT students, Tygerberg Hospital medical staff, corporate relocations

## Complete Site Structure

### Pages (40 Total)

**Core Pages (10):**
- `/` - Homepage with room showcase
- `/rooms` - Full room details and pricing
- `/amenities` - Facility features
- `/virtual-tour` - Photo gallery with video support
- `/book-now` - Booking form
- `/pricing` - Transparent pricing with contractor quotes
- `/contact` - Contact information with map
- `/faq` - General FAQs
- `/student-faq` - Student-specific FAQs
- `/thank-you` - Booking confirmation

**Priority SEO Landing Pages (6):**
- `/uwc-student-accommodation` - UWC-focused page
- `/cput-accommodation` - CPUT-focused page
- `/tygerberg-hospital-accommodation` - Medical staff accommodation
- `/monthly-accommodation` - Long-term stays
- `/self-catering-rooms` - Self-catering features
- `/contractor-accommodation` - Main contractor page

**Location-Specific Pages (13):**
- `/near-uwc-bellville` - Near UWC with distances
- `/near-cput-bellville` - Near CPUT with distances
- `/contractor-accommodation-bellville`
- `/contractor-accommodation-bellville-south`
- `/monthly-accommodation-bellville`
- `/monthly-accommodation-bellville-south`
- `/self-catering-accommodation-bellville`
- `/serviced-accommodation-bellville`
- `/extended-stay-hotel-bellville`
- `/accommodation-near-tygerberg-hospital`
- `/accommodation-near-bellville-station`
- `/bellville-south-guesthouse`
- `/backpackers-bellville-south`
- `/cheap-accommodation-bellville-south`

**Content Pages (7):**
- `/special-offers` - Seasonal promotions
- `/testimonials` - Customer reviews
- `/local-info` - Area information
- `/things-to-do-bellville-south` - Local attractions
- `/blog` - Blog index
- `/blog/international-student-housing-uwc`
- `/blog/corporate-relocation-cape-town`
- `/blog/digital-nomad-guide-bellville-south`
- `/blog/medical-staff-guide-tygerberg-hospital`
- `/blog/nursing-student-accommodation-tygerberg`

### Components (25 Total)

**Conversion-Focused:**
- `booking-form.tsx` - Main booking form
- `booking-widget.tsx` - Floating booking widget
- `contractor-quote-form.tsx` - Private contractor pricing requests
- `cta-section.tsx` - Call-to-action blocks (3 variants)
- `whatsapp-widget.tsx` - Floating WhatsApp chat
- `sticky-mobile-cta.tsx` - Mobile action bar

**Display Components:**
- `room-card.tsx` - Room display with "From R[amount]" pricing
- `pricing-table.tsx` - Full pricing comparison
- `testimonial-card.tsx` - Customer reviews
- `faq-accordion.tsx` - Searchable FAQ with categories
- `trust-badges.tsx` - Security and trust signals
- `latest-blog-posts.tsx` - Blog post previews

**Navigation:**
- `navigation.tsx` - Desktop/mobile header with dropdowns
- `footer.tsx` - Footer with internal linking
- `breadcrumb-schema.tsx` - Breadcrumb structured data

**SEO & Tracking:**
- `local-business-schema.tsx` - LocalBusiness structured data
- `room-schema.tsx` - Product schema for rooms
- `faq-schema.tsx` - FAQ structured data
- `structured-data.tsx` - General schema markup
- `conversion-tracking.tsx` - Automatic event tracking
- `google-analytics.tsx` - GA4 integration
- `performance-optimizations.tsx` - Core Web Vitals

**Utilities:**
- `blog-share-buttons.tsx` - Social sharing
- `theme-provider.tsx` - Theme management

## Room Types & Accurate Amenities

**Standard Twin Room (Budget)**
- 2 single beds
- Shared bathroom
- NO bar fridge
- From R530/night

**Double Room (Most Popular)**
- 1 double bed
- En-suite bathroom
- Bar fridge
- Microwave
- From R650/night

**Deluxe Twin Room (Premium)**
- 2 single beds
- En-suite bathroom
- Bar fridge
- From R700/night

**Triple Room (Family/Groups)**
- 3 single beds
- En-suite bathroom
- Bar fridge
- From R850/night

## Technical Stack

- **Framework:** Next.js 14.2.35 (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **TypeScript:** Full type safety
- **Icons:** Lucide React
- **Forms:** React Hook Form with validation
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel

## SEO Implementation

### Sitemap
- Dynamic XML sitemap at `/sitemap.xml`
- 40 pages prioritized by conversion value
- Weekly update frequency for priority pages
- Proper priority scores (1.0 for homepage, 0.95 for conversion pages)

### Robots.txt
- Clean robots.txt at `/robots.txt`
- Allows all crawlers
- Points to sitemap

### Structured Data
- LocalBusiness schema on all pages
- Product schema for room types
- FAQ schema for FAQ pages
- Breadcrumb schema for navigation
- 4.8 star rating (based on real reviews)

### Metadata
- Unique title and description on every page
- Canonical URLs on all pages
- Open Graph tags for social sharing
- Proper heading hierarchy (H1, H2, H3)

### Internal Linking
- Footer links to all priority pages
- Navigation dropdown for Students section
- Breadcrumbs on key pages
- Related pages section on landing pages

### Technical SEO
- www → non-www 301 redirects
- Mobile-responsive design
- Fast loading (optimized images)
- Core Web Vitals optimized
- Semantic HTML (main, header, nav, footer)
- Proper alt text on all images

## Conversion Tracking

Automatic tracking for:
- Phone number clicks
- WhatsApp clicks
- Email clicks
- Booking form submissions
- Quote form submissions
- External link clicks

Events sent to Google Analytics 4 for conversion optimization.

## Pricing Strategy

**Public Pricing:**
- Shows "From R530" for transparency
- Clear amenity differences between room types
- Weekly and monthly discounts mentioned (no percentages)

**Contractor Pricing:**
- Private quote system (not public)
- Dedicated contractor quote form
- Email notifications for quote requests
- Emphasis on volume discounts

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Vercel account (for deployment)
- Google Analytics 4 property ID

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create environment variables (if needed):
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Run development server:
```bash
npm run dev
```

5. Open http://localhost:3000

### Deployment to Vercel

1. Click "Publish" in v0 interface, or
2. Connect GitHub repo to Vercel
3. Deploy with default settings
4. Add custom domain: 60onkosmos.co.za
5. Set non-www as preferred domain in Vercel settings

### Post-Deployment Checklist

**Verify Technical:**
- [ ] Site loads at https://60onkosmos.co.za
- [ ] www redirects to non-www
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] WhatsApp widget appears on all pages
- [ ] Mobile navigation works
- [ ] Booking forms submit correctly

**Google Search Console:**
- [ ] Add property for 60onkosmos.co.za
- [ ] Set non-www as preferred domain
- [ ] Submit sitemap: https://60onkosmos.co.za/sitemap.xml
- [ ] Request indexing for priority pages:
  - /contractor-accommodation
  - /uwc-student-accommodation
  - /cput-accommodation
  - /tygerberg-hospital-accommodation
  - /monthly-accommodation
  - /self-catering-rooms
- [ ] Verify no coverage errors
- [ ] Check Core Web Vitals (should be green)
- [ ] Monitor indexing progress (7-14 days)

**Google Analytics:**
- [ ] Add GA4 property
- [ ] Install measurement ID in environment variables
- [ ] Verify events tracking (phone clicks, WhatsApp, forms)
- [ ] Set up conversion goals for bookings

**Business Listings:**
- [ ] Update Google My Business with website
- [ ] Add to local directories (Gumtree, Property24)
- [ ] Share pages on social media
- [ ] Reach out to UWC/CPUT student forums

## Key Features for Contractors

1. **Clear Pricing:** No hidden costs, transparent "From R530" pricing
2. **Private Quotes:** Dedicated form for bulk/long-term pricing
3. **Location Benefits:** Near major construction areas in Bellville
4. **Monthly Rates:** Significant discounts for 30+ day stays
5. **Self-Catering:** Kitchen facilities to save money
6. **Free Parking:** Secure on-site parking
7. **Free WiFi:** High-speed internet included
8. **Weekly Cleaning:** Housekeeping service included

## Contact Information

**60 on Kosmos Guesthouse**
60 Kosmos Street, Bellville South
Cape Town, 7530, South Africa

Phone: +27 21 948 8314
WhatsApp: +27 21 948 8314
Email: info@60onkosmos.co.za

## Support

For technical issues or questions:
1. Check Google Search Console for indexing issues
2. Review Vercel deployment logs
3. Test sitemap and robots.txt accessibility
4. Verify all environment variables are set

## License

Proprietary - © 2025 60 on Kosmos. All rights reserved.
