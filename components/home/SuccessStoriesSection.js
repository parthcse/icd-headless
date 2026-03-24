import Reveal from "../animations/Reveal";
import ErrorState from "../common/ErrorState";
import client from "../../lib/apollo-client";
import { CASE_STUDIES_QUERY } from "../../graphql/caseStudies";
import CaseStudySlider from "./CaseStudySlider";

export default async function SuccessStoriesSection() {
  let nodes = [];
  let fetchError = null;

  try {
    const { data, error } = await client.query({
      query: CASE_STUDIES_QUERY,
      variables: { first: 12 },
    });

    if (error) {
      fetchError = error.message || "Unable to load case studies.";
    } else {
      nodes = data?.caseStudies?.nodes ?? [];
    }
  } catch (e) {
    fetchError = e?.message || "Unable to load case studies.";
  }

  if (fetchError) {
    return (
      <section className="section-pad border-b border-[#202020]" aria-labelledby="success-stories-heading">
        <div className="site-gutter">
          <div className="site-container">
          <Reveal>
            <ErrorState
              title="Could not load success stories"
              message={fetchError}
              className="border-[#202020] bg-black/40"
            />
          </Reveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad border-b border-[#202020]" aria-labelledby="success-stories-heading">
      <div className="site-gutter">
        <div className="site-container">
        <Reveal>
          <header className="mb-10 lg:mb-14" id="success-stories-heading">
            <h2 className="section-heading-light">Our Client</h2>
            <h2 className="section-heading-bold mt-1">Success Stories</h2>
            <p className="section-desc mt-4">
              This is where we take you on a journey through real-world examples of strategy, design, and engineering
              coming together—so you can see how we help brands grow, convert, and scale with confidence.
            </p>
          </header>
        </Reveal>

        <Reveal delayMs={100}>
          {nodes.length > 0 ? (
            <CaseStudySlider items={nodes} />
          ) : (
            <p className="text-white/70 text-lg max-w-2xl" role="status">
              No case studies are published yet. Please check back soon.
            </p>
          )}
        </Reveal>
        </div>
      </div>
    </section>
  );
}
