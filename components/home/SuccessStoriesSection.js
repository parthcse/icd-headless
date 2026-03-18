import Reveal from "../animations/Reveal";
import ErrorState from "../common/ErrorState";
import client from "../../lib/apollo-client";
import { CASE_STUDIES_QUERY } from "../../graphql/caseStudies";
import CaseStudySlider from "./CaseStudySlider";

export default async function SuccessStoriesSection() {
  let nodes = [];
  try {
    const { data } = await client.query({
      query: CASE_STUDIES_QUERY,
      variables: { first: 9 },
    });
    nodes = data?.caseStudies?.nodes || [];
  } catch (e) {
    return (
      <ErrorState
        title="Could not load success stories"
        message={e?.message || "Please try again later."}
      />
    );
  }

  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
            Success Stories
          </h2>
          <p className="mt-4 text-zinc-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Real results from brands that partnered with us to redesign, rebuild, and scale their digital presence.
          </p>
        </div>
        <CaseStudySlider items={nodes} />
        <div className="mt-10 text-center">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-2.5 text-[13px] font-semibold text-zinc-100 hover:border-orange-500 hover:text-orange-400 transition-all duration-300"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
