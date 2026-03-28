"use client";

import Script from "next/script";

export default function DesignScripts() {
  return (
    <Script src="/js/load-design.js" strategy="afterInteractive" />
  );
}
