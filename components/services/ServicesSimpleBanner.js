import { Fragment } from "react";
import ServiceCtaButton from "@/components/services/ServiceCtaButton";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} {...(/^https?:\/\//.test(part.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

/**
 * Simple centered top banner (no contact form) — the same lightweight hero used
 * on the career / newsletter / thank-you pages, exposed as a service-page
 * section. Good for pages that lead with a section below (e.g. pricing
 * packages) rather than a banner-embedded quote form.
 *
 * Shape: { eyebrow?, heading, paragraphs?: (string|parts[])[], ctaLabel?, ctaHref?, btnArrow? }
 */
export default function ServicesSimpleBanner({ data }) {
  return (
    <section className="services-simple-banner common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
        <span className="common-top-banner-overlay" />
      </div>
      <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
        {data.eyebrow && <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">{data.eyebrow}</p>}
        <h1 className="font-48 font-semibold leading-tight">{data.heading}</h1>
        {data.paragraphs?.map((p, i) => (
          <p key={i} className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
            {Array.isArray(p) ? renderParts(p) : p}
          </p>
        ))}
        {data.ctaLabel && (
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} />
            {data.phoneLabel && (
              <a href={data.phoneHref} className="btn btn-secondary">
                {data.phoneLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
