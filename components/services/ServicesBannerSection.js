import { Fragment } from "react";
import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";
import ContactForm from "@/components/common/ContactForm";
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

export default function ServicesBannerSection({ data }) {
  return (
    <section className="services-banner full-section relative border-t-0 xl:py-36">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
        <span className="bg-black absolute inset-0 bg-opacity-25" />
      </div>
      <div className="container relative z-10 pt-space-mini mt-8 md:mt-0 xl:pt-0 grid lg:grid-cols-2 gap-space items-center">
        <div className="text-box leading-relaxed space-y-5 my-auto animate fadeUp">
          <h1 className="font-48 font-bold leading-tight">{data.heading}</h1>
          {data.paragraphs.map((p, i) => <p key={i}>{Array.isArray(p) ? renderParts(p) : p}</p>)}
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
          {data.closingParagraph && <p>{data.closingParagraph}</p>}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} />
            <span className="text-muted font-semibold">OR</span>
            <a href={data.phoneHref} className="btn btn-secondary">
              <img src="/assets/icons/call-icon-orange.svg" alt="" /> {data.phoneLabel}
            </a>
          </div>
        </div>
        <div className="relative">
          {data.guaranteeBadge && (
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex -translate-y-1/2 justify-center">
              <div className="animate fadeUp flex items-center gap-2.5 whitespace-nowrap rounded-full border-2 border-primary bg-black-light px-5 py-2.5 shadow-lg shadow-primary/25">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-black sm:h-8 sm:w-8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="text-base font-bold leading-none text-white sm:text-lg">
                  <span className="text-primary">100%</span> Money-Back Guarantee
                </span>
              </div>
            </div>
          )}
          <ContactForm variant="banner" title={data.formTitle} subtitle={data.formSubtitle} badge={data.guaranteeBadge} btnArrow={data.btnArrow} />
        </div>
      </div>
    </section>
  );
}
