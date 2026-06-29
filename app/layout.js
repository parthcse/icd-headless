import Script from "next/script";
import RouteHandler from "@/components/common/RouteHandler";
import SmoothScroll from "@/components/common/SmoothScroll";
import DeferredStyles from "@/components/common/DeferredStyles";
import GetQuotePopup from "@/components/common/GetQuotePopup";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
  title: "Icecube Digital",
  description:
    "Build, Grow, and Scale your eCommerce store with experts. Full-stack creative and digital services.",
  icons: {
    icon: "/assets/photos/icecube-digital-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <SmoothScroll />
        <RouteHandler />
        <DeferredStyles />
        {children}
        <GetQuotePopup />
        <WhatsAppButton />
        <Script src="/js/load-design.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
