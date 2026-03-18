import Reveal from "../animations/Reveal";
import ErrorState from "../common/ErrorState";
import client from "../../lib/apollo-client";
import { TESTIMONIALS_QUERY } from "../../graphql/testimonials";
import TestimonialSlider from "./TestimonialSlider";

export default async function HappyCustomersSection() {
  let nodes = [];
  try {
    const { data } = await client.query({
      query: TESTIMONIALS_QUERY,
      variables: { first: 9 },
    });
    nodes = data?.testimonials?.nodes || [];
  } catch (e) {
    return (
      <ErrorState
        title="Could not load testimonials"
        message={e?.message || "Please try again later."}
      />
    );
  }

  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
            Happy Customers
          </h2>
          <p className="mt-4 text-zinc-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Teams of all sizes trust us to design, build, and scale digital products that perform.
          </p>
        </div>
        <TestimonialSlider items={nodes} />
      </section>
    </Reveal>
  );
}
