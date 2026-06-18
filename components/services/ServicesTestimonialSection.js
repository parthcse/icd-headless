import { getTestimonialNodesByIds } from "@/lib/wp-home-data";
import { FALLBACK_TESTIMONIAL, mapTestimonialNode } from "@/lib/wp-testimonials";

export default async function ServicesTestimonialSection({ data }) {
  const nodes = await getTestimonialNodesByIds(data.testimonialId != null ? [data.testimonialId] : []);
  const testimonial = nodes.length ? mapTestimonialNode(nodes[0]) : FALLBACK_TESTIMONIAL;

  return (
    <section className="services-testimonial full-section">
      <div className="container animate fadeUp">
        <div className="heading-wrap pb-0">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          <p className="italic mx-auto max-w-5xl font-light">&ldquo;{testimonial.quote}&rdquo;</p>
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
