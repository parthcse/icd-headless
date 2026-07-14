import Script from "next/script";

/**
 * Third-party analytics / tracking: GTM, Lucky Orange, Hotjar, Hello Bar.
 *
 * Rendered ONLY on the production deployment (icecubedigital.com) — never on
 * localhost (`next dev`) or Vercel preview URLs. Loading these off-production
 * pollutes analytics data, and Lucky Orange in particular auto-registers the
 * loading origin (e.g. "localhost:3000") as the site's domain, which then blocks
 * the real domain via CORS. Gate on VERCEL_ENV so only the live site loads them.
 */
export default function Analytics() {
  if (process.env.VERCEL_ENV !== "production") return null;

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

      {/* Lucky Orange */}
      <Script src="https://tools.luckyorange.com/core/lo.js?site-id=461ec88d" strategy="afterInteractive" />
      <Script id="lucky-orange-legacy" strategy="afterInteractive">
        {`window.__lo_site_id = 73641;
(function() {
  var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
  wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
})();`}
      </Script>

      {/* Hotjar */}
      <Script id="hotjar" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:5271059,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>

      {/* Hello Bar */}
      <Script src="https://my.hellobar.com/8787e096d22589c9fd06777a530cbd8cdcf57e64.js" strategy="afterInteractive" />
    </>
  );
}
