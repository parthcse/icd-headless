import Reveal from "../animations/Reveal";
import ErrorState from "../common/ErrorState";
import QuoteCTAButton from "../ui/QuoteCTAButton";
import client from "../../lib/apollo-client";
import { TESTIMONIALS_QUERY } from "../../graphql/testimonials";
import TestimonialSlider from "./TestimonialSlider";

export default async function HappyCustomersSection() {
  let nodes = [];
  try {
    const { data } = await client.query({
      query: TESTIMONIALS_QUERY,
      variables: { first: 12 },
    });
    nodes = data?.testimonials?.nodes || [];
  } catch (e) {
    return (
      <section className="border-b border-[#202020] section-pad text-white">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-[40px]">
          <ErrorState
            title="Could not load testimonials"
            message={e?.message || "Please try again later."}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-[#202020] section-pad text-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-[40px]">
        <Reveal>
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="section-heading-light">Kind Words from Our</p>
            <h2 className="section-heading-bold mt-1">Happy Customers</h2>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="mt-[clamp(2.5rem,5vh,4rem)] block">
          <TestimonialSlider items={nodes} />
        </Reveal>

        <Reveal delayMs={140} className="mt-10 flex justify-center">
          <QuoteCTAButton href="/testimonials">View More Reviews</QuoteCTAButton>
        </Reveal>
      </div>
    </section>
  );
}
