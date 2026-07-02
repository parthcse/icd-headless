import { Fragment } from "react";
import ContactForm from "@/components/common/ContactForm";
import ServiceCtaButton from "@/components/services/ServiceCtaButton";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold inline underline">{part.text}</a>
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
                <li key={i} className="flex items-center gap-2">
                  <img className="w-[1em]" src="/assets/icons/check-primary-icon.svg" alt="" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {data.closingParagraph && <p>{data.closingParagraph}</p>}
          <div className="flex flex-wrap items-center gap-4">
            <ServiceCtaButton href={data.ctaHref} label={data.ctaLabel} btnArrow={data.btnArrow} />
            <span className="text-muted font-semibold">OR</span>
            <a href={data.phoneHref} className="btn btn-secondary">
              <img src="/assets/icons/call-icon-orange.svg" alt="" /> {data.phoneLabel}
            </a>
          </div>
        </div>
        <ContactForm variant="banner" title={data.formTitle} btnArrow={data.btnArrow} />
      </div>
    </section>
  );
}
