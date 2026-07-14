import Script from "next/script";
import RouteHandler from "@/components/common/RouteHandler";
import SmoothScroll from "@/components/common/SmoothScroll";
import DeferredStyles from "@/components/common/DeferredStyles";
import GetQuotePopup from "@/components/common/GetQuotePopup";
import CtaPopupDelegator from "@/components/common/CtaPopupDelegator";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import SiteSchema from "@/components/common/SiteSchema";

export const metadata = {
  title: "eCommerce Website Design &amp; Development Company - Icecube Digital",
  description:
    "IceCube Digital is a top-rated eCommerce website design, development and digital marketing company, creating beautiful web experiences to grow brands online.",
  icons: {
    icon: "/assets/photos/icecube-digital-favicon.png",
  },
  verification: {
    google: "NLMzlxrO0ZL8kU6jmuehVaL8LrtGWJJNMtn-MC-Wc_s",
    other: {
      "p:domain_verify": "6b10f602e5191523b91adb421d3993f8",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9WNLJ5');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Geo / location meta (multi-location offices: UK, AU, US, IN) */}
        <meta name="geo.region" content="GB-CHS" />
        <meta name="geo.placename" content="Cheshire" />
        <meta name="geo.position" content="53.339488;-2.574432" />
        <meta name="ICBM" content="53.339488, -2.574432" />
        <meta name="geo.region" content="AU-SA" />
        <meta name="geo.placename" content="Northfield" />
        <meta name="geo.position" content="-34.848383;138.626129" />
        <meta name="ICBM" content="-34.848383, 138.626129" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sunnyvale" />
        <meta name="geo.position" content="37.36883;-122.036349" />
        <meta name="ICBM" content="37.36883, -122.036349" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.043872;72.534361" />
        <meta name="ICBM" content="23.043872, 72.534361" />

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

        <link rel="preload" href="/fonts/Gilroy-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Gilroy-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Gilroy-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Gilroy-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/animated.css" />
        <link rel="stylesheet" href="/css/output.css" />
        {/* owl.carousel CSS is deferred (loaded after hydration by <DeferredStyles/>) to avoid render-blocking; noscript fallback for no-JS users. */}
        <noscript>
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        </noscript>
        {/* Site-wide JSON-LD structured data (LocalBusiness, WebSite, Organization). Edit lib/site-schema.js */}
        <SiteSchema />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9WNLJ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll />
        <RouteHandler />
        <DeferredStyles />
        {children}
        <GetQuotePopup />
        <CtaPopupDelegator />
        <WhatsAppButton />
        <Script src="/js/load-design.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
