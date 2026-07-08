import { Fragment } from "react";
import { getTestimonial } from "@/lib/testimonials";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : (
      <a key={i} href={part.href} {...(/^https?:\/\//.test(part.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

export default function ServicesTestimonialSection({ data }) {
  const testimonial = data.testimonialSlug ? getTestimonial(data.testimonialSlug) : null;
  // No (or unknown) testimonial configured → skip the section entirely.
  if (!testimonial) return null;

  const paragraphs = Array.isArray(testimonial.quote) ? testimonial.quote : [testimonial.quote];

  return (
    <section className="services-testimonial full-section">
      <div className="container animate fadeUp">
        <div className="heading-wrap pb-0">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {paragraphs.map((para, i) => (
            <p key={i} className="italic mx-auto max-w-5xl font-light">
              {i === 0 ? "“" : ""}{Array.isArray(para) ? renderParts(para) : para}{i === paragraphs.length - 1 ? "”" : ""}
            </p>
          ))}
          <div className="flex items-center text-left justify-center gap-4 pt-space-small">
            <img src={testimonial.avatar} alt={testimonial.avatarAlt} className="!w-[3.5em] aspect-square rounded-full object-cover" />
            <div className="small">
              <h3 className="font-semibold text-[1.3em] mb-1 leading-none">{testimonial.name}</h3>
              {testimonial.designation ? <p>{testimonial.designation}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
