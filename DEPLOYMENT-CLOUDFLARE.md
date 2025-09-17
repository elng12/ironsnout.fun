# Deployment Guide – Cloudflare Settings for ironsnout.fun

Last Updated: 2025-09-16

Purpose
- Ensure Google Search can consistently fetch sitemap.xml and pages over HTTPS.
- Prevent regressions caused by Cloudflare config changes.

Required Settings (Cloudflare Dashboard)
1) SSL/TLS → Overview
- Encryption mode: Full (strict)
  Why: Avoid Flexible/Full which may proxy HTTPS to HTTP origin and cause HTTPS issues in GSC.

2) SSL/TLS → Edge Certificates
- Always Use HTTPS: ON (force HTTP→HTTPS with a single 301)
- Automatic HTTPS Rewrites: ON
- HTTP Strict Transport Security (HSTS): ON (recommended)
  - max-age: 15552000 (180 days) or longer
  - includeSubDomains: optional (enable only if all subdomains support HTTPS)
  - preload: optional (understand implications before enabling)

3) Rules (optional but recommended)
- Redirect canonical host if needed (e.g., www → root or root → www).
- Keep redirects to a single 301 hop.

4) Caching
- Purge cache after changing SSL/HSTS/redirect rules.
- Respect origin headers. For static XML (sitemap.xml), a modest cache (e.g., 1 hour) is ok.

5) Security/WAF
- Do NOT challenge/JS-check Googlebot. If you must restrict traffic, allowlist verified Googlebot:
  - Verify reverse DNS per Google’s guidance.
- Disable aggressive bot fight modes for /sitemap.xml and /robots.txt if issues occur.

Origin Server (if self-hosted)
- Serve correct MIME for XML:
  - Content-Type: application/xml; charset=utf-8
- Provide full certificate chain (fullchain) if terminating TLS at origin (when not using Cloudflare proxy).
- HTTP (port 80) must 301 to HTTPS (port 443) with a single hop.

Robots & Sitemaps
- robots.txt should reference only existing sitemaps:
  Sitemap: https://ironsnout.fun/sitemap.xml
- If using a sitemap index, ensure the referenced files exist before listing them.

Mixed Content Checklist
- Replace all http:// references in HTML/CSS/JS with https:// (or protocol-relative //).
- Third-party assets must support HTTPS; if not, host locally or choose an HTTPS-capable provider.

Verification Steps (after any change)
1) Browser checks
- http://ironsnout.fun → single 301 → https://ironsnout.fun/
- https://ironsnout.fun/sitemap.xml renders XML (not HTML download page)

2) Headers (PowerShell)
- iwr 'https://ironsnout.fun/sitemap.xml' -Method Head | % { $_.StatusCode; $_.Headers['Content-Type'] }
  Expect: 200 and application/xml; charset=utf-8

3) Googlebot simulation (PowerShell)
- $ua='Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
- iwr 'https://ironsnout.fun/sitemap.xml' -Headers @{ 'User-Agent'=$ua } -Method Head

4) Google Search Console
- Sitemaps: resubmit https://ironsnout.fun/sitemap.xml
- HTTPS section: click “验证修复” and monitor status

Troubleshooting
- If GSC shows “无法抓取”:
  - Check Cloudflare status page for regional outages.
  - Ensure no WAF rules block Googlebot (403), no 5xx spikes, and no redirect loops.
  - Verify Content-Type and that body isn’t compressed incorrectly (gzip corruption).
  - Re-test with HEAD/GET for both normal UA and Googlebot UA.

Owner Notes
- Keep this file in repo root to prevent configuration drift.
- When changing hosting or Cloudflare settings, update this document accordingly.