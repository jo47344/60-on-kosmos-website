# Vercel Configuration Checklist for Google Search Console

## 1. Vercel Dashboard Settings to Check

### Project Settings → General
- ✅ **Build & Development Settings**
  - Framework Preset: Next.js
  - Build Command: `next build`
  - Output Directory: `.next`
  - Install Command: `npm install` or `yarn install`

### Project Settings → Security
- ✅ **Deployment Protection**: Should be **DISABLED** or set to allow search engines
- ✅ **Password Protection**: Should be **DISABLED** (blocks Googlebot)
- ✅ **Trusted IPs**: Should be **EMPTY** (or explicitly allow Googlebot IPs)

### Project Settings → Edge Network
- ✅ **Edge Functions**: Ensure no edge functions block user agents
- ✅ **Edge Middleware**: Check if middleware.ts blocks bots (you shouldn't have one)

### Domains
- ✅ **Primary Domain**: 60onkosmos.co.za
- ✅ **HTTPS**: Should be automatically enabled
- ✅ **Redirect www to non-www** (or vice versa) - consistency is key

## 2. Files to Deploy

After pushing these files to your repository:
1. `app/robots.ts` - Generates /robots.txt
2. `next.config.mjs` - Configuration with proper headers
3. `vercel.json` - Additional Vercel-specific configuration

## 3. Testing After Deployment

### Test 1: Browser Access
\`\`\`bash
# Test robots.txt
https://60onkosmos.co.za/robots.txt

# Should return:
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://60onkosmos.co.za/sitemap.xml
Host: https://60onkosmos.co.za
\`\`\`

### Test 2: cURL Test (simulates Googlebot)
\`\`\`bash
curl -A "Googlebot" https://60onkosmos.co.za/robots.txt
\`\`\`

### Test 3: Check Response Headers
\`\`\`bash
curl -I https://60onkosmos.co.za/robots.txt
\`\`\`

Should return:
\`\`\`
HTTP/2 200
content-type: text/plain
cache-control: public, max-age=3600, must-revalidate
access-control-allow-origin: *
\`\`\`

## 4. Google Search Console Steps

### Step 1: Test robots.txt
1. Go to Google Search Console
2. Navigate to: **Settings** → **robots.txt**
3. Click **"Test live robots.txt"**
4. Should show: ✅ "Accessible"

### Step 2: Request Re-crawl
1. Go to **URL Inspection**
2. Enter: `https://60onkosmos.co.za/robots.txt`
3. Click **"Test live URL"**
4. Click **"Request indexing"**

### Step 3: Submit Sitemap
1. Go to **Sitemaps**
2. Add: `https://60onkosmos.co.za/sitemap.xml`
3. Click **"Submit"**

## 5. Common Issues & Solutions

### Issue: "robots.txt unreachable" in Google Search Console

**Solutions:**
1. ✅ Check Vercel Deployment Protection is OFF
2. ✅ Check no password protection is enabled
3. ✅ Verify domain is correctly configured (no redirects blocking bots)
4. ✅ Check no middleware.ts file blocks user agents
5. ✅ Wait 24-48 hours after deployment for DNS propagation

### Issue: 403 Forbidden Error

**Likely Causes:**
- Vercel Deployment Protection is ON
- Password protection is enabled
- IP restrictions in place
- Edge middleware blocking bots

**Solution:**
Go to Vercel Dashboard → Settings → Security and disable all protections

### Issue: 404 Not Found

**Likely Causes:**
- Build didn't complete successfully
- File not properly generated

**Solution:**
1. Check Vercel deployment logs
2. Verify `app/robots.ts` exists in your repository
3. Redeploy the project

## 6. Verification Commands

Run these after deployment:

\`\`\`bash
# Test as Googlebot
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://60onkosmos.co.za/robots.txt

# Test as Bingbot
curl -A "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" \
  https://60onkosmos.co.za/robots.txt

# Test response headers
curl -I https://60onkosmos.co.za/robots.txt

# Test sitemap
curl https://60onkosmos.co.za/sitemap.xml
\`\`\`

## 7. Expected Results

✅ **robots.txt should:**
- Return HTTP 200 status
- Have Content-Type: text/plain
- Be accessible without authentication
- Return proper text content (not HTML, not JSON)

✅ **Google Search Console should show:**
- "robots.txt is accessible"
- No errors in Coverage report
- Sitemap successfully submitted
- Pages being discovered and indexed

## 8. Timeline

- **Immediately after deployment**: Test robots.txt in browser
- **Within 1 hour**: Google may re-crawl automatically
- **Within 24 hours**: Request indexing in GSC
- **Within 3-7 days**: See improvements in GSC coverage

## 9. Contact Vercel Support If Needed

If robots.txt is still unreachable after following all steps:
1. Go to Vercel Dashboard
2. Click "Help" in bottom-right
3. Describe issue: "Googlebot cannot access robots.txt"
4. Provide:
   - Your domain: 60onkosmos.co.za
   - Error message from Google Search Console
   - Screenshot of Vercel deployment logs

## 10. Final Checks

- [ ] vercel.json uploaded and deployed
- [ ] app/robots.ts uploaded and deployed
- [ ] next.config.mjs updated and deployed
- [ ] Deployment Protection DISABLED
- [ ] Password Protection DISABLED
- [ ] robots.txt accessible in browser
- [ ] robots.txt accessible via curl as Googlebot
- [ ] sitemap.xml accessible
- [ ] Submitted to Google Search Console
- [ ] Requested re-crawl in GSC

---

**Need Help?** If you're still experiencing issues after 48 hours, reply with:
1. Screenshot of Google Search Console error
2. Output of: `curl -I https://60onkosmos.co.za/robots.txt`
3. Screenshot of Vercel Security settings
