(function () {
  "use strict";
  const id = (window.SITE_CONFIG && window.SITE_CONFIG.GA_MEASUREMENT_ID) || "";
  const valid = /^G-[A-Z0-9]+$/i.test(id) && id !== "G-REPLACE_ME";

  if (valid) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id, { send_page_view: true });
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);
  }

  // This tracks referral-link clicks, not confirmed signups or paid bonuses.
  // Existing .referral-link selectors and GA4 event name are preserved.
  document.addEventListener("click", function (event) {
    const target = event.target;
    const anchor = target && target.closest ? target.closest("a.referral-link[href]") : null;
    if (!anchor || !valid || typeof window.gtag !== "function") return;
    let destination;
    try { destination = new URL(anchor.href, location.href); } catch (_) { return; }
    if (!/^https?:$/.test(destination.protocol)) return;
    window.gtag("event", "referral_click", {
      company: anchor.dataset.company || "unknown",
      link_url: destination.href,
      link_text: (anchor.textContent || "").trim().slice(0, 120),
      page_path: location.pathname,
      placement: anchor.dataset.placement || (anchor.closest("aside") ? "sidebar" : anchor.closest(".hero-cta") ? "hero" : "content"),
      transport_type: "beacon"
    });
  }, { passive: true });
})();
