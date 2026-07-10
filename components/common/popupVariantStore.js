// Tiny client-side pub/sub for a PAGE-SPECIFIC popup variant.
//
// A service page can define `popup: { image, title, subtitle, autoDelay }` in
// its data file. [slug]/page.js then renders <PopupVariantRegistrar> which sets
// that config here; the global <GetQuotePopup/> reads it to swap its left column
// to the page's image and use the page's form copy + auto-open delay.
// null = the default site-wide popup (Vision cards + "Get A Free Quote").
let current = null;
const subscribers = new Set();

export function setPopupVariant(variant) {
  current = variant || null;
  subscribers.forEach((cb) => cb(current));
}

export function getPopupVariant() {
  return current;
}

export function subscribePopupVariant(cb) {
  subscribers.add(cb);
  return () => subscribers.delete(cb);
}
