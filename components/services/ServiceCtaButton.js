"use client";

/**
 * Service CTA. Renders a normal link when `href` is a real URL, or a button
 * that opens the site-wide GetQuotePopup (via the shared custom event) when
 * `href` is empty / "#" / "popup". Keeps the same btn markup + arrow as before.
 */
export default function ServiceCtaButton({ href, label, btnArrow, className = "btn btn-primary" }) {
  const isPopup = !href || href === "#" || href === "popup";

  const inner = (
    <>
      {label}
      {btnArrow && (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
          <path d={btnArrow} />
        </svg>
      )}
    </>
  );

  if (isPopup) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => window.dispatchEvent(new Event("icd:open-quote-popup"))}
      >
        {inner}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {inner}
    </a>
  );
}
