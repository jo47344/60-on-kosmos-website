# Google Analytics 4 Setup Guide

## 🎯 Overview
This guide will help you set up Google Analytics 4 (GA4) for your 60 on Kosmos Guesthouse website to track visitor behavior and conversions.

---

## 📋 Step 1: Create Google Analytics 4 Property

1. **Go to Google Analytics**: https://analytics.google.com
2. **Sign in** with your Google account
3. **Create a Property**:
   - Click "Admin" (bottom left)
   - Click "+ Create Property"
   - Property name: `60 on Kosmos Guesthouse`
   - Time zone: `South Africa`
   - Currency: `South African Rand (ZAR)`
4. **Enter Business Details**:
   - Industry: `Travel & Hospitality`
   - Business size: `Small (1-10 employees)`
   - Click "Next"
5. **Set Business Objectives**:
   - Select "Generate leads"
   - Click "Create"

---

## 📋 Step 2: Get Your Measurement ID

1. After creating the property, you'll see **"Web" stream setup**
2. Click "Web"
3. Enter:
   - Website URL: `https://60onkosmos.co.za`
   - Stream name: `60 on Kosmos Website`
4. Click "Create stream"
5. **Copy your Measurement ID** (looks like `G-XXXXXXXXXX`)

---

## 📋 Step 3: Add Measurement ID to Your Website

### Option A: Using Vercel Environment Variables (Recommended)

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your measurement ID (e.g., `G-XXXXXXXXXX`)
   - **Environment**: Production, Preview, Development
5. Click "Save"
6. **Redeploy your site** for changes to take effect

### Option B: Using Local `.env.local` File

1. Create a file named `.env.local` in your project root
2. Add this line:
   \`\`\`
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   \`\`\`
3. Replace `G-XXXXXXXXXX` with your actual measurement ID
4. Restart your development server

---

## 📋 Step 4: Verify Tracking is Working

1. **Deploy your website** with the new environment variable
2. **Visit your website** in an incognito/private browser window
3. Go back to Google Analytics
4. Click "Reports" → "Realtime"
5. You should see **yourself as an active user** within 30 seconds

---

## 📊 Custom Events We're Tracking

Your website now tracks these important conversion events:

### 🎯 Engagement Events
- `phone_click` - When users click to call
- `whatsapp_click` - When users click WhatsApp button
- `book_now_click` - When users click "Book Now"
- `external_link_click` - When users click external links
- `view_room` - When users view room details

### 💰 Conversion Events
- `booking_request` - When users submit booking form
- `newsletter_signup` - When users subscribe to newsletter

### 📍 Event Parameters
Each event includes:
- `event_category` - Type of interaction
- `event_label` - Specific location/source
- `value` - Conversion value (for prioritization)

---

## 📋 Step 5: Set Up Conversion Goals

1. In Google Analytics, go to **Admin** → **Events**
2. Mark these as **conversions**:
   - ✅ `booking_request` (highest priority)
   - ✅ `newsletter_signup`
   - ✅ `phone_click`
   - ✅ `whatsapp_click`

---

## 📈 Recommended Reports to Check Weekly

### 1. **Acquisition Report**
- Shows where your visitors come from
- **Path**: Reports → Acquisition → Traffic acquisition
- **What to look for**: Which channels bring the most bookings

### 2. **Engagement Report**
- Shows how visitors interact with your site
- **Path**: Reports → Engagement → Pages and screens
- **What to look for**: Which pages convert best

### 3. **Conversions Report**
- Shows booking requests and signups
- **Path**: Reports → Monetization → Conversions
- **What to look for**: Conversion rate trends

### 4. **Realtime Report**
- Shows current visitors
- **Path**: Reports → Realtime
- **What to look for**: Verify tracking is working

---

## 🔧 Troubleshooting

### "I don't see any data"
1. Make sure you deployed with the environment variable
2. Check that the Measurement ID is correct (starts with `G-`)
3. Wait up to 24 hours for data to appear in standard reports
4. Use Realtime report for immediate verification

### "Events aren't showing up"
1. Clear your browser cache
2. Check browser console for JavaScript errors
3. Make sure ad blockers aren't blocking GA
4. Test in an incognito window

### "Need help?"
- Google Analytics Help: https://support.google.com/analytics
- Test if tracking works: Chrome extension "Google Analytics Debugger"

---

## 🎓 Next Steps

Once tracking is working:
1. **Let it collect data for 2 weeks** to get baseline metrics
2. **Compare conversion rates** between different pages
3. **Test different CTAs** and measure performance
4. **Set up Google Ads** with conversion tracking
5. **Create custom audiences** for remarketing

---

## 📞 Questions?

If you need help setting this up, contact:
- **Vercel Support**: https://vercel.com/help
- **Google Analytics Support**: https://support.google.com/analytics
