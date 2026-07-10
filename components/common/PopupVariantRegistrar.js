"use client";

import { useEffect } from "react";
import { setPopupVariant } from "@/components/common/popupVariantStore";

/**
 * Rendered by [slug]/page.js when a service page defines a `popup` config.
 * Registers the page's popup variant on mount and clears it on unmount, so the
 * global GetQuotePopup reverts to the default when the visitor navigates away.
 */
export default function PopupVariantRegistrar({ config }) {
  useEffect(() => {
    setPopupVariant(config);
    return () => setPopupVariant(null);
  }, [config]);
  return null;
}
