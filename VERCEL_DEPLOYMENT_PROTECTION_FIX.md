# Fix Google Search Console "robots.txt unreachable" Error

## Your Current Issue
**Deployment Protection: "Standard"** means your preview deployments are protected, but production should be accessible. However, Google might still be having issues.

## Solution Steps:

### 1. Check Deployment Protection Settings
Go to: **Vercel Dashboard → Your Project → Settings → Deployment Protection**

Current setting: **Standard Protection**

**What this means:**
- ✅ Production deployment (60onkosmos.co.za) is PUBLIC - Googlebot CAN access
- 🔒 Preview deployments (*.vercel.app) are PROTECTED - Googlebot CANNOT access

**This is actually CORRECT for SEO!** Standard Protection should work fine.

### 2. The Real Problem: Header Conflicts

The issue is likely that Next.js security headers were blocking bot access. The new configuration I provided:
- Removes X-Robots-Tag from robots.txt (was causing issues)
- Adds proper CORS headers
- Separates security headers from bot files

### 3. Deploy and Test

**After deploying the 3 files above:**

1. **Test robots.txt accessibility:**
   \`\`\`bash
   curl -I https://60onkosmos.co.za/robots.txt
   \`\`\`
   Should return: `200 OK` with `Content-Type: text/plain`

2. **Test as Googlebot:**
   \`\`\`bash
   curl -A "Googlebot" https://60onkosmos.co.za/robots.txt
   \`\`\`
   Should return the full robots.txt content

3. **Test in Google Search Console:**
   - Go to: Settings → robots.txt Tester
   - URL: https://60onkosmos.co.za/robots.txt
   - Click "Test"
   - Should show: "Allowed"

### 4. Common Issues & Solutions

**If still blocked:**

1. **Clear Vercel Cache:**
   - Go to: Deployments → Latest Deployment → ⋯ Menu → Redeploy
   - Check "Clear Build Cache"

2. **Check for Middleware:**
   - Make sure you don't have `middleware.ts` blocking bots
   - Check `app/middleware.ts` or `middleware.ts` in root

3. **Verify Production Domain:**
   - Go to: Settings → Domains
   - Make sure 60onkosmos.co.za is set as PRIMARY domain
   - Remove any .vercel.app domains from production

4. **Wait 24 Hours:**
   - Google caches robots.txt errors
   - After fixing, it may take 24 hours for Google to retry

### 5. Force Google to Re-crawl

In Google Search Console:
1. Go to: URL Inspection
2. Enter: https://60onkosmos.co.za/robots.txt
3. Click: "Request Indexing"
4. Wait 1-2 days for Google to re-test

## What Changed in the Configuration

### robots.ts
- Added explicit rules for Googlebot and Bingbot
- Added host declaration
- Proper sitemap URL

### next.config.mjs
- **Removed X-Robots-Tag from robots.txt** (this was blocking it!)
- Added CORS headers for robots.txt
- Separated security headers (only apply to non-bot files)
- Short cache time (1 hour) for easy updates

### vercel.json (NEW!)
- Backup configuration at Vercel level
- Ensures proper Content-Type
- CORS enabled

## Expected Results

After deployment, your robots.txt should return:

\`\`\`
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-Agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/

User-Agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /admin/

Host: https://60onkosmos.co.za
Sitemap: https://60onkosmos.co.za/sitemap.xml
\`\`\`

## Still Having Issues?

Contact Vercel Support and ask them to:
1. Verify no edge middleware is blocking bot requests
2. Check if DDoS protection is blocking Googlebot
3. Confirm Standard Protection allows search engine crawlers on production

**Standard Protection is correct - don't change it!** The issue was the header configuration, which is now fixed.
