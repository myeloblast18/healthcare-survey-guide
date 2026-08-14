(function () {
  const id = (window.SITE_CONFIG && window.SITE_CONFIG.GA_MEASUREMENT_ID) || "";
  const valid = /^G-[A-Z0-9]+$/i.test(id) && id !== "G-REPLACE_ME";

  if (valid) {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", id, { send_page_view: true });
  }

  document.addEventListener("click", function (e) {
    const a = e.target.closest("a.referral-link");
    if (!a || !valid || typeof window.gtag !== "function") return;

    gtag("event", "referral_click", {
      company: a.dataset.company || "unknown",
      link_url: a.href,
      link_text: (a.textContent || "").trim(),
      page_path: location.pathname
    });
  });
})();
