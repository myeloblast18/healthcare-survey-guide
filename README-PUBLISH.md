# Healthcare Survey Guide — next deployment

Live site: https://myeloblast18.github.io/healthcare-survey-guide/

## What is already included
- 8 referral destinations: Primum, Healthcasts, Enos Health, ZoomRx, Sermo, M3 Global Research, All Global Circle, MDForLives
- New `best-paid-medical-surveys.html`
- New `healthcare-communities.html`
- Referral disclosure + `rel="sponsored nofollow noopener"`
- Custom GA4 `referral_click` event instrumentation
- Owner page: `https://myeloblast18.github.io/healthcare-survey-guide/analytics.html`
- Updated sitemap, robots.txt, llms.txt, structured data and canonical URLs

## Google Analytics: ONE item still required before the ideal one-time upload
Create a GA4 web stream for:
`https://myeloblast18.github.io/healthcare-survey-guide/`

Then copy the Measurement ID, which begins with `G-`.

Replace `G-REPLACE_ME` in `site-config.js` with that ID.

The tracking loader intentionally does nothing while the placeholder remains, so uploading before the ID is safe, but if you want one final upload, add the ID first.

## GA4 referral-click event
Every `.referral-link` sends:
- event name: `referral_click`
- `company`
- `link_url`
- `link_text`
- `page_path`

## Google Search Console
After deployment, create a URL-prefix property for:
`https://myeloblast18.github.io/healthcare-survey-guide/`

Then submit:
`https://myeloblast18.github.io/healthcare-survey-guide/sitemap.xml`

Do not submit `analytics.html`; it is intentionally `noindex`.
