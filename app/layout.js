import Script from "next/script";
import RouteHandler from "@/components/common/RouteHandler";
import SmoothScroll from "@/components/common/SmoothScroll";
import DeferredStyles from "@/components/common/DeferredStyles";
import GetQuotePopup from "@/components/common/GetQuotePopup";
import CtaPopupDelegator from "@/components/common/CtaPopupDelegator";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import SiteSchema from "@/components/common/SiteSchema";
import Analytics from "@/components/common/Analytics";

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

        {/* Third-party analytics — production only (components/common/Analytics.js) */}
        <Analytics />

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
        {/* Google Tag Manager (noscript) — production only */}
        {process.env.VERCEL_ENV === "production" && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K9WNLJ5"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
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
