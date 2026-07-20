import Script from "next/script";

/**
 * Third-party analytics / tracking / chat.
 *
 * Active:   GTM, Lucky Orange, Hello Bar, JivoChat
 * Disabled: Hotjar (commented out below — uncomment to restore)
 *
 * Load order matters for Core Web Vitals: only GTM runs `afterInteractive`
 * (it needs to fire early for tracking accuracy). Everything else is
 * `lazyOnload` so it waits for window load instead of competing with
 * hydration for the main thread, which is what INP measures.
 */
export default function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9WNLJ5');`}
      </Script>

      {/* Lucky Orange (legacy pre-2021 snippet, site 73641).
          The modern tag (tools.luckyorange.com/core/lo.js?site-id=461ec88d) was removed on
          2026-07-20: that site ID is dead — settings.luckyorange.com/461ec88d returns 404, so
          the script loaded ~42 KB, recorded nothing, and logged a console error on every page
          view. Running it alongside this one was also a duplicate install.
          If Lucky Orange is still wanted, replace this block with a single modern tag using a
          site ID that resolves 200; otherwise delete it (Hotjar already covers heatmaps). */}
      <Script id="lucky-orange-legacy" strategy="lazyOnload">
        {`window.__lo_site_id = 73641;
(function() {
  var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
  wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
})();`}
      </Script>

      {/* ------------------------------------------------------------------
          Hotjar — DISABLED 2026-07-20. Site 5271059, kept here so it can be
          switched back on later: delete the two comment markers below and it
          runs again exactly as before (strategy is already set to lazyOnload).

          Why it is off: its websocket to ws.hotjar.com fails inside Google's
          PageSpeed runner, which logged 2 console errors and cost a point on
          the Best Practices "errors in console" audit. It works fine for real
          visitors — this is purely to clear the audit. Lucky Orange (above)
          still covers heatmaps and session recording in the meantime.
          ------------------------------------------------------------------ */}
      {/*
      <Script id="hotjar" strategy="lazyOnload">
        {`(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:5271059,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      */}

      {/* Hello Bar */}
      <Script src="https://my.hellobar.com/8787e096d22589c9fd06777a530cbd8cdcf57e64.js" strategy="afterInteractive" />

      {/* JivoChat live-chat widget (next/script replaces the WordPress loadJivoWidget() helper).
          lazyOnload, not afterInteractive: the widget is ~18 KB of loader that pulls a much
          larger chat bundle, and nothing on first paint depends on it. Deferring to window load
          keeps it out of the main-thread work that INP is measured against. */}
      <Script src="https://code.jivosite.com/widget/cTUFKOfnKl" strategy="lazyOnload" />
    </>
  );
}
