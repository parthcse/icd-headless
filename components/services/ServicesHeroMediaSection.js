import { Fragment } from "react";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";
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
 * Hero for "special" product landing pages (e.g. the AI product pages): text +
 * CTAs on the left, an animated GIF (or image/video) in a bordered box on the
 * right — in place of the contact form used by ServicesBannerSection.
 *
 * Data shape:
 *   {
 *     eyebrow?, heading, paragraphs?: (string|parts[])[], checklistItems?: string[],
 *     ctaLabel, ctaHref, ctaLabelSecondary?, ctaHrefSecondary?,
 *     phoneLabel?, phoneHref?, media, mediaAlt?, btnArrow?
 *   }
 */
export default function ServicesHeroMediaSection({ data }) {
  return (
    <section className="services-banner full-section relative border-t-0 xl:py-36">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
        <span className="bg-black absolute inset-0 bg-opacity-25" />
      </div>
      <div className="container relative z-10 pt-space-mini mt-8 md:mt-0 xl:pt-0 grid lg:grid-cols-2 gap-space items-center">
        <div className="text-box leading-relaxed space-y-5 my-auto animate fadeUp">
          {data.eyebrow && <h3 className="font-24 font-semibold text-primary">{data.eyebrow}</h3>}
          <h1 className="font-48 font-bold leading-tight">{data.heading}</h1>
          {data.paragraphs?.map((p, i) => <p key={i}>{Array.isArray(p) ? renderParts(p) : p}</p>)}
          {data.checklistItems?.length > 0 && (
            <ul className="space-y-2 font-semibold">
              {data.checklistItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckPrimaryIcon className="w-[1em] mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} />
            {data.ctaLabelSecondary && (
              <ServiceCtaButton href={data.ctaHrefSecondary} label={data.ctaLabelSecondary} className="btn btn-secondary" />
            )}
            {data.phoneLabel && (
              <>
                <span className="text-muted font-semibold">OR</span>
                <a href={data.phoneHref} className="btn btn-secondary">
                  <img src="/assets/icons/call-icon-orange.svg" alt="" /> {data.phoneLabel}
                </a>
              </>
            )}
          </div>
        </div>
        <div className="relative animate fadeUp">
          <div className="overflow-hidden rounded-xl border border-primary bg-black-light">
            <img src={data.media} alt={data.mediaAlt || ""} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
