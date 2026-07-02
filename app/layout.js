import Script from "next/script";
import RouteHandler from "@/components/common/RouteHandler";
import SmoothScroll from "@/components/common/SmoothScroll";
import DeferredStyles from "@/components/common/DeferredStyles";
import GetQuotePopup from "@/components/common/GetQuotePopup";
import CtaPopupDelegator from "@/components/common/CtaPopupDelegator";
import WhatsAppButton from "@/components/common/WhatsAppButton";

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
