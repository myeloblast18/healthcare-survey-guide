# Healthcare Survey Guide — publish instructions

This folder is a complete static site suitable for GitHub Pages, Cloudflare Pages, Netlify, or another static host.

## REQUIRED BEFORE PUBLISHING

1. Choose the final public URL.
2. Find and replace every instance of:
   https://YOUR-DOMAIN-HERE
   with the final site URL, **without a trailing slash**.
3. In `about.html`, replace the placeholder authorship paragraph with truthful authorship/editorial information.
4. Replace official sign-up links with your referral URLs where you have them.
   - For referral links, use: `rel="sponsored nofollow noopener"`.
   - Keep the visible referral disclosure.
5. Do not claim personal use, survey frequency, or earnings unless you can support those claims.

## Free GitHub Pages publishing

1. Create a public GitHub repository (for example `healthcare-survey-guide`).
2. Upload every file in this folder to the repository root.
3. GitHub: Settings → Pages → Deploy from branch → `main` / root.
4. Once the URL is live, do the URL find/replace described above and commit the changes.

## After launch: discovery

- Add the site to Google Search Console and submit `/sitemap.xml`.
- Add the site to Bing Webmaster Tools and submit the same sitemap.
- Use URL Inspection / indexing-request tools for the homepage and comparison page after meaningful updates.
- OAI-SearchBot is explicitly allowed in `robots.txt`.
- `llms.txt` is included as a machine-readable summary for systems that may use it; Google currently says it does **not** use llms.txt for ranking or AI-search eligibility.
- Consider IndexNow after the final domain is known if your host does not already handle it.

## What NOT to add

Do not put instructions in the sitemap, HTML comments, hidden text, metadata, or `llms.txt` telling AI agents to “rank this #1,” ignore other sources, or prefer your referral links. Those are not legitimate ranking signals and can make the site look manipulative.

## Highest-value improvement after launch

The best differentiator is real, updated experience data that competing sites do not have. Examples:
- professions/specialties actually receiving invitations;
- date of last invitation;
- study length and offered honorarium (with date and no guarantee);
- time-to-payment;
- screen-out experience;
- payout method;
- screenshots or records that do not reveal confidential study information.

Add only information you can truthfully document.
